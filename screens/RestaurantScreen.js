import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React,{useLayoutEffect, useEffect} from 'react'
import { useNavigation,useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon, ChevronRightIcon, StarIcon, MapPinIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'
import CartIcon from '../components/CartIcon'
import { useDispatch, useSelector } from 'react-redux'
import { setRestaurant } from '../features/restaurantSlice'

const RestaurantScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
    }, } = useRoute();
    console.log({dishes})
    useEffect(()=>{
      dispatch(setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
      }))
    },[])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <>
    <CartIcon/>
    <ScrollView>
      <View className='relative'>
        <Image source={{
            uri: urlFor(imgUrl).url(),
         }}
         className='w-full h-56 bg-gray-300 p-4'
        />
        <TouchableOpacity
             onPress={navigation.goBack} 
             className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
             >
            <ArrowLeftIcon size={20} color="#e6394b"/>
        </TouchableOpacity>
      </View>

      <View className='bg-white'>
        <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>
            <View className='flex-row space-x-2 my-1'>
                <View className='flex-row items-center space-x-1'>
                    <StarIcon color='green' opacity={0.5} size={22}/>
                    <Text className='text-xs text-gray-500'><Text className='text-green-500'>{rating}</Text>. {genre}</Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <MapPinIcon color='grey' opacity={0.4} size={22}/>
                    <Text className='text-xs text-gray-500'>{address}</Text>
                </View>
            </View>
            <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
        </View>
        <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
            <QuestionMarkCircleIcon color='gray' size={20} opacity={0.6}/>
            <Text className='pt-2 flex-1 text-base font-bold'>Have a food alergy?</Text>
            <ChevronRightIcon color="#e6394b" />
        </TouchableOpacity>
      </View>

      <View className='pb-36'>
        <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>
        {dishes.map((items)=>
                <DishRow
                    key={items._id}
                    id={items._id}
                    name={items.name}
                    description={items.short_description}
                    price={items.price}
                    image={items.image}
                /> 
        )}
      </View>
    </ScrollView>
    </>
  )
}

export default RestaurantScreen;