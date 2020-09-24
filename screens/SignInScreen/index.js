import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'

import {View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { Toast } from 'native-base';
import {signIn,clearMsg} from './action'
import {connect} from 'react-redux'
import axios from 'axios'
import { LinearGradient } from 'expo-linear-gradient';
import Loading from '../../components/Loading'
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

function SignInScreen({navigation,signIn,clearMsg}) {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    const error = useSelector(state => state.authReducer.error)
    const loading = useSelector(state => state.authReducer.loading)
    const dataUser = useSelector(state => state.authReducer.data)
useEffect(()=>{
    if(error){
        Toast.show({
            text: error || '',
            buttonText: "Lỗi",
            position: "top",
            onClose: ()=> {
                clearMsg()
            }
          })}
    },[error])
const updateSecureTextEntry = () =>{
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    })
}
const handleSubmit = (e) =>{
    signIn({email: data.username,password:data.password})

}

    return (
      <View style={styles.container}>
          <View style={styles.header}>
                <Text style={styles.signInText}>Hãy đăng nhập để thuê bảo mẫu </Text>
          </View>
          <Animatable.View 
            animation="fadeInUpBig"
            duraton="1500"
            style={styles.footer}>
            <View style={styles.InputGroup}>
            <Text style={styles.label}>Số điện thoại</Text>
            <View style={styles.InputField}>
            <MaterialIcons 
                        name="call"
                        color="#777575"
                        size={20}
                        style={{marginRight:10}}
                    />
        <TextInput onChangeText={text => setData({
            ...data,
            username: text
        })} style={styles.textInput} placeholder="Số điện thoại" type="phone"/>
            </View>
            </View>

            <View style={styles.InputGroup}>
            <Text style={styles.label}>Mật khẩu</Text>
            <View style={styles.InputField}>
            <Feather 
                    name="lock"
                    color='#777575'
                    size={20}
                    style={{marginRight:10}}
                />
        <TextInput 
        onChangeText={text => setData({
            ...data,
            password: text
        })}
        style={styles.textInput} placeholder="Nhập mật khẩu"
        secureTextEntry={data.secureTextEntry ? true : false}
        />
        <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>

            </View>
            </View>
            <TouchableOpacity
                    style={[styles.signInButton,{
                        backgroundColor:'#000',
                        borderWidth: 1,

                    }]}
                    onPress={handleSubmit}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')}
                    style={[styles.signInButton, {
                        borderWidth: 1,
                        marginTop: 15,
                        backgroundColor:'#fff'
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#000'
                    }]}>Sign Up</Text>
                </TouchableOpacity>

        </Animatable.View>
        {loading && <Loading />}
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
    signInText:{
        color:'#fff',
        fontSize:18,
        fontWeight:"bold",
        textTransform:'uppercase',

    },
      header: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      },
      footer: {
          flex: 2,
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
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    button:{
        alignItems:"flex-end"
    },
    InputField:{
        flexDirection:'row',
        borderBottomColor:'#eee',
        borderBottomWidth:1,
        padding:5
    },
    InputGroup:{
        marginBottom:30
    },
    label:{
        fontSize:14,
        marginBottom:10
    },
    textInput:{
        flex:1
    }
})

export default connect(null,{
    signIn,
    clearMsg
})(SignInScreen)