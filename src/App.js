import React, { useEffect } from 'react';
import { AppNavigation } from './navigations/AppNavigation';
import { Notification } from './components/Notification';
import { authEmit } from './services/api/socket/authEmit';
import { useSelector } from 'react-redux';
import { GoogleSignin } from '@react-native-community/google-signin';

const App: () => React$Node = () => {
  const id = useSelector((state) => state.currentUser.id);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '943053920858-4cqmho2em0qfsmhbvdmnlmog86g3bgmk.apps.googleusercontent.com',
      offlineAccess: false,
    });
  }, []);

  useEffect(() => {
    authEmit(id || 0);
  }, [id]);

  return (
    <Notification>
      <AppNavigation />
    </Notification>
  );
};

export default App;
