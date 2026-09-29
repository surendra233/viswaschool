/* ============================================================
   Sri Viswa EM School – Firebase Configuration
   ============================================================
   
   Purpose: Enable real-time data sync across all devices
            (Teacher → Principal → Parents)
   
   Status:  ✅ ACTIVE — Firebase is configured
   
   Notes:
   - These values are PUBLIC identifiers (safe to share)
   - Security is enforced by Firebase Database Rules
   - Free tier (Spark plan) — no credit card needed
   ============================================================ */

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyB5--clKlyDZ2C9fE-LgWk9ckDVzvYFIFQ",
  authDomain: "sri-viswa-em-school.firebaseapp.com",
  databaseURL: "https://sri-viswa-em-school-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sri-viswa-em-school",
  storageBucket: "sri-viswa-em-school.firebasestorage.app",
  messagingSenderId: "875562204077",
  appId: "1:875562204077:web:599b6472b294aa6ffdbf24"
};

/* ============================================================
   Notes on Firebase Security Rules (set in Firebase Console)
   ============================================================
   
   Go to: Firebase Console → Realtime Database → Rules
   
   Use these rules to keep the site working (no auth):
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   
   The default "test mode" rules expire in 30 days.
   ============================================================ */
