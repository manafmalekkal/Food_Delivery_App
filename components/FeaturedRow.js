import { View, Text, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import RestaurentCard from './RestaurentCard';
import client from '../sanity';

const FeaturedRow = ({title, description, id}) => {

  const[restaurantDetails,setRestaurantDetails]=useState([]);

  useEffect(()=>{
    client.fetch(`
    *[_type == 'featured'&& _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      },
    }[0]
    `,
    {id}
    ).then((data)=>{
      setRestaurantDetails(data?.restaurants);
    })
  },[]);

  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-gray-800 text-xl">{title}</Text>
        <ArrowRightIcon color="#e6394b"/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal:15,}}
            className="pt-3"
        >

          {restaurantDetails?.map((restaurantData)=>{
            return(
            <RestaurentCard
            key={restaurantData._id}
            id={restaurantData._id}
            imgUrl={restaurantData.image}
            title={restaurantData.name}
            rating={restaurantData.rating}
            genre={restaurantData.type?.name}
            address={restaurantData.address}
            short_description={restaurantData.short_description}
            dishes={restaurantData.dishes}
            long={restaurantData.long}
            lat={restaurantData.lat}
          />)
          })}
            {/* <RestaurentCard
              id={1}
              imgUrl={require('../Images/DeliveryLogo.jpg')}
              title='Meed Cafe'
              rating={4.5}
              genre='Indian'
              address='29th Main,BTM Layout,Bangalore'
              short_description='Enjoy the best authentic food here'
              dishes={[]}
              long={0.123}
              lat={12.345}
            />
            <RestaurentCard
            id={2}
            imgUrl={require('../Images/DeliveryLogo.jpg')}
            title='Malabar Cafe'
            rating={4.7}
            genre='Indian'
            address='29th Main,BTM Layout,Bangalore'
            short_description='Enjoy the best authentic food here'
            dishes={[]}
            long={0.123}
            lat={12.345}
            />
            <RestaurentCard
           id={1}
           imgUrl={require('../Images/DeliveryLogo.jpg')}
           title='Momo Corner'
           rating={4.5}
           genre='Chineese'
           address='29th Main,BTM Layout,Bangalore'
           short_description='Enjoy the best authentic food here'
           dishes={[]}
           long={0.123}
           lat={12.345}
            />
            <RestaurentCard
            id={1}
            imgUrl={require('../Images/DeliveryLogo.jpg')}
            title='Olive Garden'
            rating={4.2}
            genre='French'
            address='29th Main,BTM Layout,Bangalore'
            short_description='Enjoy the best authentic food here'
            dishes={[]}
            long={0.123}
            lat={12.345}
            />
            <RestaurentCard
            id={1}
            imgUrl={require('../Images/DeliveryLogo.jpg')}
            title='Marcos Pizza'
            rating={3.5}
            genre='Italian'
            address='29th Main,BTM Layout,Bangalore'
            short_description='Enjoy the best authentic food here'
            dishes={[]}
            long={0.123}
            lat={12.345}
            />
            <RestaurentCard
            id={1}
            imgUrl={require('../Images/DeliveryLogo.jpg')}
            title='Burger Launge'
            rating={4.2}
            genre='Indian'
            address='29th Main,BTM Layout,Bangalore'
            short_description='Enjoy the best authentic food here'
            dishes={[]}
            long={0.123}
            lat={12.345}
            /> */}
        </ScrollView>
    </View>
  )
}

export default FeaturedRow;