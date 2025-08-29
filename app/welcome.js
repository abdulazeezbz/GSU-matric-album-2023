import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { 
  View,
  Text, 
  SafeAreaView, 
  ScrollView, 
  Button, 
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";


const Welcome = () => {
 return(
  <View style={styles.container}>
    <Image source={require("../assets/icon.png")} style={styles.logo}/>
    <Text style={styles.welc}>Welcome to</Text>
    <Text style={styles.sch}>Gombe state University </Text>
    <Text style={styles.sch}>Matriculation Photo Album 2023</Text>
    <Text style={styles.dev}> Developed by AbdulAzeez ABZ</Text>
    
    <TouchableOpacity style={styles.btn} onPress={ ()=>
      router.push("./pages/1")
    } >
      <Text style={styles.btnTxt}>Contneu</Text>
    </TouchableOpacity>
   

  </View>
 ) 
}

const styles = StyleSheet.create({

  logo:{
    width:100,
    height: 100,
    marginBottom: 150,
    marginLeft: 130,
    // backgroundColor:"green"
  },
  welc:{
    textAlign:"center",
    color:"#15734a",
    fontSize:23,
    textTransform:"uppercase",
    fontWeight:"bold",
  },
  sch:{
    textAlign:"center",
    fontSize:18
  },
  
  dev:{
    fontWeight:"bold",
    fontSize:12,
    textAlign:"center",
    marginTop:30,
    marginBottom:10,
  },
  btn:{
    backgroundColor:"#15734a",
    padding:15,
    width:"95%",
    alignItems:"center",
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 6,
    borderRadius:20,
    marginBottom:-40,
    marginLeft:10,
  },
  btnTxt:{
    color:"white",
    fontSize:18,
  }
})

export default Welcome;

