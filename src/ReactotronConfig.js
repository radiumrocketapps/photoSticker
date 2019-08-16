import Reactotron, { networking } from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'

Reactotron.configure({
  name: 'photoSticker',
  // host: '10.0.1.1',
  // port: 9091
})

Reactotron.useReactNative({
  asyncStorage: { ignore: ['secret'] },
})

Reactotron.use(reduxPlugin())
Reactotron.use(networking())

Reactotron.connect()
Reactotron.clear()

console.tron = Reactotron
