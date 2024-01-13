import { firestore } from "../firebase_setup/firebase"

const HandleFetch = async () => {
    let userDataArray = ''
    try {
      const usersCollection = firestore.collection('testData');
      const snapshot = await usersCollection.get();
      userDataArray = snapshot.docs.map((doc) => doc.data());
    } catch (error) {
      console.error("Error fetching data from Firebase: ", error);
    }
    return userDataArray
  };

  export default HandleFetch;
