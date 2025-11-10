
import React, { useState } from 'react'; 
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { useDishes } from './Globalstore';



export default function Homepage ({ navigation }: { navigation: any }) {

  const {dishes } = useDishes(); 

    const [selectedDishes, setSelectedDishes] = useState<Array<{name: String; description: String; price: number;}>>([]); // State to track selected dishes 
  
    //Function to toggle the dish selection
    const toggleDishSelection = (dish: {name: string; description: string; price: number}) => { 
    const isSelected = selectedDishes.some(d => d.name === dish.name); 
    if (isSelected) {
      setSelectedDishes(prev => prev.filter(d => d.name !== dish.name));
    } else {
      setSelectedDishes(prev => [...prev, dish]);
    }
  };

  const averagePrice = selectedDishes.length > 0
  ? selectedDishes.reduce((sum, dish) => sum + dish.price, 0) / selectedDishes.length : 0;

    
  return (
  <ScrollView style={styles.container}>
    <View> 
      <Text style={styles.WelcomeText}> Welcome Christofell 🧑🏼‍🍳, let's plan together a well-balanced meal!</Text>
      <Text style={{ fontWeight: 'bold', marginTop: 8, fontSize: 18, textAlign: 'center' }}> Below the dishes that you added will be displayed </Text>
      {dishes.length === 0 ? (
        <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 20, fontSize: 18 }}>No added dishes yet.</Text>) : ( 
        <>
        {dishes.map((dish, index) => {
          const isSelected = selectedDishes.some(d => d.name === dish.name);
          return (
          <TouchableOpacity
          key={index}
          onPress={() => toggleDishSelection(dish)}
          style={[
            styles.dishItem,
            isSelected && styles.selectedDishItem
          ]}
        >
          <Text style={styles.dishName}>🍽️ {dish.name}</Text>
          <Text style={styles.dishDescription}>{dish.description}</Text>
          <Text style={styles.dishPrice}>Price: R{dish.price.toFixed(2)}</Text>
          <Text style={styles.dishCourse}>Course: {dish.course}</Text>
         
        </TouchableOpacity> );
      })}
      <Text style={{ fontWeight: 'bold', marginTop: 20, padding: 10, paddingBottom: 30, fontSize: 18 }}>
        Selected dishes: {selectedDishes.length}
        </Text>
        <Text style={{ fontWeight: 'bold', marginTop: 10, padding: 10, paddingBottom: 35, fontSize: 18, textAlign: 'center'}}>
          Average price of the selected price: R{averagePrice.toFixed(2)} 
          </Text>
          </>
        )}
    </View>  
  </ScrollView> 
    );
  }
  
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f5faff', // softer background
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
   //backgroundColor: '#87CEEB', 
    WelcomeText: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      textAlign: 'center', 
      padding: 30,
    }, 
    Title: {
      fontSize: 25,
      fontWeight: 'bold',
      padding: 15, 
    },
   // Styling for the selected items after the user input
    dishItem: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    width: '90%',
  },
  selectedDishItem: {
   backgroundColor:"#E6E6FA",  
  }, // End of styling 

  // Styling for the dish cards after the user input 
  dishName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dishDescription: {
    fontStyle: 'italic',
    color: 'black', 
  },
  dishPrice: {
    color: '#333',
    marginTop: 4,
  },
  dishCourse: {
    color: '#004aad',
    fontWeight: '600',
    marginTop: 4,
  }, 
  deleteButton: { marginTop: 10, backgroundColor: '#004aad', padding: 5, borderRadius: 5 },
  deleteText: { color: 'white', textAlign: 'center' },
  // End of styling 
  
  
  }
  );
  
    
