import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [texto, setTexto] = useState('Texto Inicial');

  const [contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 16 }}>{contador}</Text>
      <Button
        title="Alterar texto"
        onPress={() => setContador(contador + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
