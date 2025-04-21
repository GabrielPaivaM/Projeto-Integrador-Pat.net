import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert, Image } from 'react-native';
import { useTheme } from '../ThemeContext'; // Import do contexto de tema
import MapView, { Marker } from 'react-native-maps';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const handleLogout = () => {
    Alert.alert(
      'Tem certeza?',
      'Você realmente deseja sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          onPress: () => navigation.replace('Login'),
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  // Colocar o botão de sair no cabeçalho
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleLogout} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Sair</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const styles = getStyles(isDarkMode);

  const darkMapStyle = [
    { elementType: 'geometry', stylers: [{ color: '#212121' }] },
    { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [{ color: '#757575' }],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{ color: '#2c2c2c' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#181818' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [{ color: '#2c2c2c' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212121' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#3c3c3c' }],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#2f3948' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#000000' }],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#3d3d3d' }],
    },
  ];

  const scooterLocations = [
    { id: 1, latitude: -15.7971, longitude: -47.8919 }, // UNB
    { id: 2, latitude: -15.7656, longitude: -47.8665 }, // Parque da Cidade
    { id: 3, latitude: -15.7860, longitude: -47.8825 }, // Esplanada
    { id: 4, latitude: -15.7795, longitude: -47.9300 }, // Rodoviária
    { id: 5, latitude: -15.7898, longitude: -47.9263 }, // Torre de TV
    { id: 6, latitude: -15.7911, longitude: -47.8984 }, // Setor Bancário Norte
    { id: 7, latitude: -15.8100, longitude: -47.9130 }, // Lago Norte
    { id: 8, latitude: -15.7678, longitude: -47.8991 }, // 308 Sul
    { id: 9, latitude: -15.7549, longitude: -47.8895 }, // 716 Sul
    { id: 10, latitude: -15.7471, longitude: -47.8772 }, // Sudoeste
    { id: 11, latitude: -15.7789, longitude: -47.9288 }, // Setor Hoteleiro Norte
    { id: 12, latitude: -15.7774, longitude: -47.9262 }, // Conic
    { id: 13, latitude: -15.7722, longitude: -47.9241 }, // Biblioteca Nacional
    { id: 14, latitude: -15.7913, longitude: -47.9094 }, // 110 Norte
    { id: 15, latitude: -15.7834, longitude: -47.9152 }, // Setor Comercial Sul
    { id: 16, latitude: -15.7667, longitude: -47.9158 }, // CLS 306 Sul
    { id: 17, latitude: -15.7555, longitude: -47.9080 }, // 710 Sul
    { id: 18, latitude: -15.7698, longitude: -47.8873 }, // 414 Sul
    { id: 19, latitude: -15.7784, longitude: -47.8950 }, // 402 Sul
    { id: 20, latitude: -15.7832, longitude: -47.9003 }, // 210 Sul
    { id: 21, latitude: -15.7917, longitude: -47.8932 }, // 109 Norte
    { id: 22, latitude: -15.7845, longitude: -47.8888 }, // 107 Norte
    { id: 23, latitude: -15.7744, longitude: -47.8987 }, // 307 Sul
    { id: 24, latitude: -15.7888, longitude: -47.9071 }, // 111 Norte
    { id: 25, latitude: -15.7962, longitude: -47.9030 }, // 116 Norte
    { id: 26, latitude: -15.7600, longitude: -47.9033 }, // 708 Sul
    { id: 27, latitude: -15.7705, longitude: -47.8999 }, // 409 Sul
    { id: 28, latitude: -15.7820, longitude: -47.9265 }, // Centro de Convenções
    { id: 29, latitude: -15.7758, longitude: -47.8930 }, // 406 Sul
    { id: 30, latitude: -15.7731, longitude: -47.8861 }, // 412 Sul
    { id: 31, latitude: -15.7985, longitude: -47.8751 }, // L2 Norte 216
    { id: 32, latitude: -15.7967, longitude: -47.8802 }, // L2 Norte 210
    { id: 33, latitude: -15.7930, longitude: -47.8825 }, // L2 Norte 208
    { id: 34, latitude: -15.7902, longitude: -47.8840 }, // L2 Norte 206
    { id: 35, latitude: -15.7874, longitude: -47.8855 }, // L2 Norte 204
    { id: 36, latitude: -15.7840, longitude: -47.8872 }, // L2 Norte 202
    { id: 37, latitude: -15.7799, longitude: -47.8884 }, // Via N1 próximo à Rodoviária
    { id: 38, latitude: -15.7775, longitude: -47.8869 }, // Museu Nacional
    { id: 39, latitude: -15.7745, longitude: -47.8845 }, // Palácio do Itamaraty
    { id: 40, latitude: -15.7730, longitude: -47.8811 }, // Congresso Nacional
    { id: 41, latitude: -15.7703, longitude: -47.8800 }, // Praça dos Três Poderes
    { id: 42, latitude: -15.7666, longitude: -47.8808 }, // Palácio do Planalto
    { id: 43, latitude: -15.7660, longitude: -47.8840 }, // L2 Sul 104
    { id: 44, latitude: -15.7681, longitude: -47.8857 }, // L2 Sul 106
    { id: 45, latitude: -15.7710, longitude: -47.8873 }, // L2 Sul 108
    { id: 46, latitude: -15.7735, longitude: -47.8889 }, // L2 Sul 110
    { id: 47, latitude: -15.7761, longitude: -47.8905 }, // L2 Sul 112
    { id: 48, latitude: -15.7785, longitude: -47.8920 }, // L2 Sul 114
    { id: 49, latitude: -15.7809, longitude: -47.8936 }, // L2 Sul 116
    { id: 50, latitude: -15.7833, longitude: -47.8952 }, // L2 Sul 118
  ];
  

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -15.7801,
          longitude: -47.9292,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        customMapStyle={isDarkMode ? darkMapStyle : []}
      >
        {scooterLocations.map((scooter) => (
          <Marker
            key={scooter.id}
            coordinate={{ latitude: scooter.latitude, longitude: scooter.longitude }}
            title={`Patinete ${scooter.id}`}
            description="Disponível"
          >
            <Image
              source={require('../assets/scooter-icon.png')} // Caminho da imagem PNG
              style={styles.markerIcon}
            />
          </Marker>
        ))}
      </MapView>

      {/* Botão para alternar o tema */}
      <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
        <Text style={styles.themeToggleText}>
          {isDarkMode ? '☀️ Claro' : '🌙 Escuro'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const getStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#333' : '#f2f2f2',
    },
    headerButton: {
      marginRight: 15,
      backgroundColor: '#b5f7cd',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 6,
    },
    headerButtonText: {
      color: '#000',
      fontWeight: 'bold',
    },
    welcome: {
      fontSize: width * 0.06,
      textAlign: 'center',
      color: isDarkMode ? '#fff' : '#000',
    },
    themeToggle: {
      position: 'absolute',
      bottom: 60,
      right: 20,
      backgroundColor: isDarkMode ? '#000' : '#b5f7cd',
      paddingVertical: 8,
      paddingHorizontal: 14,
      borderRadius: 20,
    },
    themeToggleText: {
      color: isDarkMode ? '#fff' : '#000',
      fontWeight: 'bold',
    },
    map: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    markerIcon: {
      width: 40,  // Ajuste o tamanho da imagem conforme necessário
      height: 40,
    },
  });