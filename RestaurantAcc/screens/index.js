import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import store from '../store';
import CreateRestaurantAcc from './CreateRestaurantAcc'
import RestaurantCollection from './RestaurantCollection'
import ActivateAccount from './ActivateAccount'

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
  Navigation.registerComponent('CreateRestaurantAcc', () => 
    reduxStoreWrapper(CreateRestaurantAcc, store),
  );

  Navigation.registerComponent('RestaurantCollection', () => 
   reduxStoreWrapper(RestaurantCollection, store),
  );

  Navigation.registerComponent('ActivateAccount', () => 
    reduxStoreWrapper(ActivateAccount, store),
  );
  
}
