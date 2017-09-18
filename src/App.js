import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBsfO8EAinU7qVezhvO5UEbmZYYtX-EAmw',
      authDomain: 'manager-d6b5a.firebaseapp.com',
      databaseURL: 'https://manager-d6b5a.firebaseio.com',
      projectId: 'manager-d6b5a',
      storageBucket: 'manager-d6b5a.appspot.com',
      messagingSenderId: '120756716101'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
