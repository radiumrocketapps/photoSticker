// @flow
import CameraRoll from '@react-native-community/cameraroll'

// eslint-disable-next-line import/prefer-default-export
export const saveToCameraRoll = (image: string): Promise<string> =>
  // eslint-disable-next-line implicit-arrow-linebreak
  CameraRoll.saveToCameraRoll(image, 'photo')
    .then(() => image)
