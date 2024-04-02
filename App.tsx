import React, { useEffect, useState } from 'react';
import LogoutScreen from './src/screens/LogoutScreen';
import auth from '@react-native-firebase/auth';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  const [user, setUser] = useState();

  const onAuthStateSave = (user: any) => setUser(user);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateSave);
    return subscriber;
  })

  return (
    <>
      {user ?
        <LogoutScreen /> :
        <LoginScreen />
      }
    </>
  )
}

export default App