// components/SignUpForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export default function SignUpForm({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        Alert.alert('Registro exitoso');
        onSuccess(userCredential.user);
      })
      .catch(error => {
        Alert.alert('Error al registrarse', error.message);
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
      <Button title="Registrarse" onPress={handleSignUp} />
    </View>
  );
}
