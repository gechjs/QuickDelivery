import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { ApplicationState, ShoppingState, Restaurant, UserState } from '../redux';
import { RestaurantCard, CartSummary } from '../components';
import { useNavigation } from '../utils';

interface HomeProps {
  shoppingReducer: ShoppingState;
  userReducer: UserState;
}

const _HomeScreen: React.FC<HomeProps> = ({ shoppingReducer }) => {
  const { navigate } = useNavigation();

  const restaurants = shoppingReducer.availability?.restaurants || [];
  const cartItems = userReducer.Cart || [];
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * (item.unit || 0), 0);

  const onTapRestaurant = (restaurant: Restaurant) => {
    navigate('RestaurantPage', { restaurant });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to QuickDelivery</Text>
      <Text style={styles.subtitle}>Discover local restaurants and food near you</Text>
      <CartSummary itemCount={cartItems.length} total={cartTotal} />
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onTapRestaurant(item)}>
            <RestaurantCard item={item} onTap={onTapRestaurant} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20, backgroundColor: '#f7f7f7' },
  title: { fontSize: 24, fontWeight: '700', paddingHorizontal: 20 },
  subtitle: { fontSize: 16, color: '#626262', paddingHorizontal: 20, marginBottom: 12 },
  list: { paddingBottom: 20 },
});

const mapStateToProps = (state: ApplicationState) => ({
  shoppingReducer: state.shoppingReducer,
});

export const HomeScreen = connect(mapStateToProps)(_HomeScreen);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { marginTop: 10, fontSize: 16, color: '#6a6a6a' },
});
