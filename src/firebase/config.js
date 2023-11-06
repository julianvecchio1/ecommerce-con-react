
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCutjNVoD4ByW3N9KuSBTYpCJma-MWfIpw",
  authDomain: "ecommerce-con-react-149c5.firebaseapp.com",
  projectId: "ecommerce-con-react-149c5",
  storageBucket: "ecommerce-con-react-149c5.appspot.com",
  messagingSenderId: "798120993641",
  appId: "1:798120993641:web:16aa82ea080c88a69dd3f8",
  measurementId: "G-WZJQEFYV0B"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);