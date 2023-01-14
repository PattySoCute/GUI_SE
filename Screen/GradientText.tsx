import React from 'react'
import { Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'

export function GradientText(props) {
  return (
    <MaskedView maskElement={<Text style={[props.style, {backgroundColor: 'transparent'}]}>{props.text}</Text>}>
        <LinearGradient
            colors={['#FAC353', '#FFA897']}
        >
           <Text style={[props.style, {opacity: 0}]}>{props.text}</Text> 
        </LinearGradient>
    </MaskedView>
  )
}