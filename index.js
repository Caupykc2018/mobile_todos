import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import App from './src/App';
import {name as appName} from './app.json';
import configureStore from './src/store';

function Main() {
  return (
    <StoreProvider store={configureStore()}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
