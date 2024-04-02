import {View, Button} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import OTPScreen from './OTPScreen';

const PhoneSignIn = () => {
  const [confirm, setConfirm] = useState(null);

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  return (
    <View>
      {confirm ? (
        <OTPScreen confirm={confirm} />
      ) : (
        <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber('+91 9076678275')}
        />
      )}
    </View>
  );
};

export default PhoneSignIn;
