import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyAhxFdnPjFnZ67CTjVOY9TAgYJNFayWzJg",
  authDomain: "mobileapp-1504f.firebaseapp.com",
  projectId: "mobileapp-1504f",
  storageBucket: "mobileapp-1504f.appspot.com",
  messagingSenderId: "1081050926664",
  appId: "1:1081050926664:web:08450034c27769740dd27d",
  measurementId: "G-FBWFXPQ5RT",
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

// export const db = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

// export default app;
