import React, { useEffect } from 'react';
import { AppNavigation } from './navigations/AppNavigation';
import { Notification } from './components/Notification';
import { authEmit } from './services/api/socket/authEmit';
import { useSelector } from 'react-redux';

const App: () => React$Node = () => {
  const id = useSelector((state) => state.currentUser.id);

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
