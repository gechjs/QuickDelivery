import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f7' },
});
    Account: {
      screen: createStackNavigator({
        AccountPage: HomeScreen,
        LoginPage: LoginScreen,
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require("./src/images/account_icon.png")
              : require("./src/images/account_n_icon.png");
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
  }),
});

const AppNavigation = createAppContainer(switchNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
});
