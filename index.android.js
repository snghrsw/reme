/* @flow */

import { AppRegistry } from 'react-native'
import { observer } from 'mobx-react/native'

import App from './src/components/App'
import './src/app'

AppRegistry.registerComponent('reme', (): void => observer(App))
