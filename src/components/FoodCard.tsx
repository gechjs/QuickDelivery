import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { FoodModel } from '../redux';

interface FoodCardProps {
  item: FoodModel;
  onTap: (item: FoodModel) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item, onTap }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onTap(item)}>
      <Image source={{ uri: item.images[0] }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    width: Dimensions.get('screen').width - 30,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 140,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  category: {
    marginTop: 4,
    color: '#7D7D7D',
  },
  price: {
    marginTop: 6,
    fontWeight: '700',
    color: '#f15b5d',
  },
});
