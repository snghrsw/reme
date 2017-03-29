import { Actions } from 'react-native-router-flux'
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk'
import authState from './store/AuthState'

function responseInfoCallback(error: ?object, result: ?object) {
  if (error) {
    console.log({ error })
    authState.isAuthed = false
    alert(`Error fetching data: ${error.toString()}`)
    Actions.auth()
  } else {
    console.log({ result })
    authState.isAuthed = true
    Actions.home()
  }
}

(function initialize() {
  const infoRequest = new GraphRequest('/me', null, responseInfoCallback)
  new GraphRequestManager().addRequest(infoRequest).start()
}())
