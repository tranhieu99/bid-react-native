import React from 'react'
import { Spinner } from 'native-base';
import {View,StyleSheet} from 'react-native'
export default function index() {
    return (
        <View style={styles.fullScreen}>
            <Spinner />
        </View>
    )
}
const styles = StyleSheet.create({
    fullScreen:{
        height:'100%',
        position:'absolute',
        backgroundColor: 'rgba(0,0,0,0.7)',
        width:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})