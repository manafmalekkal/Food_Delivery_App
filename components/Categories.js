import { View, Text, ScrollView } from 'react-native'
import React,{useState, useEffect} from 'react'
import CategoryCard from './CategoryCard'
import { urlFor } from '../sanity'
import client from '../sanity'

const Categories = () => {

  const[categoryList,setCategoryList]=useState([]);

  useEffect(()=>{
    client.fetch(`
    *[_type == 'category']
    `).then((data)=>{
      setCategoryList(data)
    })
  },[])

  return (
    <ScrollView
     horizontal
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
     }}
    >
      {categoryList.map((item)=>{
        return(
          <CategoryCard 
            key={item._id}
            imageUrl={urlFor(item.image).width(200).url()} 
            title={item.name}/>
        )
      })}
    </ScrollView>
  )
}

export default Categories;