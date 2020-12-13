import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const Companies = (props) => {
const { companies } = props;
  return (
      <View style={styles.companies}>
      {companies && companies.map((comp, i) => (
        <View key={i} style={styles.compCont}>
          <Image
            style={styles.banner}
            source={{uri: comp.banner}}
          />
          <View style={styles.compText}>
            {comp.porcentaje_cashback &&
              <Text style={styles.cashback}>{comp.porcentaje_cashback}% cashback</Text>
            }
            {!comp.porcentaje_cashback &&
              <Text style={styles.cashback}>&emsp;</Text>
            }
            
            <Text style={styles.companyName}>{comp.nombre}</Text>

            {comp.tipo_servicio !== '' &&
              <Text style={styles.companyServ}>{comp.tipo_servicio}</Text>
            }
            {!comp.tipo_servicio &&
              <Text style={styles.companyServ}>&emsp;</Text>
            }
          </View>
        </View>
      ))}
      </View>
  );
}

const styles = StyleSheet.create({
  companies: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  compCont: {
    backgroundColor: '#fff',
    width:'42%',
    margin: '4%',
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  banner: {
    width: '100%',
    height: 100,
    borderRadius: 10
  },
  compText: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },

  cashback: {
    color: '#d4af37',
    fontSize: 10,
    fontWeight: 'bold'
  },
  companyName: {
    color: '#444',
    fontSize: 12,
    fontWeight: 'bold'
  },
  companyServ: {
    color: '#666',
    fontSize: 10,
    fontWeight: 'bold'
  }
});

export default Companies;