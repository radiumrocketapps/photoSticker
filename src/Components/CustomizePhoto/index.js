// @flow
import { connect } from 'react-redux'
import Component from './CustomizePhoto'

const mapStateToProps = (state: any) => ({
  picture: state.camera.picture,
})

export default connect(mapStateToProps)(Component)
