/* @flow */

import React from 'react'
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux'
import Auth from './Auth'
import Home from './Home'
import Loading from './Loading'

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="loading" component={Loading} initial type={ActionConst.REPLACE} />
    <Scene key="auth" component={Auth} title="ログイン" type={ActionConst.REPLACE} />
    <Scene key="home" component={Home} title="Home" type={ActionConst.REPLACE} />
  </Scene>,
)

export default function App() {
  return (
    <Router
      scenes={scenes}
      style={{
        backgroundColor: '#00ff77',
      }}
    />
  )
}
