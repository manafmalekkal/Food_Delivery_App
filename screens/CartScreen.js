import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native' 
import { useDispatch,useSelector } from 'react-redux'
import { selectCartItems,removeFromCart, selectCartTotal } from '../features/cartSlice'
import { selectRestaurant } from '../features/restaurantSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter'


const CartScreen = () => {

    const [gruopedCartItems,setGroupedCartItems] = useState();
    const items = useSelector(selectCartItems);
    const restaurant = useSelector(selectRestaurant);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const cartTotal = useSelector(selectCartTotal);

    useEffect(() => {
        const groupedItems = items.reduce((acc,curr) => {
            (acc[curr.id] = acc[curr.id] || []).push(curr) 
        }, {});
        setGroupedCartItems(groupedItems);
    },[items])

  return (
    <SafeAreaView className='bg-white flex-1'>
        <View className='flex-1 bg-gray-100'>
            <View className='p-5 border-b border-[#e6394b] bg-white shadow-sm'>
                <View>
                    <Text className='text-lg font-bold text-center'>Cart</Text>
                    <Text className='text-center text-gray-400'>{restaurant.title}</Text>
                </View>
                <TouchableOpacity 
                    onPress={navigation.goBack}
                    className='rounded-full bg-gray-100 absolute top-3 right-5'
                >
                    <XCircleIcon height={50} width={50} color='#e6394b'/>
                </TouchableOpacity>
            </View>

            <View className='flex-row items-center space-x-4 px-4 py-3 my-5 bg-white'>
                <Image 
                    source={require('../Images/DeliveryLogo.jpg')}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <Text className='flex-1'>Deliver in 30-45 mins!</Text>
                <TouchableOpacity>
                    <Text className='text-[#e6394b]'>Change</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {Object.entries(gruopedCartItems).map(([key,item]) => 
                    <View key={key}>
                        <Text className='text-[#e6394b]'>{item.length} x </Text>
                        <Image 
                            source={{uri: urlFor(item[0]?.image).url()}}
                            className='h-12 w-12 rounded-full'
                        />
                        <Text className='flex-1 text-gray-800'>{item[0]?.name}</Text>
                        <Text className='text-gray-600'>
                            <Currency quantity={item[0]?.price} currency='INR'/>
                        </Text>
                        <TouchableOpacity
                            onPress={()=>dispatch(removeFromCart({id: key}))}
                        >
                            <Text className='text-[#e6394b]'>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>

            <View className='bg-white mt-5 space-y-4'>

                <View className='flex-row justify-between'>
                    <Text className='text-gray-400'>Subtotal</Text>
                    <Text className='text-gray-400'>
                        <Currency quantity={cartTotal} currency='INR'/>
                    </Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='text-gray-400'>Delivery Fee</Text>
                    <Text className='text-gray-400'>49</Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='text-gray-800'>Order Total</Text>
                    <Text className='text-gray-800 font-bold'>
                        <Currency quantity={cartTotal+49} currency='INR'/>
                    </Text>
                </View>

                <TouchableOpacity 
                    className='rounded-lg bg-[#e6394b] p-4'
                    onPress={()=>{navigation.navigate('PreparingScreen')}}
                >
                    <Text className='text-center font-bold text-lg text-white'>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default CartScreen;