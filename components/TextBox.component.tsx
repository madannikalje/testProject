import React from 'react'
import { TextInput, StyleSheet, SafeAreaView } from 'react-native'


export const TextBox = ({placeholder}) => {
  return (
    <SafeAreaView style={styles.container}>
        <TextInput placeholder={placeholder} style={styles.textBox} ></TextInput>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '5%',
      width: '70%',
    },
    textBox: {
      width: '100%',
      height: '100%',
      borderColor: '#8b9e9c',
      borderBottomWidth: 2,
      borderRadius: 5,
      paddingTop: 2,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    placeholder: {  
      paddingLeft: 5,
    }
})
