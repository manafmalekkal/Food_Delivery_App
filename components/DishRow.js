import { View, Text, TouchableOpacity, Image} from 'react-native'
import React,{useState} from 'react'
import Currency from 'react-currency-formatter'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, removeFromCart, selectCartItemWithId } from '../features/cartSlice'

const DishRow = ({
    id, 
    name, 
    description, 
    price, 
    image
}) => {

    const[isPressed,setIsPressed]=useState(false);
    const dispatch = useDispatch();
    const items = useSelector((state) => selectCartItemWithId(state,id));

    const addItemsToCart = () => {
        dispatch(addToCart({id, name, description, price, image}));
    }

    const removeItemsFromCart = () =>{
        if(!items.length>0) return;

        dispatch(removeFromCart({id}));
    }

  return (
    <>
    <TouchableOpacity 
        className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}
        onPress={()=>{setIsPressed(!isPressed)}}
    >
     <View className='flex-row'>
        <View className='flex-1 pr-2'>
             <Text className='text-gray-800 text-lg mb-1'>{name}</Text>
             <Text className='text-gray-400'>{description}</Text>
             <Text className='text-gray-400 mt-2'>
                <Currency quantity={price} currency='INR'/>
             </Text>
        </View>
        <View>
            <Image 
                source={{uri: urlFor(image).url() }}
                className='h-20 w-20 bg-gray-300 p-4'
            />
        </View>
        
     </View>
    </TouchableOpacity>
    {isPressed && (
        <View className='bg-white px-4'>
            <View className='flex-row items-center space-x-2 pb-3'>
                <TouchableOpacity onPress={removeItemsFromCart}>
                    <MinusCircleIcon 
                        size={40}
                        color={items.length>0 ? "#e6394b" : 'gray'}
                    />
                </TouchableOpacity>
                <Text>{items.length}</Text>
                <TouchableOpacity onPress={addItemsToCart}>
                    <PlusCircleIcon 
                        size={40}
                        color="#e6394b"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  )
}

export default DishRow;