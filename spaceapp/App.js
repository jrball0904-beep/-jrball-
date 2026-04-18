import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Linking,
  FlatList,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { useState, useEffect } from 'react';

const Tab = createBottomTabNavigator();
const SPACE_NEWS_API =
  'https://api.spaceflightnewsapi.net/v4/articles/?limit=40';

const spaceBg =
  'https://t4.ftcdn.net/jpg/00/81/55/69/360_F_81556974_8sF8cKszJaRfBGd5sDt1RXE2QbzDtQqs.jpg';

/* ---------------- HOME ---------------- */
function Homescreen() {
  const [news, setnews] = useState([]);

  const getnews = async () => {
    const response = await fetch(SPACE_NEWS_API);
    const textdata = await response.json();
    setnews(textdata.results);
  };
  useEffect(() => {
    getnews();
  }, []);
  return (
    <ImageBackground source={{ uri: spaceBg }} style={styles.bg}>
      <Text style={styles.title}>🚀 Space App and News </Text>
      <Text style={styles.subtitle}>Explore the Solar System</Text>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 15 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.newscard}
            onPress={() => Linking.openURL(item.url)}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}

/* ---------------- EXPLORE ---------------- */
function Explorescreen() {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: 'https://www.figma.com/design/oN74G44b9nXcsXk59zv842/Solar-System?node-id=0-1&p=f&t=7JVge4hCWNCkFJC9-0',
        }}
        javaScriptEnabled
        domStorageEnabled
      />
    </View>
  );
}
function Sizesscreen() {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: 'https://www.figma.com/design/oN74G44b9nXcsXk59zv842/Solar-System?node-id=92-19&t=03VT8coot3GsJ8Q3-0',
        }}
        javaScriptEnabled
        domStorageEnabled
      />
    </View>
  );
}

function MoonPhasesscreen() {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: 'https://www.figma.com/design/oN74G44b9nXcsXk59zv842/Solar-System?node-id=157-52&p=f&t=il4j1bQGjQM9a7vP-0',
        }}
        javaScriptEnabled
        domStorageEnabled
        
      />
    </View>
  );
}
function Profilescreen() {
  

  return (

    <ImageBackground source={{ uri: spaceBg }} style={styles.bg}>
    

      <View style={styles.profileContainer}>

        <View style={styles.avatarWrapper}>

          <Ionicons name="person-circle" size={120} color="#7df9ff" />

        </View>

 

        <Text style={styles.profileName}>JrBall</Text>

        <Text style={styles.profileRole}> </Text>

 

        <Text style={styles.profileBio}>

          Passionate about space, planets, and the mysteries of the universe.

          Always exploring beyond the stars 

        </Text>

 

        <TouchableOpacity style={styles.profileButton}>

          <Text style={styles.buttonText}>Edit Profile</Text>

        </TouchableOpacity>

 

        <TouchableOpacity style={styles.profileButton}>

          <Text style={styles.buttonText}>Logout</Text>

        </TouchableOpacity>

      </View>

    </ImageBackground>
    

  );

}
/* ---------------- PROFILE ---------------- */
function profilescreen() {
  return (
    <ImageBackground source={{ uri: spaceBg }} style={styles.bg}>
      <Text style={styles.title}>👩‍🚀 Astronaut</Text>
      <Text style={styles.subtitle}>Profile Screen</Text>
    </ImageBackground>
  );
}

/* ---------------- APP ---------------- */
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#020024',
            height: 65,
            borderTopColor: '#1b1f4a',
          },
          tabBarActiveTintColor: '#7df9ff',
          tabBarInactiveTintColor: '#888',
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'rocket';
            if (route.name === 'Explore') iconName = 'planet';
            if (route.name === 'Profile') iconName = 'person-circle';
            if (route.name === 'Sizes') iconName = 'expand';
             if (route.name === 'Moon Phases') iconName = 'moon';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Explore" component={Explorescreen} />
        <Tab.Screen name="Profile" component={Profilescreen} />
        <Tab.Screen name="Sizes" component={Sizesscreen} />
        <Tab.Screen name="Moon Phases" component={MoonPhasesscreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#7df9ff',
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop: 50,
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,

    marginTop: 10,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#1b1f4a',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonText: {
    color: '#7df9ff',
    fontWeight: 'bold',
  },
  newscard: {
    backgroundColor: 'rgba(0,0,50,0.7)',
    padding: 15,

    borderRadius: 15,

    marginBottom: 15,
  },
  profileContainer: {
  alignItems: 'center',
  padding: 20,
  backgroundColor: 'rgba(0,0,30,0.6)',
  borderRadius: 20,
},

avatarWrapper: {
  marginBottom: 15,
},

profileName: {
  fontSize: 26,
  fontWeight: 'bold',
  color: '#7df9ff',
},

profileRole: {
  fontSize: 16,
  color: '#ccc',
  marginVertical: 5,
},

profileBio: {
  fontSize: 14,
  color: '#fff',
  textAlign: 'center',
  marginVertical: 10,
  paddingHorizontal: 10,
},

profileButton: {
  backgroundColor: '#411b4a',
  paddingVertical: 10,
  paddingHorizontal: 25,
  borderRadius: 20,
  marginTop: 10,
},
});
