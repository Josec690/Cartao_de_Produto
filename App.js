import React from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  StatusBar 
} from 'react-native';

import ProdutoCartao from './componentes/ProdutoCartao';

export default function App() {
  const produtos = [
    {
      id: '1',
      nome: 'Smartphone Galaxy S23',
      preco: 'R$ 4.999,00',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgOHFqDDLTpXGlzue1Et-KyGtroxW86Oq6w&s'
    },
    {
      id: '2',
      nome: 'Notebook Dell Inspiron',
      preco: 'R$ 3.599,00',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkXvwq_Q7o3ElgYD06srL8-pZy4Gl7_vyDg&s'
    },
    {
      id: '3',
      nome: 'LG TV 4K 55 Polegadas',
      preco: 'R$ 2.799,00',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZM8cnVc6QbdS-prp6pOg8onlJXC1CgOMzw&s'
    },
    {
      id: '4',
      nome: 'Fone de Ouvido JBL',
      preco: 'R$ 299,00',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lb8O1WUU8Dqsx9FSE2fCqO4tevwwAX0-1g&s'
    },
    {
      id: '5',
      nome: 'iPad Air Apple 11" 128 GB',
      preco: 'R$ 5.199,00',
      imagem: 'https://www.detonashop.com.br/media/mf_webp/png/media/catalog/product/cache/041e82462066eef1ae3402cf9c4986f8/a/i/air_blue_01.webp'
    },
    {
      id: '6',
      nome: 'Smartwatch Apple Watch',
      preco: 'R$ 2.499,00',
      imagem: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg'
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