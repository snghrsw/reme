import React from 'react'
import { Text, View } from 'react-native'
import { LoginManager } from 'react-native-fbsdk'
import { Actions } from 'react-native-router-flux'
import authState from './../store/AuthState'

function facebookAuthAction() {
  LoginManager.logInWithReadPermissions(['public_profile']).then((result) => {
    if (result.isCancelled) {
      console.log('Login was cancelled')
      authState.isAuthed = false
      Actions.auth()
    } else {
      console.log('Login was successful with permissions', result)
      authState.isAuthed = true
      Actions.home()
    }
  }, (error) => {
    console.log(`Login failed with error: ${error}`)
    authState.isAuthed = false
    Actions.auth()
  })
}

export default function Auth() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text onPress={facebookAuthAction}>Facebookでログイン</Text>
    </View>
  )
}
