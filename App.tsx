import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Button, } from 'react-native';
import { View, Text, Image, ScrollView, FlatList } from "./components";
import Bootstrap, { rem } from "./bootstrap";
import Icon from "@expo/vector-icons/FontAwesome";
import Hoverable from './Hoverable';
const createLogger = (...msg) => () => {
  console.log(...msg);
};
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      icon: 'address-book'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      icon: 'amazon'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28as',
      title: 'First Item',
      icon: 'address-book'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97fas',
      title: 'Second Item',
      icon: 'amazon'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28df',
      title: 'First Item',
      icon: 'address-book'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97ffd',
      title: 'Second Item',
      icon: 'amazon'
    }
  ];
  const [hover, setHover] = useState(false);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <View className="body">
          {/* Navigation */}
          {/* <View className="navbar">
            <Icon name="address-book" style={{ color: "#fff" }} size={50} />
            <Text className="text-white">Hello</Text>
          </View> */}
          {/* <FlatList className="navbar" data={DATA} renderItem={renderItem}
            keyExtractor={item => item.id} /> */}

          <Hoverable
            onHoverIn={() => setHover(true)}
            onHoverOut={() => setHover(false)}
          >
            {isHovered => (
              <View className={!isHovered ? "navbar" : "navbar navbar-hover"}>
                <View className="navbar_nav">
                  {DATA.map(i => {
                    return (<View key={i.id} className="nav-item">
                      <View className={"nav-link"}>
                        <Icon name={i.icon} style={{
                          minWidth: rem(2),
                          marginLeft: rem(1.5),
                          marginRight: rem(1.5),
                          marginTop: 0,
                          marginBottom: 0,
                          opacity: 1,
                        }} size={20} color="#FFF" />
                        <Text className="link-text" style={{ display: "flex" }}>{i.title}</Text>
                      </View>
                    </View>
                    )
                  })}
                </View>
              </View>
            )}
          </Hoverable>


          {/* Main */}
          <ScrollView className={hover ? "main main_hover" : "main"}>

            <Text className="h2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti enim quidem? Tempora modi odit eveniet illo voluptatem et sapiente sed quibusdam, animi libero rerum iste amet explicabo? Suscipit, vel.</Text>

            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis doloribus natus excepturi assumenda, optio culpa est dignissimos neque. Rem, neque. Incidunt necessitatibus error quaerat, voluptas harum molestias atque!</Text>

          </ScrollView>
        </View>
      </SafeAreaProvider>
    );
  }
}
