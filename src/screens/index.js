import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet, Text } from 'react-native';
import ProductCard from '../components/index';

const ProductCatalogScreen = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('Komponen dimuat, mengambil data produk...');
    const fetchProducts = () => {
      const sampleProducts = [
        { id: 1, name: 'Samsung Galaxy A55', price: 5700000, image: 'https://images.samsung.com/is/image/samsung/p6pim/id/sm-a556elbdxid/gallery/id-galaxy-a55-5g-sm-a556-sm-a556elbdxid-540158197?$650_519_PNG$' },
        { id: 2, name: 'Xiaomi 14 T', price: 6999000, image: 'https://completeselular.co.id/wp-content/uploads/2024/10/XIAOMI-14T@1.5x-600x600.webp' },
        { id: 3, name: 'OPPO Find X8', price: 15999000, image: 'https://p-id.ipricegroup.com/uploaded_121f59df24d6ab90da1589da90e2c4f18c21a5e8.png' },
        { id: 4, name: 'POCO F6', price: 5699000, image: 'https://media.dinomarket.com/docs/imgTD/2024-08/DM_792F3C21992BB88284E8CC5458D475D7_220824150844_ll.jpg' },
        { id: 5, name: 'Infinix GT 20 Pro', price: 4599000, image: 'https://completeselular.co.id/wp-content/uploads/2024/05/infinix_gt_20_pro_1.webp' },
        { id: 5, name: 'Realme 13 Pro', price: 5999000, image: 'https://cworld.id/wp-content/uploads/2024/10/realme_13_pro_monet_purple_1_1.jpg' },
      ];
      setProducts(sampleProducts);
      setFilteredProducts(sampleProducts);
    };

    fetchProducts();
    return () => {
      console.log('Komponen dihapus, membersihkan data...');
    };
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Produk</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Cari produk..."
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 25,
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default ProductCatalogScreen;