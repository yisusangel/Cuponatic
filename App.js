import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './components/Home';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Mis Cuenta"
        labelStyle={{color: '#ffffff'}}
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Mis Tarjetas"
        labelStyle={{color: '#ffffff'}}
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Favoritos"
        labelStyle={{color: '#ffffff'}}
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Notificaciones"
        labelStyle={{color: '#ffffff'}}
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerPosition={'right'}
      drawerStyle={{
        backgroundColor: '#316aff',
      }}>
      <Drawer.Screen name="Mi cuenta" component={Home} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}