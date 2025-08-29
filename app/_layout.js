import { Stack } from "expo-router"

const RootLayout = () =>{
    return(
        <Stack>
        <Stack.Screen name="index" options={{
            headerTitle:"Welcome",
        }}/>
        <Stack.Screen name="pages/[id]" options={{
            headerTitle:"Departments",
        }}/> 

        <Stack.Screen name="gallery/[id]" options={{
            headerTitle:"Galley",
        }}/>

<Stack.Screen name="computer/[id]" options={{
            headerTitle:"Gallery",
        }}/>
    </Stack>
    )
    
}

export default RootLayout;