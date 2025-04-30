import React from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  StatusBar 
} from 'react-native';

import ProdutoCartao from './components/ProdutoCartao';

export default function App() {
  // Lista de produtos
  const produtos = [
    {
      id: '1',
      nome: 'Smartphone Galaxy S23',
      preco: 'R$ 4.999,00',
      imagem: 'https://via.placeholder.com/150'
    },
    {
      id: '2',
      nome: 'Notebook Dell Inspiron',
      preco: 'R$ 3.599,00',
      imagem: 'https://via.placeholder.com/150'
    },
    {
      id: '3',
      nome: 'Smart TV 55" LG',
      preco: 'R$ 2.799,00',
      imagem: 'https://via.placeholder.com/150'
    },
    {
      id: '4',
      nome: 'Fone de Ouvido JBL',
      preco: 'R$ 299,00',
      imagem: 'https://via.placeholder.com/150'
    },
    {
      id: '5',
      nome: 'Tablet iPad Air',
      preco: 'R$ 5.199,00',
      imagem: 'https://via.placeholder.com/150'
    },
    {
      id: '6',
      nome: 'Smartwatch Apple Watch',
      preco: 'R$ 2.499,00',
      imagem: 'https://via.placeholder.com/150'
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Produtos App</Text>
      </View>
      <ScrollView contentContainerStyle={styles.productsContainer}>
        {produtos.map(product => (
          <ProdutoCartao
            key={product.id}
            nome={product.nome}
            preco={product.preco}
            imagem={product.imagem}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productsContainer: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});