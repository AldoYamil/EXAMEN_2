// components/SignInForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export default function SignInForm({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        Alert.alert('Sesión iniciada');
        onSuccess(userCredential.user);
      })
      .catch(error => {
        Alert.alert('Error al iniciar sesión', error.message);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <Button title="Iniciar Sesión" onPress={handleSignIn} />
    </View>
  );
}
