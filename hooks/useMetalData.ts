import { useEffect, useState, useCallback } from "react";
import { fetchMetalPrice } from "../services/api";


export interface MetalData {
  name: string;
  price: number;
  time: string;
  open: number;
  close: number;
}

export const useMetalData = (metal: string) => {
  const [data, setData] = useState<MetalData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  
  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
    
      
      const res = await fetchMetalPrice(metal);
      
      if (res) {
        setData(res);
      } else {
        throw new Error("No data received");
      }
    } catch (err) {
      setError("Failed to fetch price");
      console.error(`Error loading ${metal}:`, err);
    } finally {
      setLoading(false);
    }
  }, [metal]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { data, loading, error, reload: loadData };
};