import { View, Text, ScrollView } from 'react-native'
import React from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import RestaurentCard from './RestaurentCard';

const FeaturedRow = ({title, description, id}) => {
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
            <RestaurentCard
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
            />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow;