import React, {FC, useEffect} from "react";
import { Text, SafeAreaView } from "react-native";
import { useTailwind } from "tailwind-rn";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";
import { db } from "../../firebase";

export const Workout: FC = () => {
  const tw = useTailwind();
  const { user } = useAuth((state) => ({
    signOut: state.signOut,
    user: state.user,
  }));


  useEffect(() => {
    (async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Exercises"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().name}`);
        });
      } catch (e) {
        console.log("Error: ", e);
      }
    })()
  }, [])

  if (!user) return null;

  return (
    <SafeAreaView style={tw("h-full justify-between items-center")}>
      <Text>Hello workout page</Text>
    </SafeAreaView>
  );
};

export default Workout;
