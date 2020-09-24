import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
import allReducers from './store/reducers'
import rootSaga from './store/sagas';
import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.5.107:4200';
import RootScreen from './screens/RootStackScreen'
import { NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(allReducers, 
  composeEnhancer(applyMiddleware(sagaMiddleware)));
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <RootScreen />
    </NavigationContainer>
    </Provider>
  );
}
sagaMiddleware.run(rootSaga);
