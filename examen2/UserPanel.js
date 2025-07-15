import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

export default function UserPanel({ user, onLogout }) {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Alert.alert('Sesión cerrada');
        onLogout();
      })
      .catch(error => {
        Alert.alert('Error al cerrar sesión', error.message);
      });
  };

  return (
    <View>
      <Text style={{ marginVertical: 20 }}>Bienvenido: {user.email}</Text>
      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
}
