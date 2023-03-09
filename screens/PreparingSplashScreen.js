import { View, Text, SafeAreaView } from 'react-native'
import React,{useEffect} from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'


const PreparingSplashScreen = () => {

    const navigation = useNavigation();

    // useEffect(()=>{
    //     setTimeout(() => 
    //         navigation.navigate('Delivery')
    //     ,5000)
    // },[navigation])

  return (
   <SafeAreaView className='flex-1 justify-center items-center bg-[#ffffff]'>
    <Animatable.Image
        source={require('../Images/deliveryGif.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='h-96 w-96'
    />
    <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-lg my-10 text-[#e6394b] font-bold text-center'
    >
        Your order is being placed!
    </Animatable.Text>
    <Progress.CircleSnail size={60} indeterminate={true} color='#e6394b'/>
    <Text onPress={()=>{navigation.navigate('Delivery')}}>next page</Text>
   </SafeAreaView>
  )
}

export default PreparingSplashScreen;