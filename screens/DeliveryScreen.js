import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { XMarkIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress'
import { selectRestaurant } from '../features/restaurantSlice'
import MapView,{Marker} from 'react-native-maps'


const DeliveryScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

  return (
    <View className='flex-1 bg-[#e6394b] justify-between'>
      <SafeAreaView className='z-50'>
        <View className='flex-row items-center justify-between p-5'>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <XMarkIcon size={30} color='white'/>
            </TouchableOpacity>
            <Text className='font-light text-white text-base'>Order Help ?</Text>
        </View>

        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
            <View className='flex-row justify-between items-center'>
                <View>
                    <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                    <Text className='text-4xl font-bold text-gray-800'>30-35 Minutes</Text>
                </View>
                <Image source={require('../Images/DeliveryLogo.jpg')} className='h-12 w-12'/>
            </View>
            <Progress.Bar size={30} color='#e6394b' />
            <Text className='mt-3 text-gray-500'>{restaurant.title} is preparing your Order !!</Text>
        </View>
      </SafeAreaView>
      <Text className='font-bold text-3xl text-center text-white bg-[#a92633]  flex-1 -mt-10 p-20 pt-40 z-0'>Successfully Odered🎉!!!</Text>
      {/* <MapView
        initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
      >
        <Marker 
            coordinate={{
                latitude: restaurant.lat,
                longitude: restaurant.long,
            }}
            title={restaurant.title}
            description={restaurant.short_description}
            identifier='origin'
            pinColor='#e6394b'
        />
      </MapView> */}
      <SafeAreaView className='flex-row bg-white items-center space-x-5 h-28'>
        <Image 
            source={require('../Images/DeliveryLogo.jpg')}
            className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
        />
        <View className='flex-1'>
            <Text className='text-lg text-gray-800'>Manaf Malekkal</Text>
            <Text className='text-gray-400'>Your Rider!</Text>
        </View>
        <Text className='text-[#e6394b] text-lg mr-5 font-bold'>Call</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen;