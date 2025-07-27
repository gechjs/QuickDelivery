import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { FoodModel } from '../redux';

interface FoodCardProps {
  item: FoodModel;
  onTap: (item: FoodModel) => void;
  onUpdateCart?: (food: FoodModel) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item, onTap, onUpdateCart }) => {
  const onAdd = () => {
    const updated = { ...item, unit: (item.unit || 0) + 1 };
    onUpdateCart && onUpdateCart(updated);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => onTap(item)}>
      <Image source={{ uri: item.images[0] }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
        <TouchableOpacity style={styles.addButton} onPress={onAdd}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
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
  addButton: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#f15b5d',
    borderRadius: 6,
    alignItems: 'center',
  },
  addText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
