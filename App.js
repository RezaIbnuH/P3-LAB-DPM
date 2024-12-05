import React from 'react';
import { SafeAreaView } from 'react-native';
import ProductCatalogScreen from './src/screens/index';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductCatalogScreen />
    </SafeAreaView>
  );
};

export default App;