import * as React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import mark from './assets/mark123.png'
import ft from './assets/FOTO.PNG'
import olho1 from './assets/olho.png'
export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.content1}>
      <Image source={mark} style={styles.markimg}/>
      <Text style={styles.boatxt1}>Boas Vindas!</Text>
      <Text style={styles.boatext2}>Crie sua conta e use os espaço para comprar {'\n'}      itens variados e vender seus produtos</Text>
      </View>
    
    <Image source={ft} style={styles.ftimg}/>

    <View styles={styles.inputs}>
    <TextInput 
      style={styles.inputsenha}
      placeholder='Nome'
      />
      <TextInput 
      style={styles.inputsenha}
      placeholder='E-mail'
      />
      <TextInput 
      style={styles.inputsenha}
      placeholder='Telefone'
      />
      <TextInput 
      style={styles.inputsenha}
      placeholder='Senha'
      />
      <TextInput 
      style={styles.inputsenha}
      placeholder='Confirmar Senha'
      />
       <TouchableOpacity style={styles.btn}>
         <Text style={styles.entrartxt}> Entrar </Text>
          </TouchableOpacity>
      <Image source={olho1} style={styles.olhoimg}/>
      <Image source={olho1} style={styles.olhoimg2}/>


    </View>
     <Text style={styles.aindaacss}> Já tem uma conta? </Text>
<TouchableOpacity style={styles.createacc}>
      <Text style={styles.crateacctxt}> Ir para o login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
     backgroundColor: '#EDECEE',
  },
  content1:{
    alignItems: 'center',
  },
    markimg:{
    width:110,
    height:70,
    marginTop:20,
  },
    boatxt1:{
    position:'relative',
    left:5,
    fontWeight:"bolder",
    fontSize:20,
    color:'#1A181B',
    marginBottom:10,
  },
   boatext2:{
    fontSize:15.5,
    color:'#3D3A40'
  },
  ftimg:{
    position:'relative',
    left:120,
    width:110,
    height:110,
    marginTop:20,
  },
  inputsenha:{
  position:'relative',
  top:10,
  width:250,
  height:50,
  left:45,
  backgroundColor:'#ffffff',
  borderRadius:8,
  paddingLeft:20,
  color:'#9F9DA1',
  marginTop:10,
  },
  btn:{
  position:'relative',
  top:30,
  left:45,
  width:250,
  height:50,
  backgroundColor:'#6879C1',
  borderRadius:8,
  paddingLeft:20,
  },
  entrartxt:{
    position:'relative',
    left:78,
    top:15,
    fontWeight:'bolder',
    color:'white',
    fontSize:16,
    width:60,
  },
  olhoimg:{
   position:'relative',
   left:255,
   bottom:75,
   width:25,
   height:20,
 },
  olhoimg2:{
   position:'relative',
   left:255,
   bottom:155,
   width:25,
   height:20,
 },
  aindaacss:{
    color:'#3D3A40',
    position:'relative',
    top:50,
    left:110,
    width:130,
  },
  createacc:{
    position:'relative',
    left:45,
    top:70,
    backgroundColor:'#D9D8DA',
    width:250,
    height:50,
    borderRadius:8,

  },
  crateacctxt:{
    position:'relative',
    left:76,
    top:15,
    width:120,
    borderRadius:8,
    color:'#3D3A40',
    fontWeight:'bolder',
  },
});
