import React, { useState, useCallback } from "react";
import { ScrollView, Text, RefreshControl, StyleSheet, View, SafeAreaView } from "react-native";
import MetalCard from "../../components/MetalCard";

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const metals = ["Gold", "Silver", "Platinum", "Palladium"];


  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.container}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh} 
            tintColor="#007AFF" 
            colors={["#007AFF"]}
          />
        }
      >
        <View style={styles.header}>
          <Text style={styles.title}>Metal Prices</Text>
          <Text style={styles.subtitle}>Live Market Data • INR</Text>
        </View>

        <View key={refreshing ? 'refreshing' : 'stable'}>
          {metals.map((metal) => (
            <MetalCard key={metal} metal={metal} />
          ))}
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Data provided by GoldAPI.io</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F2F2F7" },
  container: { padding: 16 },
  header: { marginBottom: 20, marginTop: 10 },
  title: { fontSize: 32, fontWeight: "800", color: "#1C1C1E" },
  subtitle: { fontSize: 14, color: "#8E8E93", fontWeight: "500", marginTop: 4 },
  footer: { marginTop: 20, marginBottom: 40, alignItems: 'center' },
  footerText: { fontSize: 12, color: "#AEAEB2" }
});