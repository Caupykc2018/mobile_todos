import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import App from './src/App';
import { name as appName } from './app.json';
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingScreen } from './src/screens/LoadingScreen';
import { EditTodoState } from './src/context/editTodo/EditTodoState';

function Main() {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <PaperProvider>
          <EditTodoState>
            <App />
          </EditTodoState>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
