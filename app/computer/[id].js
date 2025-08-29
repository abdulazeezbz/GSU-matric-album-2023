import { Link, useLocalSearchParams  } from "expo-router";

import { useState,useEffect } from "react";
import { 
  View,
  Text, 
  SafeAreaView, 
  ScrollView, 
  Button, 
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  ActivityIndicator,
  FlatList,
  Alert,
  Dimensions
} from "react-native";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';





const image = [
  { id: 1, src: require('../../assets/computer education (1).jpg') },
  { id: 2, src: require('../../assets/computer education (2).jpg') },
  { id: 3, src: require('../../assets/computer education (3).jpg') },
  { id: 4, src: require('../../assets/computer education (4).jpg') },
  { id: 5, src: require('../../assets/computer education (5).jpg') },
  { id: 6, src: require('../../assets/computer education (6).jpg') },
  { id: 7, src: require('../../assets/computer education (7).jpg') },
  { id: 8, src: require('../../assets/computer education (8).jpg') },
  { id: 9, src: require('../../assets/computer education (9).jpg') },
  { id: 10, src: require('../../assets/computer education (10).jpg') },
  { id: 11, src: require('../../assets/computer education (11).jpg') },
  { id: 12, src: require('../../assets/computer education (12).jpg') },
  { id: 13, src: require('../../assets/computer education (13).jpg') },
  { id: 14, src: require('../../assets/computer education (14).jpg') },
  { id: 15, src: require('../../assets/computer education (15).jpg') },
  { id: 16, src: require('../../assets/computer education (16).jpg') },
  { id: 17, src: require('../../assets/computer education (17).jpg') },
  { id: 18, src: require('../../assets/computer education (18).jpg') },
  { id: 19, src: require('../../assets/computer education (19).jpg') },
  { id: 20, src: require('../../assets/computer education (20).jpg') },
  { id: 21, src: require('../../assets/computer education (21).jpg') },
  { id: 22, src: require('../../assets/computer education (22).jpg') },
  { id: 23, src: require('../../assets/computer education (23).jpg') },
  { id: 24, src: require('../../assets/computer education (24).jpg') },
  { id: 26, src: require('../../assets/computer education (25).jpg') },
  { id: 27, src: require('../../assets/computer education (26).jpg') },
  { id: 28, src: require('../../assets/computer education (27).jpg') },
  { id: 29, src: require('../../assets/computer education (28).jpg') },
  { id: 30, src: require('../../assets/computer education (29).jpg') },
  { id: 31, src: require('../../assets/computer education (30).jpg') },
  { id: 32, src: require('../../assets/computer education (31).jpg') },
  { id: 33, src: require('../../assets/computer education (32).jpg') },
  { id: 34, src: require('../../assets/computer education (33).jpg') },
  { id: 35, src: require('../../assets/computer education (34).jpg') },
  { id: 36, src: require('../../assets/computer education (35).jpg') },
  { id: 37, src: require('../../assets/computer education (36).jpg') },
  { id: 38, src: require('../../assets/computer education (37).jpg') },
  { id: 39, src: require('../../assets/computer education (38).jpg') },
  { id: 40, src: require('../../assets/computer education (39).jpg') },
  { id: 41, src: require('../../assets/computer education (40).jpg') },
  { id: 25, src: require('../../assets/computer education (41).jpg') },
  { id: 42, src: require('../../assets/computer education (42).jpg') },

  // Add more images as needed
];


const New = () => {
  const { id } = useLocalSearchParams();
 
  const [isnoticevisible, setnoticevisible] = useState("");
  let dept = "";



  const department = "abdulazeezbello5882@gamil.com";

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };
 

  




 return(
  <View style={styles.container}>
    
  <Text style={styles.title}>Department Of <Text style={styles.min}> {id} </Text></Text>
 


  



  <TouchableOpacity
  onPress={() =>{ 
    setnoticevisible(true);
  }}
  style={styles.btn}>
    <Text style={styles.btnTxt}>Notice Board</Text>
  </TouchableOpacity>
{/* <ScrollView> */}
  <View Style={styles.cont}>

  <FlatList
   contentContainerStyle={styles.flatListContent}
      data={image}
      numColumns={4}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        
        <TouchableOpacity onPress={() => handleImagePress(item.src)}>
          <Image source={item.src} style={styles.img} />
        </TouchableOpacity>
        
      )}
    />
    

   

  </View>

{/* </ScrollView> */}

  <Modal style={styles.modal} animationType={"slide"} onRequestClose={() => setModalVisible(false)} visible={modalVisible}>
   <View style={styles.mtop}>
   <TouchableOpacity onPress={()=> setModalVisible(false) }>
       <Text style={styles.mback}>Back</Text>
    </TouchableOpacity>

     <View style={styles.viewFull}>
          <Image source={selectedImage} style={styles.fullimg}/>
        
      </View>

      <View style={styles.mdown}>

     <TouchableOpacity style={styles.btns}>
          <Text style={styles.btnTxt}><FontAwesome6 name="download" size={24} color="white" /></Text>
          </TouchableOpacity>
        

      </View>
    </View>
  </Modal>




  <Modal animationType={"fade"} onRequestClose={() => setnoticevisible(false)} visible={isnoticevisible}>
    <TouchableOpacity onPress={()=> setnoticevisible(false) }>
       <Text style={styles.mback}>Back</Text>
    </TouchableOpacity>

     <ScrollView style={styles.viewNotice}>
         <Text style={styles.notTitle}>
          {id}
         </Text>
         <Text style={styles.notCont}>
          {id} {id}
         </Text>
         <Text>{dept}</Text>
      </ScrollView>

      <View style={styles.mdown}>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Copy Text</Text>
        </TouchableOpacity>
        </View>
  </Modal>
</View>
) 
}

const screenWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
flatListContent: {
  padding: 10,
},
title:{
  textAlign:"center",
  margin:20,
  textTransform:"uppercase",
  fontSize:14,
},
min:{
  fontWeight:"bold"
},
img:{
  backgroundColor:"#0f3d1c",
  width:85,
  height:85,
  margin:3,
},
cont:{
  flex:1,
  justifyContent:"center",
  alignItems:"center"
  // flexDirection:"row",
  // flexWrap:"wrap",
},
box:{
  margin:3,
},
btn:{
  alignItems:"center",
  padding:15,
  margin:10,
  borderRadius:10,
  backgroundColor:"#0f3d1c",
  right:0
},  
  btns:{
    alignItems:"flex-end",
    padding:15,
    margin:10,
    borderRadius:10,
    backgroundColor:"#0f3d1c",
    // marginTop:500,
    position:"absolute",
    bottom:-160,
    borderWidth:2,
    borderColor:"white",
    right:10,
  },
btnTxt:{
  color:"white",
  fontSize:15,
},
  viewFull:{
    width: screenWidth,   // full width of device
    height: undefined,    // let height adjust automatically
    aspectRatio: 1,       // you can remove or set actual aspect ratio (e.g., 16/9)
    borderRadius: 0,
  },  
viewNotice:{
  flex:1,
  backgroundColor:"whitesmoke",
  height:100,
  padding:20,
  margin:20,
},
fullimg:{
  // width:300,
  width:"auto",
  height: 500,
  // backgroundColor:"#0f3d1c",
  borderRadius:0,
},
mback:{
  padding:15,
  textAlign:"center",
  fontWeight:"bold",
  color:"white",
  backgroundColor:"#0f3d1c",
  width:150,
  borderTopRightRadius:10,
  borderBottomRightRadius:10,
  marginBottom:30,
},

notTitle:{
  textAlign:"center",  
  fontWeight:"bold",
  textTransform:"uppercase",
  margin:5
},
notCont:{
  textAlign:"center"
}

})

export default New;

