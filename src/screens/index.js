import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import store from '../store';
import ChatRoom from './ChatRoom'
import App from '../../App'

// HOC
function reduxStoreWrapper(MyComponent, store) {
  return props => {
    return (
      <Provider store={store}>
        <MyComponent {...props} />
      </Provider>
    );
  };
}

export function registerScreens() {
  Navigation.registerComponent('ChatRoom', () => 
    reduxStoreWrapper(ChatRoom, store),
  );
  
}
