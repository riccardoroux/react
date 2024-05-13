import React, { useEffect, useMemo, useState } from "react";
import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native";
import { getEpisode } from "../api/api"; // Modifica l'import di getEpisode
import { SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;

const List = ({ navigation }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getEpisode().then((response) => setList(response)); // Utilizza getEpisode invece di getLocation
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.card, { width: screenWidth - 40 }]}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>{`Type: ${item.air_date}`}</Text>
          <Text style={styles.details}>{`Dimension: ${item.episode}`}</Text>
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
    alignItems: "center",
    paddingHorizontal: 20, // Aggiunge uno spazio orizzontale ai bordi
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
  },
  name: {
    textAlign: "center", // Centra il testo
    fontSize: 30, // Aumenta la dimensione del testo del nome
    fontWeight: "bold", // Rende il testo in grassetto
    marginBottom: 10, // Aggiunge spazio inferiore
  },
  detailsContainer: {
    marginLeft: 15, // Aggiunge un margine sinistro per spaziare dal bordo della card
  },
  details: {
    fontSize: 20, // Aumenta la dimensione del testo dei dettagli
    marginBottom: 5, // Aggiunge spazio inferiore
  },
});
