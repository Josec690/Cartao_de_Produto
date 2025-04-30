import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  Alert 
} from 'react-native';

const ProdutoCartao = ({ nome, preco, imagem }) => {
  const handleBuyPress = () => {
    Alert.alert(
      "Compra realizada",
      `Produto ${nome} comprado!`,
      [{ text: "OK" }]
    );
  };

  

  return (
    <View style={styles.cartao}>
      <Image 
        source={{ uri: imagem }} 
        style={styles.imagem} 
        resizeMode="cover" 
      />
      <View style={styles.info}>
        <Text style={styles.nome} numberOfLines={2}>{nome}</Text>
        <Text style={styles.preco}>{preco}</Text>
        <TouchableOpacity 
          style={styles.botaoCompra} 
          onPress={handleBuyPress}
        >
          <Text style={styles.botaoTexto}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '45%',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  imagem: {
    width: '100%',
    height: 150,
  },
  info: {
    padding: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  preco: {
    fontSize: 14,
    color: '#00a680',
    fontWeight: '600',
    marginBottom: 8,
  },
  botaoCompra: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'end',
    marginBottom: 10,
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProdutoCartao;