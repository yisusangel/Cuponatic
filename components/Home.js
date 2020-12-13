import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Dimensions, Text, Image, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import Companies from './Companies';
import Categories from './Categories';
import Header from './Header';

const App = ({ navigation }) => {
  const [companies, setCompanies] = useState(null);
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    axios.get('https://s3.amazonaws.com/cuponassets.cuponatic-latam.com/uploads/dev/resultado_prueba.js')
    .then((res) => {
      setCompanies(res.data.empresas);
      setCategories(res.data.categorias);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollCont}>
        <Header navigation={navigation}></Header>
        <Categories categories={categories}></Categories>
        <Companies companies={companies}></Companies>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#316aff',
  },
  scrollCont: {
    backgroundColor: '#ddd',
  },
});

export default App;