// @flow

import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { observable } from 'mobx';
import { observer } from 'mobx-react/native';

import {Actions, Scene, Router, ActionConst} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="loading" component={Loading} initial={true} type={ActionConst.REPLACE}/>
    <Scene key="auth" component={Auth} title="ログイン" type={ActionConst.REPLACE}/>
    <Scene key="home" component={Home} title="Home" type={ActionConst.REPLACE} />
  </Scene>
);

const authState = observable({
  isAuthed: false,
});

function responseInfoCallback(error, result) {
  if (error) {
    console.log({ error });
    authState.isAuthed = false;
    alert('Error fetching data: ' + error.toString());
      Actions.auth();
  } else {
    console.log({ result });
    authState.isAuthed = true;
    Actions.home();
  }
}


(function initialize() {
  const infoRequest = new GraphRequest('/me', null, responseInfoCallback);
  new GraphRequestManager().addRequest(infoRequest).start();
})()

function facebookAuthAction() {
  LoginManager.logInWithReadPermissions(['public_profile']).then(result => {
    if (result.isCancelled) {
      console.log('Login was cancelled');
      authState.isAuthed = false;
      Actions.auth();
    } else {
      console.log('Login was successful with permissions', result);
      authState.isAuthed = true;
      Actions.home();
    }
  }, error => {
    console.log(`Login failed with error: ${error}`);
    authState.isAuthed = false;
      Actions.auth();
  });
}

function Auth() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text onPress={facebookAuthAction}>Facebookでログイン</Text>
    </View>
  );
}

function Loading() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>読み込み中</Text>
    </View>
  );
}

function Home() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>ホーム画面</Text>
    </View>
  );
}

function App() {
  return (
    <Router scenes={scenes} style={{
      backgroundColor: '#00ff77'
    }} />
  )
}

AppRegistry.registerComponent('reme', () => observer(App));
