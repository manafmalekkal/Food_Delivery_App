import {Image, SafeAreaView, Text, View, TextInput, ScrollView} from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import DeliveryLogo from '../Images/DeliveryLogo.jpg';
import {UserIcon,ChevronDownIcon,AdjustmentsVerticalIcon,MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../sanity';

const Logo = Image.resolveAssetSource(DeliveryLogo).uri;

const HomeScreen = () => {

    const navigation = useNavigation();
    const[featuredCategory,setFeaturedCategory] = useState([]);

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    },[]);

    useEffect(()=>{
      client.fetch(`
      *[_type == 'featured'] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }`).then((data)=>{
        setFeaturedCategory(data);
      })
    },[]);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-3 space-x-2">
        <Image source={{uri:Logo}}
         className="h-8 w-8 bg-gray-300 p-5 rounded-full" />
         <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-gray-800 text-lg">Current Location
          <ChevronDownIcon size={20} color="#e6394b"/>
          </Text>
         </View>
         <UserIcon size={35} color="#e6394b"/>
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 items-center bg-gray-200 p-1 space-x-2">
          <MagnifyingGlassIcon color='gray' size={20}/>
          <TextInput
            placeholder='Restaurants and Cuisines'
            keyboardType='default'
          />
        </View>
        <AdjustmentsVerticalIcon color="#e6394b"/>
      </View>

      <ScrollView className="bg-gray-100"
        contentContainerStyle={{paddingBottom:100,}}>

        <Categories/>

        {featuredCategory?.map((category)=>{
          return(
          <FeaturedRow 
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description} 
        />)
        })}
      </ScrollView>      
    </SafeAreaView>
  );
};


export default HomeScreen;
