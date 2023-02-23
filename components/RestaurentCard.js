import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react';
import {StarIcon} from 'react-native-heroicons/solid';
import {MapPinIcon} from 'react-native-heroicons/outline'
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

const RestaurentCard = ({
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
}) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity className="bg-white mr-3 shadow"
        onPress={()=>{navigation.navigate('Restaurant',{
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
        })}}
    >
        <Image
            source={{uri: urlFor(imgUrl).url()}}
            className="h-36 w-64 rounded-sm"
        />
        <View className="px-3 pb-6">
            <Text className="font-bold text-lg pt-2 text-gray-800">{title}</Text>
            <View>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color='green' opacity={0.5} size={16}/>
                    <Text className="text-gray-500 text-xs">
                        <Text className="text-green-500">{rating}</Text> . {genre}</Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <MapPinIcon size={16} color='grey' opacity={0.4}/>
                    <Text className="text-xs text-gray-400">{address}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurentCard;