import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { Platform } from "react-native";
const { width, height } = Dimensions.get('window');

const getIcon = (icon) => {
    let baseUri = 'https://cuponassets.cuponatic-latam.com/cuponaticpay/src/images/categorias/';
    let iconStr = icon;
    switch (icon) {
        case 'viajes':
            iconStr =  'viaje';
            break;
        case 'estetica':
        case 'salud':
            iconStr = 'bienestar';
            break;
        case 'entretencion':
            iconStr = 'panorama';
            break;
        case 'servicios':
            iconStr = 'servicio';
            break;
        default:
            iconStr = icon;
    }
    console.log(baseUri+iconStr+'.svg');
    return baseUri+iconStr+'.svg';
}

const Categories = (props) => {
    const { categories } = props;
    return (
        <View style={styles.cont}>
            <ScrollView horizontal={true} >
            {categories && categories.map((cat, i) => (
                <View key={i} style={styles.catCont}>
                    {Platform.OS !== 'web' &&
                        <SvgUri
                            style={styles.banner}
                            uri={getIcon(cat.icono)}
                        ></SvgUri>
                    }
                    {Platform.OS === 'web' &&
                        <Image
                            style={styles.banner}
                            source={{uri: getIcon(cat.icono)}}
                        />
                    }
                    <Text style={styles.catName}>{cat.nombre}</Text>
                </View>
            ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    catCont: {
        backgroundColor: '#fff',
        width: width/5,
        margin: 10,
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
        width: (width/5)-20,
        height: (width/5)-20,
        margin: 10
    },
    catName: {
        color: '#666',
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: 10,
        marginLeft:10,
        marginBottom: 10,
    }
});

export default Categories;