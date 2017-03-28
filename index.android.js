// @flow

import React from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { LoginManager } from 'react-native-fbsdk'
import { observable } from 'mobx'
import { observer } from 'mobx-react/native'

// class AuthState {
//   @observable isAuthed = false;
// }

// const authState = observable({
//   isAuthed: false,
// })

// const authState = new AuthState();

const authState = observable({
  isAuthed: false,
})

function facebookAuthAction() {
  LoginManager.logInWithReadPermissions(['public_profile']).then((result) => {
    if (result.isCancelled) {
      console.log('Login was cancelled')
      authState.isAuthed = false
    } else {
      console.log('Login was successful with permissions', result)
      authState.isAuthed = true
    }
  }, (error) => {
    console.log(`Login failed with error: ${error}`)
    authState.isAuthed = false
  })
}

export default function App() {
  console.log('authState.isAuthed', authState.isAuthed)
  return (
    <View>
      <Text onPress={facebookAuthAction}>Facebookでログイン</Text>
      <Text>isAuthed: {authState.isAuthed.toString()}</Text>
    </View>
  )
}

// const AppState = observer(App);

AppRegistry.registerComponent('reme', () => observer(App))
