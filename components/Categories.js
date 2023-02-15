import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
     horizontal
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
     }}
    >
        <CategoryCard imageUrl={require('../Images/DeliveryLogo.jpg')} title='Category 1'/>
        <CategoryCard imageUrl={require('../Images/DeliveryLogo.jpg')} title='Category 2'/>
        <CategoryCard imageUrl={require('../Images/DeliveryLogo.jpg')} title='Category 3'/>
        <CategoryCard imageUrl={require('../Images/DeliveryLogo.jpg')} title='Category 4'/>
        <CategoryCard imageUrl={require('../Images/DeliveryLogo.jpg')} title='Category 5'/>
        <CategoryCard imageUrl={require('../Images/DeliveryLogo.jpg')} title='Category 6'/>
    </ScrollView>
  )
}

export default Categories;