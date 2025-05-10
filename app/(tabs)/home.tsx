import { onAuthStateChanged, User } from "firebase/auth"; // Import the User type
import { collection, getDocs } from "firebase/firestore"; // To interact with Firestore
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { auth, firestore } from "../../firebaseConfig"; // Import the Firebase services

const Home = () => {
  const [user, setUser] = useState<User | null>(null); // Explicitly declare user state as User | null
  const [messages, setMessages] = useState<any[]>([]); // State to hold Firestore messages

  useEffect(() => {
    // Listener to track authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state when auth state changes
    });

    // Fetch data from Firestore (example with "messages" collection)
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "messages"));
      const messagesArray = querySnapshot.docs.map((doc) => doc.data());
      setMessages(messagesArray); // Set messages to state
    };

    fetchData();

    // Cleanup the listener when the component unmounts
    return unsubscribe;
  }, []);

  return (
    <View style={{ padding: 20 }}>
      {user ? (
        <Text>Welcome, {user.email}</Text> // Show user email if logged in
      ) : (
        <Text>Please log in</Text> // Show login message if no user is logged in
      )}

      <Text style={{ marginTop: 20 }}>Messages from Firestore:</Text>
      {messages.length > 0 ? (
        messages.map((message, index) => (
          <Text key={index} style={{ marginBottom: 5 }}>
            {message.text} {/* Replace with the correct message field */}
          </Text>
        ))
      ) : (
        <Text>No messages available</Text> // Show message if no data
      )}

      {/* Logout button to sign out */}
      <Button title="Log Out" onPress={() => auth.signOut()} />
    </View>
  );
};

export default Home;
