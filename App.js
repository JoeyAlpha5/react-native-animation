/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect,useRef,useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated,
  Easing
} from 'react-native';

const App: () => Node = () => {

  const rotateAnim = useRef(new Animated.Value(0)).current
  const opacityAnim = useRef(new Animated.Value(0)).current
  const [rotationIsComplete,setRotationIsComplete] = useState(false)

  useEffect(() => {
    Animated.loop(
      // rotateAnim.addListener(({ value }) => {
      // //  check if rotation is complete
      //   if (value >= 45) {
      //     setRotationIsComplete(true)
      //   }
      // }),

      Animated.timing(
        rotateAnim,
        {
          toValue: 45,
          duration: 1200,
          easing: Easing.linear,
          useNativeDriver: true,
        }
      )
      
    ).start();
  }, [rotateAnim])

  return (
    <SafeAreaView style={styles.mainView}>
      <Animated.View style={[styles.animatedView,
          {
            transform:
            [
              // {translateX:rotateAnim},
              {
                rotate:rotateAnim.interpolate({
                  inputRange:[0,45],
                  outputRange:['0deg','360deg']
                })
              }
            ],
            borderRadius:rotateAnim.interpolate({
              inputRange:[0,25,45],
              outputRange:[100,100,50]
            }),
            backgroundColor:'#009688',        
          }
        ]}>

          <Animated.Text
            style={{
              opacity:rotateAnim.interpolate({
                inputRange:[0,44,45],
                outputRange:[0,0,1]
              }),
              color:'white',
            }}
          >
            {/* Rotation is complete */}
          </Animated.Text>

      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    backgroundColor:'#000',
    justifyContent:'center',
    alignItems:'center'
  },
  animatedView:{
    width:300,
    height:300,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:12,
  }
});

export default App;
