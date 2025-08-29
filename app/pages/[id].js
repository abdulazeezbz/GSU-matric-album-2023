import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity, ImageBackground, Alert} from "react-native";
import { Link, router } from "expo-router";


const Departments = () =>{
    return(
        <ScrollView style={styles.container}>

            <View style={styles.items}>
                {/* <Link href="../gallery/mathematics education" style={styles.btnTxt}> */}
                    <TouchableOpacity onPress={()=> router.push("../gallery/mathematics education?department=Mathematics Education")} style={styles.btn}>
                        <ImageBackground style={styles.menn} source={require("../../assets/mathematics education logo.png")}>
                            <Text style={styles.title}>Mathematics & Education</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                {/* </Link> */}
            </View>

            


            <View style={styles.items}>
                {/* <Link href="../computer/Computer Education" style={styles.btnTxt}> */}
                    <TouchableOpacity  onPress={()=> router.push("../computer/computer education?department=Computer Education")} style={styles.btn}>
                        <ImageBackground style={styles.menn} source={require("../../assets/computer Dept logo.jpg")}  >
                            <Text style={styles.title}>Computer  Education</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                {/* </Link> */}
            </View>

            <View style={styles.items}>
                {/* <Link href="../computer/Computer Education" style={styles.btnTxt}> */}
                    <TouchableOpacity  onPress={()=>{
                        Alert.alert("Other Departments", "Other Departments will be added when ever the pictures are ready, You can Contact us if you have your departments Matric Photos", 
                            [
                                {
                                    text:"cancel",
                                    style:"cancel"

                                },

                                 {
                                    text:"Phone Call",
                                    onPress: () => Linking.openURL("tel:08108184500"),
                                    style:"cancel"

                                },

                                 {
                                    text:"Whatsapp",
                                    onPress: () => Linking.openURL("https://wa.me/+2348108184500"),
                                    style:"cancel"

                                }
                            ]
                        )
                    }} style={styles.btn}>
                        <ImageBackground style={styles.menn} source={require("../../assets/icon.png")} >
                        <Text style={styles.title}>Other Departments ...</Text>
                        
                        </ImageBackground>
                    </TouchableOpacity>
                {/* </Link> */}
            </View>

           

       
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"whitesmoke"
    },
    items:{
        width:"95%",
        // height:200,
        display:"flex",
        backgroundColor:"white",
        flexDirection:"column-reverse",
        justifyContent:"center",
        alignItems:"center",
        flexBasis:200,
        margin:10,
        borderRadius:20,
    },
     menn:{
        height:200,
        width:"100%",
        borderTopRightRadius:20,
    },
    btn:{
        width:"100%",  
        
    },

    title:{
        color:"white",
        backgroundColor:"darkgreen",
        padding:20,
        fontSize:17,
        textAlign:"center",
        fontWeight:"bold",
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
    },
   
})

export default Departments;