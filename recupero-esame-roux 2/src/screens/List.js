import React, { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getCharacters } from "../api/api";
import { SafeAreaView } from "react-native-safe-area-context";

const List = ({ navigation }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getCharacters().then((response) => setList(response));
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>{`Status: ${item.status}`}</Text>
          <Text style={styles.details}>{`Species: ${item.species}`}</Text>
          <Text style={styles.details}>{`Gender: ${item.gender}`}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item, index) => {
    return item.id;
  };

  const listFiltered = useMemo(() => {
    return list;
  }, [list]);

  return (
    <SafeAreaView>
      <FlatList
        horizontal={true} // Imposta lo scorrimento orizzontale
        data={listFiltered}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.container} // Aggiunto per centrare il contenuto verticalmente
      />
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centra il contenuto verticalmente
    paddingHorizontal: 20, // Aggiunge uno spazio orizzontale ai bordi
    flexDirection: "row", // Imposta lo scorrimento orizzontale
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginRight: 10, // Aggiunge spazio tra le card
  },
  image: {
    width: 150, // Imposta una larghezza fissa per l'immagine
    height: 150, // Imposta un'altezza fissa per l'immagine
    borderRadius: 10, // Arrotonda leggermente gli angoli delle immagini
    marginBottom: 10, // Aggiunge spazio inferiore
  },
  name: {
    textAlign: "center", // Centra il testo
    fontSize: 20, // Aumenta la dimensione del testo del nome
    fontWeight: "bold", // Rende il testo in grassetto
    marginBottom: 10, // Aggiunge spazio inferiore
  },
  detailsContainer: {
    marginLeft: 15, // Aggiunge un margine sinistro per spaziare dal bordo della card
  },
  details: {
    fontSize: 16, // Aumenta la dimensione del testo dei dettagli
    marginBottom: 5, // Aggiunge spazio inferiore
  },
});
