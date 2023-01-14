import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Button } from 'react-native'
import bgSUKA from '../assets/bgSUKA.png'
import { CaretLeft, CaretRight, EnvelopeSimple, Key } from 'phosphor-react-native'
import LinearGradient from 'react-native-linear-gradient'
import OutlineInput from 'react-native-outline-input'

const { width } = Dimensions.get('window');
const aspectRatio = 500 / 500;
const height = width * aspectRatio;

function SignUp({navigation}: {navigation: any}) {
  const [fristname, setFristname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <View style={{alignItems: 'center'}}>
        <View
          // borderBottomLeftRadius={60}
          // overflow='hidden'
          height={height * 0.4}
        >
          <Image
            source={bgSUKA}
            style={{width, height}}
          />
        </View>
      </View>

      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.textInputSmall}>
        <View>
          <OutlineInput
            value={fristname}
            onChangeText={(e: string) => setFristname(e)}
            label='Fristname'
            fontFamily='Fredoka-Regular'
            fontSize={16}
            height={53}
            activeValueColor='#2C2F4A'
            activeBorderColor='#6D7DD3'
            activeLabelColor='#6D7DD3'
            passiveBorderColor='#ABADBB'
            passiveLabelColor='#2C2F4A'
            passiveValueColor='#ABADBB'
          />
        </View>

        <View style={styles.textInputRight}>
          <OutlineInput
            value={lastname}
            onChangeText={(e: string) => setLastname(e)}
            label='Lastname'
            fontFamily='Fredoka-Regular'
            fontSize={16}
            height={53}
            activeValueColor='#2C2F4A'
            activeBorderColor='#6D7DD3'
            activeLabelColor='#6D7DD3'
            passiveBorderColor='#ABADBB'
            passiveLabelColor='#2C2F4A'
            passiveValueColor='#ABADBB'
          />
        </View>
      </View>

      <View style={styles.textInput}>
        <View style={{paddingBottom: 20}}>
        <OutlineInput
            value={phoneNum}
            onChangeText={(e: string) => setPhoneNum(e)}
            label='Phone number'
            fontFamily='Fredoka-Regular'
            fontSize={16}
            height={53}
            activeValueColor='#2C2F4A'
            activeBorderColor='#6D7DD3'
            activeLabelColor='#6D7DD3'
            passiveBorderColor='#ABADBB'
            passiveLabelColor='#2C2F4A'
            passiveValueColor='#ABADBB'
          />
        </View>

        <View style={{paddingBottom: 20}}>
          <OutlineInput
            value={email}
            onChangeText={(e: string) => setEmail(e)}
            label='Email'
            fontFamily='Fredoka-Regular'
            fontSize={16}
            height={53}
            activeValueColor='#2C2F4A'
            activeBorderColor='#6D7DD3'
            activeLabelColor='#6D7DD3'
            passiveBorderColor='#ABADBB'
            passiveLabelColor='#2C2F4A'
            passiveValueColor='#ABADBB'
          />
        </View>
        
        <View style={{paddingBottom: 20}}>
          <OutlineInput
            value={password}
            onChangeText={(e: string) => setPassword(e)}
            label='Password'
            fontFamily='Fredoka-Regular'
            fontSize={16}
            height={53}
            activeValueColor='#2C2F4A'
            activeBorderColor='#6D7DD3'
            activeLabelColor='#6D7DD3'
            passiveBorderColor='#ABADBB'
            passiveLabelColor='#2C2F4A'
            passiveValueColor='#ABADBB'
          />
        </View>

        <View>
          <OutlineInput
            value={conPassword}
            onChangeText={(e: string) => setConPassword(e)}
            label='Confirm Password'
            fontFamily='Fredoka-Regular'
            fontSize={16}
            height={53}
            activeValueColor='#2C2F4A'
            activeBorderColor='#6D7DD3'
            activeLabelColor='#6D7DD3'
            passiveBorderColor='#ABADBB'
            passiveLabelColor='#2C2F4A'
            passiveValueColor='#ABADBB'
          />
        </View>
      </View>
        
      <Text style={styles.textBody}>
        Already have account?
        <Text style={styles.textButton} onPress={() => navigation.navigate('Login')}> LOG IN</Text>
      </Text>
      
      <View style={styles.btnContinuePosition}>
      <LinearGradient colors={['#FAC353', '#FFA897']} style={styles.btnContinue}>
        <Text style={{color: '#2C2F4A', fontFamily: 'Fredoka-SemiBold', fontSize: 16, position: 'absolute', left: 22, top: 14}}>
          CONTINUE
        </Text>
        <CaretRight
            size={24}
            weight="bold"
            color='#2C2F4A'
            style={{
              position: 'absolute',
              right: 15,
              top: 12
            }}
          />
      </LinearGradient>
      </View>

      <View style={styles.btnBackPosition}>
        <TouchableOpacity style={styles.btnBack}>
          <CaretLeft
            size={24}
            weight="bold"
            color='#FFA897'
            style={{
              position: 'absolute',
              left: 15,
              top: 12
            }}
          />
          <Text style={{color: '#FFA897', fontFamily: 'Fredoka-SemiBold', fontSize: 16, position: 'absolute', right: 22, top: 14}}>
            MAP
          </Text>
          {/* <GradientText text= 'MAP' style={{fontFamily: 'Fredoka-SemiBold', fontSize: 16}}/> */}
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#F4F6FD"
  },
  title: {
    position: 'absolute',
    top: 40,
    left: '28%',
    fontFamily: 'Fredoka-SemiBold',
    fontSize: 64,
    color: '#2C2F4A'
  },
  textBody: {
    paddingBottom: 32,
    textAlign: 'center',
    fontFamily: 'Fredoka-Regular',
    fontSize: 16,
    color: '#2C2F4A'
  },
  textButton: {
    fontFamily: 'Fredoka-SemiBold',
    fontSize: 16,
    color: '#6D7DD3'
  },

  btnContinue: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 145,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    elevation: 2
  },
  btnContinuePosition: {
    paddingRight: 16,
    alignItems: 'flex-end'
  },

  btnBack: {
    backgroundColor: '#2C2F4A',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 100,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    elevation: 2
  },
  btnBackPosition: {
    position: 'relative',
    bottom: 48,
    paddingLeft: 16,
    alignItems: 'flex-start'
  },
  textInput: {
    color: '#F4F6FD',
    width: 400,
    paddingLeft: 16,
    top: -33
  },
  textInputSmall: {
    color: '#F4F6FD',
    width: 202,
    paddingLeft: 16
  },
  textInputRight: {
    position: 'relative',
    top: -53,
    left: 198,
  }
})

export default SignUp