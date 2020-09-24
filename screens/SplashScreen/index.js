import React from 'react'
import {View,Text,Button,StyleSheet,Image,Dimensions,TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
function SplashScreen({navigation}) {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
                <Animatable.Image 
                style={styles.logo} 
                animation="bounceIn"
                duraton="1500"
                source={require('../../assets/images/baby.png')}/>
          </View>
          <Animatable.View 
            animation="fadeInUpBig"
            duraton="1500"
            style={styles.footer}>
            <Text style={styles.footerHeader}>Kết nối dễ dàng với các bảo mẫu</Text>
            <Text>Tiến hành đăng nhập</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.signInButton}
            >

                    <Text style={styles.textButton} >Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>

        </Animatable.View>
      </View>
  
    );
  }
  const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'rgb(68 ,101, 191)'
      },
      header: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
      },
      footer: {
          flex: 1,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: 50,
          paddingHorizontal: 30
      },
      logo: {
        width: height_logo,
        height: height_logo,
        backgroundColor:'#fff',
        borderRadius: height_logo/2,
    },
    footerHeader:{
        fontSize:18,
        fontWeight:"bold",
        textTransform:'uppercase',
        color:'#000050',
        marginBottom:10
    },
    textButton:{
        color:'#fff',
    },
    signInButton:{
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:20,
        borderRadius:20
    },
    button:{
        alignItems:"flex-end"
    }
})
export default SplashScreen