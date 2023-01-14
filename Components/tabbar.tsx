import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MapTrifold, Heart, Plus, SquaresFour, User } from 'phosphor-react-native'

const Tab = createBottomTabNavigator()

function Tabbars() {
  return (
    <>
      <StatusBar barStyle='light-content'/>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name='Map'
            // component={PlaceholderScreen}
          />
          <Tab.Screen
            name='My List'
            // component={PlaceholderScreen}
          />
          <Tab.Screen
            name='Add'
            // component={PlaceholderScreen}
          />
          <Tab.Screen
            name='Cartoon'
            // component={PlaceholderScreen}
          />
          <Tab.Screen
            name='Profile'
            // component={PlaceholderScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

const PlaceholderScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#604AE6'}}/>
  )
}

const AnimatedTabBar = (props : BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets()

  return (
    <View style={[styles.tabBar, {paddingBottom: bottom}]}>
    </View>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#2C2F4A'
  },
  activeBackground: {
    position: 'absolute'
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  component: {
    height: 60,
    width: 60,
    marginTop: -5
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: '#2C2F4A'
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 36,
    width: 36
  }
})

export default Tabbars