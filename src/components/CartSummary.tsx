import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CartSummaryProps {
  itemCount: number;
  total: number;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ itemCount, total }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Items: {itemCount}</Text>
    <Text style={styles.text}>Total: ₹{total.toFixed(2)}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderColor: '#ddd',
    borderWidth: 1,
    margin: 12,
  },
  text: { fontSize: 14, fontWeight: '600' },
});