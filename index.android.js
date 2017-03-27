// @flow

import React from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { LoginManager } from 'react-native-fbsdk'

function facebookAuthAction() {
  LoginManager.logInWithReadPermissions(['public_profile']).then((result) => {
    if (result.isCancelled) {
      console.log('Login was cancelled')
    } else {
      console.log('Login was successful with permissions', result)
    }
  }, (error) => {
    console.log(`Login failed with error: ${error}`)
  })
}

export default function App() {
  return (
    <View>
      <Text onPress={facebookAuthAction}>Facebookでログイン</Text>
    </View>
  )
}

AppRegistry.registerComponent('reme', () => App)
