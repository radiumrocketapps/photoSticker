// include node fs module
const fs = require('fs')

const removeFile = (path) => {
  fs.unlink(path, (err) => {
    if (!err) {
      // if no error, file has been deleted successfully
      console.log('File deleted: ', path)
    }
  })
}
const paths = [
  './node_modules/react-native-image-picker/lib/commonjs/internal/nativeInterface.js.flow',
  './node_modules/react-native-image-picker/lib/commonjs/index.js.flow',
]
paths.forEach(removeFile)
