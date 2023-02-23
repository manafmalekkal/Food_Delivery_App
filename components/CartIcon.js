import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {useSelector} from 'react-redux'
import { selectCartItems, selectCartTotal } from '../features/cartSlice'
import Currency from 'react-currency-formatter'

const CartIcon = () => {

    const items = useSelector(selectCartItems);
    const navigation = useNavigation();
    const cartTotal = useSelector(selectCartTotal);

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity className='mx-5 bg-[#e6394b] p-4 rounded-lg flex-row items-center space-x-1'>
        <Text className='text-white font-extrabold text-lg bg-[#a92633] py-1 px-2'>{items.length}</Text>
        <Text className='flex-1 text-center text-lg text-white font-extrabold'>View Cart</Text>
        <Text className='text-lg text-white font-extrabold'>
            <Currency quantity={cartTotal} currnecy='INR'/>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartIcon;