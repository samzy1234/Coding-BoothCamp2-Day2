import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Requires expo-linear-gradient

export default function App() {
  const quotes = [
    "Believe you can and you're halfway there.",
    "Every day is a second chance.",
    "Dream big. Start small. Act now.",
    "Happiness depends upon ourselves.",
    "Do something today that your future self will thank you for.",
    "Kung Gikapoy naka pag bigti"
  ];

  const [quote, setQuote] = useState("Tap the button to get inspired!");

  const showQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient colors={["#e6d3b3", "#f0e6d2"]} style={styles.header}>
        <Text style={styles.title}>QuickQuote</Text>
        <View style={styles.divider} />
        <Text style={styles.subtitle}>Daily Inspiration</Text>
      </LinearGradient>

      {/* Quote Card */}
      <View style={styles.card}>
        <Text style={styles.quote}>{quote}</Text>
      </View>

      {/* Button */}
      <TouchableOpacity onPress={showQuote} activeOpacity={0.8}>
        <LinearGradient colors={["#d2b48c", "#b8996f"]} style={styles.button}>
          <Text style={styles.buttonText}>✨ New Quote</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4ec",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 30,
    borderRadius: 20,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#3e3a31",
    letterSpacing: 3,
  },
  divider: {
    width: 60,
    height: 2,
    backgroundColor: "#3e3a31",
    marginVertical: 10,
    borderRadius: 2,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6e6555",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
    width: "90%",
  },
  quote: {
    fontSize: 22,
    fontStyle: "italic",
    textAlign: "center",
    color: "#4a4439",
    lineHeight: 32,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 40,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 1,
    textAlign: "center",
  },
});

