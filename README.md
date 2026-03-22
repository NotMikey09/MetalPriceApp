
# 📈 Metal Price Tracker (React Native)

A real-time financial dashboard built with **React Native** and **Expo Router** that tracks precious metal prices. This project focuses on high reliability, independent data fetching, and a clean fintech-inspired user experience.

### 🔗 Live Links
* **Live Web Demo:** [leafy-creponne-b42eab.netlify.app](https://leafy-creponne-b42eab.netlify.app)
* **GitHub Repository:** `[https://github.com/NotMikey09/MetalPriceApp]`

---

### 🌟 Key Features

* **Independent Data Fetching:** Each metal card (Gold, Silver, Platinum, Palladium) utilizes its own instance of a custom hook (`useMetalData`). This ensures that if one API request is slow or fails, it does not block the rest of the UI.
* **Intelligent API Fallback:** To ensure 100% app uptime and handle API rate limits, the application features an automatic failover system. If the **GoldAPI.io** request fails, the app seamlessly transitions to high-fidelity **Mock Data**.
* **Mobile-First UX:**
    * **Pull-to-Refresh:** Global synchronization of market data using `RefreshControl`.
    * **Defensive Navigation:** Type-safe routing using Expo Router to prevent `NaN` errors during data transmission between screens.
    * **Visual Hierarchy:** A clean aesthetic focusing on price clarity, currency formatting (₹), and live status updates.
* **Error Handling & Retry:** Integrated "Tap to Retry" logic for individual metal cards to handle network instability gracefully.

---

### 🛠️ Tech Stack

* **Framework:** [Expo](https://expo.dev/) (React Native)
* **Navigation:** [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
* **Language:** TypeScript
* **State Management:** React Hooks (`useState`, `useEffect`, `useCallback`)
* **Styling:** React Native `StyleSheet` with native feedback patterns.

---

### 📂 Project Structure

```text
/app                 # Expo Router file-based screens
  index.tsx          # Landing Screen (Metal Feed)
  details.tsx        # Dynamic Details Screen
  _layout.tsx        # Global Stack Navigation Configuration
/src
  /components        # Reusable UI (MetalCard, etc.)
  /hooks             # Custom logic (useMetalData)
  /services          # API & Mock Data logic
  /utils             # Formatting (Currency) and safety helpers
/.env                # API Key storage (Ignored in Git for security)
🚀 Installation & Setup
Clone the repository:

Bash
git clone [Your GitHub Link]
cd MetalPricesApp
Install dependencies:

Bash
npm install
Configure Environment Variables:
Create a .env file in the root directory and add your API key:

Code snippet
EXPO_PUBLIC_GOLD_API_KEY=your_gold_api_key_here
Start the application:

Bash
npx expo start
Scan the QR code with Expo Go (Android/iOS) or press w for web.

🧠 Technical Decisions & "Why"
Why Independent Loaders? In financial apps, market volatility means data needs to be as "live" as possible. Loading each metal independently provides a smoother UX where the user sees partial data immediately rather than waiting for a single "all-or-nothing" request.

Why Custom Hooks? Separating the fetching logic into useMetalData makes the code highly reusable and keeps the UI components "clean" and focused on rendering.

Why Native Elements? Used ActivityIndicator and RefreshControl to ensure the app feels like a "Native" mobile experience rather than a wrapped website.

🏁 Submission Checklist
[x] Create React Native app with Expo.

[x] Implement React Navigation (Expo Router).

[x] Fetch live prices (GoldAPI.io) with Mock fallback.

[x] Independent loaders for each metal.

[x] Navigation to Details screen.

[x] Loading and Error state handling.

[x] GitHub Repository & Live Netlify deployment.


---

### 🏁 Final Steps to Finish
1. **Save** this content into your `README.md` file.
2. **Commit and Push** to GitHub:
   ```bash
   git add README.md
   git commit -m "docs: finalize project documentation"
   git push