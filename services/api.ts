const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const BASE_URL = "https://www.goldapi.io/api";

// Using a Record for type safety instead of 'any'
const SYMBOLS: Record<string, string> = {
  Gold: "XAU",
  Silver: "XAG",
  Platinum: "XPT",
  Palladium: "XPD",
};

export const fetchMetalPrice = async (metal: string) => {
  const symbol = SYMBOLS[metal];

  try {
    // 1. Check if API Key exists to avoid unnecessary failed fetches
    if (!API_KEY) {
      console.warn(`Missing API Key for ${metal}. Falling back to mock data.`);
      return getMockData(metal);
    }

    const response = await fetch(`${BASE_URL}/${symbol}/INR`, {
      headers: {
        "x-access-token": API_KEY,
        "Content-Type": "application/json",
      },
    });

    // 2. Handle HTTP errors (like 429 Too Many Requests)
    if (!response.ok) {
      console.error(`API Error (${response.status}) for ${metal}`);
      return getMockData(metal);
    }

    const data = await response.json();

    // 3. Validation Logic
    if (!data || data.error || typeof data.price !== 'number') {
      console.warn(`Invalid API format for ${metal}. Using mock.`);
      return getMockData(metal);
    }

    return {
      name: metal,
      price: data.price,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      open: data.open_price ?? (data.price - 50),
      close: data.prev_close_price ?? (data.price - 20),
    };

  } catch (error) {
    console.error(`Fetch failed for ${metal}:`, error);
    return getMockData(metal);
  }
};

const getMockData = (metal: string) => {
  const mockPrices: Record<string, number> = {
    Gold: 62450,
    Silver: 7420,
    Platinum: 28300,
    Palladium: 31500,
  };

  const price = mockPrices[metal] || 0;

  return {
    name: metal,
    price,
    time: `${new Date().toLocaleTimeString()} (Mock)`,
    open: price - 150,
    close: price + 100,
  };
};