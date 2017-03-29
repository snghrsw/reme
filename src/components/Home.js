import React from 'react'
import { Text, View } from 'react-native'

export default function Home(): React.Component {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>ホーム画面</Text>
    </View>
  )
}
