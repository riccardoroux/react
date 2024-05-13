import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { features } from "../implementations/features";
import {
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {features.map((feature, index) => {
          return (
            <View key={index} style={styles.card}>
              <TouchableOpacity
                onPress={() => navigation.navigate(feature.screenName)}
                style={styles.button}
              >
                <Text style={styles.title}>{feature.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "#ffffff", // Colore di sfondo della card
    borderRadius: 10, // Arrotondamento degli angoli
    padding: 10, // Spazio interno
    marginBottom: 20, // Spazio inferiore
    width: "100%", // Larghezza della card
    shadowColor: "#000", // Colore dell'ombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center", // Allinea il testo al centro verticalmente
    alignItems: "center", // Allinea il testo al centro orizzontalmente
    width: "100%", // Larghezza del pulsante uguale alla larghezza della card
  },
  title: {
    fontSize: 24,
    color: "black",
  },
});

export default Home;
