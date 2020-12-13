import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Dimensions, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
const { width, height } = Dimensions.get('window');

const Header = ({ navigation }) => {
  const [search, onChangeText] = useState('');

  return (
    <View style={styles.headerCont}>
        <View style={styles.header}>
            <Image
                style={styles.logo}
                source={{uri: 'https://cuponassets.cuponatic-latam.com/cuponaticpay/src/images/logo-cpay.png'}}
            />
            <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
                <View style={styles.hamburger}>
                    <FontAwesomeIcon
                        icon={ faBars }
                        color={'#fff'}
                        size={ 24 }
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>
        <View style={styles.searcherCont}>
            <View style={styles.button}>
                <FontAwesomeIcon
                    icon={ faSearch }
                />
            </View>
            <TextInput
                style={styles.searcher}
                onChangeText={(text) => onChangeText(text)}
                value={search}
                placeholder={"¿Que servicio buscas?"}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headerCont: {
        backgroundColor: '#316aff',
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        },
    },
    logo: {
        marginLeft: '4%',
        marginTop: 10,
        width: width/4,
        height: (width/4)/3
    },
    header: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    hamburger: {
        marginTop: 10,
        marginRight: '4%',
    },
    searcherCont: {
        flex: 1,
        width: '92%',
        margin: '4%',
        backgroundColor: '#fff',
        borderRadius: 5,
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: 40,
    },
    searcher: { 
        width: '90%',
        paddingLeft:10,
        height: 40,
    },
    button: {
        padding: '4%',
        width: '10%',
        height: 40
    },
});

export default Header;