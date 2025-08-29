
import { StyleSheet, SafeAreaView, Text, View, StatusBar } from 'react-native';
import Welcome from './welcome';

// import 'expo-dev-client'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Welcome />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    // alignItems:"center",
    // margin:30
  },
});
