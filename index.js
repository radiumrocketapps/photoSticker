import { AppRegistry } from 'react-native'
import './src/ReactotronConfig'
import App from './src/Components/App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)
