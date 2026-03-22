import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";

export default function Details() {
  const { name, price, open, close, time } = useLocalSearchParams();

  const formatValue = (val: any) => 
    Number(val || 0).toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    });

  return (
    <SafeAreaView style={styles.container}>
      {/* This sets the title in the Header bar automatically */}
      <Stack.Screen options={{ title: `${name} Analysis` }} />

      <View style={styles.content}>
        <View style={styles.headerSection}>
          <Text style={styles.nameLabel}>{name} Spot Price</Text>
          <Text style={styles.mainPrice}>{formatValue(price)}</Text>
          <Text style={styles.updateText}>Last updated at {time}</Text>
        </View>

        <View style={styles.statsCard}>
          <View style={styles.row}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>PREVIOUS OPEN</Text>
              <Text style={styles.statValue}>{formatValue(open)}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>PREVIOUS CLOSE</Text>
              <Text style={styles.statValue}>{formatValue(close)}</Text>
            </View>
          </View>
          
          <View style={styles.divider} />
          
          <Text style={styles.footerText}>
            Reference Date: {new Date().toLocaleDateString('en-IN', { 
              day: 'numeric', month: 'long', year: 'numeric' 
            })}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2F2F7" },
  content: { padding: 20 },
  headerSection: { alignItems: 'center', marginBottom: 30 },
  nameLabel: { fontSize: 14, color: "#8E8E93", fontWeight: '600', letterSpacing: 1 },
  mainPrice: { fontSize: 40, fontWeight: "800", color: "#1C1C1E", marginVertical: 8 },
  updateText: { fontSize: 13, color: "#34C759", fontWeight: '500' }, // Green for 'Live' feel
  statsCard: { 
    backgroundColor: "#FFF", 
    padding: 20, 
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  statItem: { flex: 1 },
  statLabel: { fontSize: 10, color: "#8E8E93", fontWeight: '700', marginBottom: 4 },
  statValue: { fontSize: 16, fontWeight: '600', color: "#2C2C2E" },
  divider: { height: 1, backgroundColor: '#F2F2F7', marginVertical: 15 },
  footerText: { fontSize: 12, color: "#AEAEB2", textAlign: 'center' }
});