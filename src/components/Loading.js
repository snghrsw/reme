import React from 'react'
import { Text, View } from 'react-native'

export default function Loading(): React.Component {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>読み込み中</Text>
    </View>
  )
}
