import { Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({imageUrl,title}) => {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image source={imageUrl}
        className="h-20 w-20 rounded"
        />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard;