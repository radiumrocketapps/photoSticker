// @flow
import React from 'react'
import find from 'lodash/find'
import get from 'lodash/get'
import { Animated } from 'react-native'
import Gestures from 'react-native-easy-gestures'
import type { Sticker as StickerType } from 'src/redux/modules/stickers'
import RemoveButton from './RemoveButton'
import styles from './styles'
import type { ReduxProps } from '.'

type Coords = {
  x: number,
  y: number,
};

type Props = ReduxProps & StickerType & {
  canvasWidth: ?number,
  canvasHeight: ?number,
  selected: boolean,
  onDragStart: Function,
  onDragEnd: Function,
}

type State = {
  position: Coords,
  scale: number,
  rotate: string,
}

class Sticker extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      position: props.position,
      scale: 1,
      rotate: '0deg',
    }
  }

  easyOnChange = (event: any, style: string) => {
    const { scale } = find(get(style, 'transform', { scale: 1 }), 'scale')
    this.setState({ scale })
  }

  easyOnStart = () => {
    const { onDragStart } = this.props
    onDragStart()
  }

  easyOnRelease = (event: any, style: string) => {
    const position = {
      x: get(style, 'left', 0),
      y: get(style, 'top', 0),
    }
    const { scale } = find(get(style, 'transform'), 'scale') || { scale: 0 }
    const { rotate } = find(get(style, 'transform'), 'rotate') || {
      rotate: '0deg',
    }
    this.setState({ position, scale, rotate })
    this.easyUpdateStickerPosition(position, scale, rotate)
  };

  easyUpdateStickerPosition = (
    position: Coords,
    scale: number,
    rotate: string,
  ) => {
    const {
      id,
      instanceNumber,
      updateStickerPosition,
    } = this.props

    return updateStickerPosition({
      id,
      baseScale: scale,
      position,
      rotate,
      instanceNumber,
    })
  }

  render() {
    const {
      id,
      source,
      selected,
      instanceNumber,
    } = this.props

    const {
      position,
      rotate,
      scale,
    } = this.state

    const opposingScale = 1 / scale
    const panStyle = {
      top: position.y,
      left: position.x,
      position: 'absolute',
      transform: [{ scale }, { rotate }],
    }

    return (
      <Gestures
        key={id}
        style={panStyle}
        onStart={this.easyOnStart}
        onChange={this.easyOnChange}
        onRelease={this.easyOnRelease}
      >
        <Animated.View>
          {selected && (
            <RemoveButton
              id={id}
              style={{
                transform: [{ scale: opposingScale }],
              }}
              instanceNumber={instanceNumber}
            />
          )}
          <Animated.Image
            source={source}
            style={styles.stickerPreview}
          />
        </Animated.View>
      </Gestures>
    )
  }
}

export default Sticker
