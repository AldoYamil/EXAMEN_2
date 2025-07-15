// App.js
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import SignInForm from './SignIn';
import SignUpForm from './SignUp';
import UserPanel from './UserPanel';

export default function App() {
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      {!user ? (
        <>
          {isRegistering ? (
            <>
              <SignUpForm onSuccess={setUser} />
              <Button title="¿Ya tienes cuenta? Inicia sesión" onPress={() => setIsRegistering(false)} />
            </>
          ) : (
            <>
              <SignInForm onSuccess={setUser} />
              <Button title="¿No tienes cuenta? Regístrate" onPress={() => setIsRegistering(true)} />
            </>
          )}
        </>
      ) : (
        <UserPanel user={user} onLogout={() => setUser(null)} />
      )}
    </View>
  );
}
