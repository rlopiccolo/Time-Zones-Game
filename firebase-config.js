// Replace the placeholders below with your Firebase project’s values.
// How to get these: Firebase Console → Project settings → "Your apps" → Web app → SDK config.
// Realtime Database: create a DB, choose a location, and enable Anonymous auth under Authentication → Sign-in method.

export const firebaseConfig = {
  apiKey:        "YOUR_API_KEY",
  authDomain:    "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL:   "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:     "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:         "YOUR_APP_ID"
};

/*
Realtime Database Rules (simple classroom setup)
-----------------------------------------------
Use these rules so only signed-in users (anonymous is fine) can read/write
the small set of paths used by this demo. Paste into Realtime Database → Rules:

{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}

(For stricter control later, we can lock writes to each user's own node.)
*/
