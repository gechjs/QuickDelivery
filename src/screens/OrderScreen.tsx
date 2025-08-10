import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { ApplicationState, UserState } from '../redux';
import { useEffect, useState } from 'react';
import { onStatusUpdate, startDeliveryTracking } from '../utils/realTimeTracker';

interface OrderScreenProps {
  userReducer: UserState;
}

const _OrderScreen: React.FC<OrderScreenProps> = ({ userReducer }) => {
  const { orders } = userReducer;
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    if (!orders || orders.length === 0) return;

    const unsubscribe = onStatusUpdate((data: any) => {
      if (data.orderId === orders[orders.length - 1].id) {
        setStatus(data.status);
      }
    });

    const stop = startDeliveryTracking(orders[orders.length - 1].id);

    return () => {
      unsubscribe();
      stop();
    };
  }, [orders]);

  if (!orders || orders.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No orders have been placed yet.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={orders}
      keyExtractor={(item, idx) => `${idx}`}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.orderCard}>
          <Text style={styles.orderTitle}>Order #{item.id || '#'+Math.floor(Math.random()*10000)}</Text>
          <Text>Total: ₹{item.total?.toFixed(2) || '0.00'}</Text>
          <Text>Items: {item.items?.length || 0}</Text>
          <Text>Status: {status || item.status || 'Placed'}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: { padding: 12 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 18, color: '#ababab' },
  orderCard: { backgroundColor: '#fff', padding: 14, marginBottom: 12, borderRadius: 10, borderWidth: 1, borderColor: '#eee' },
  orderTitle: { fontWeight: '700', marginBottom: 4 },
});

const mapStateToProps = (state: ApplicationState) => ({
  userReducer: state.userReducer,
});

const OrderScreen = connect(mapStateToProps)(_OrderScreen);
export { OrderScreen };
