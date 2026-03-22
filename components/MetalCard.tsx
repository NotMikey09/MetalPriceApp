import { View, Text, Pressable, ActivityIndicator } from "react-native";
import { useMetalData } from "../hooks/useMetalData";
import { useRouter } from "expo-router";

export default function MetalCard({ metal }: { metal: string }) {
  const { data, loading, error, reload } = useMetalData(metal);
  const router = useRouter();

  return (
    <Pressable
      disabled={loading || !!error || !data}
      onPress={() => {
        if (!data) return;

        router.push({
          pathname: "/details",
          params: {
            name: data.name,
            price: String(data.price),
            time: data.time,
            open: String(data.open),
            close: String(data.close),
          },
        });
      }}
      style={{
        padding: 18,
        marginVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 16,
        elevation: 4,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "700" }}>
        {metal}
      </Text>

      {loading && <ActivityIndicator style={{ marginTop: 10 }} />}

      {error && (
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "red" }}>Failed to load</Text>
          <Text style={{ color: "blue" }} onPress={reload}>
            Retry
          </Text>
        </View>
      )}

      {data && (
        <View style={{ marginTop: 12 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            ₹{Number(data.price || 0).toLocaleString()}
          </Text>

          <Text style={{ color: "#666" }}>
            Updated at {data.time}
          </Text>
        </View>
      )}
    </Pressable>
  );
}