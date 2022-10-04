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
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: true,
        }
      )
      
    ).start();
  }, [rotateAnim])

  return (
    <SafeAreaView style={styles.mainView}>
        <Animated.View style={[styles.animatedMainView,
            {
              transform:
              [
                // {translateX:rotateAnim},
                {
                  rotate:rotateAnim.interpolate({
                    inputRange:[0,45],
                    outputRange:['0deg','-360deg']
                  })
                }
              ],
              borderRadius:rotateAnim.interpolate({
                inputRange:[0,25,45],
                outputRange:[100,100,80]
              }),
            }
          ]}>


            {/* <Animated.Text
              style={{
                opacity:rotateAnim.interpolate({
                  inputRange:[0,44,45],
                  outputRange:[0,0,1]
                }),
                color:'white',
              }}
            >
        
            </Animated.Text> */}

        </Animated.View>

        <Animated.View style={[styles.animatedSecondView,
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
                outputRange:[100,100,70]
              })
            }
        ]}>
        </Animated.View>

        <Animated.View style={[styles.animatedThirdView,
            {
              transform:
              [
                // {translateX:rotateAnim},
                {
                  rotate:rotateAnim.interpolate({
                    inputRange:[0,45],
                    outputRange:['0deg','-360deg']
                  })
                }
              ],
              borderRadius:rotateAnim.interpolate({
                inputRange:[0,25,45],
                outputRange:[100,100,70]
              }),
            }
        ]}>
        </Animated.View>

        <Animated.View style={[styles.animatedFourthView,
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
                outputRange:[100,100,70]
              }),
            }
        ]}>
        </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    backgroundColor:'#1D1D1D',
    justifyContent:'center',
    alignItems:'center'
  },
  animatedMainView:{
    width:300,
    height:300,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:1,
    backgroundColor:'#272727',   
    position:'absolute',

  },
  animatedSecondView:{
    width:280,
    height:280,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:1,
    backgroundColor:'#3C3C3C',
    position:'absolute',
  },
  animatedThirdView:{
    width:260,
    height:260,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:1,
    backgroundColor:'#4E4E4E',
    position:'absolute',
  },
  animatedFourthView:{
    width:220,
    height:220,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:1,
    backgroundColor:'#5D5D5D',
    opacity:0.8,
  }
});

export default App;
