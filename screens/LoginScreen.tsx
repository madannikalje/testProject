import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, Alert, SafeAreaView } from 'react-native'
import { TextBox } from '../components';

export const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#8b9e9c',
        marginBottom: 50,
      }}>Login</Text>
      <Text style={styles.text}>Username</Text>
      <TextBox placeholder="Enter your username"></TextBox>
      <Text style={[{
        marginTop: 30,
      },styles.text]}>Password</Text>
      <TextBox placeholder="Enter your password"></TextBox>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      height: '100%',
      width: '100%',
      backgroundColor: '#bae8e2',
      paddingLeft: '15%',
    },
    text: {
      fontSize: 20,
      marginBottom: 5,
    }

}) 


