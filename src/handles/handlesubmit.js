import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
 
const HandleSubmit = (testdata) => {
    const ref = collection(firestore, "test_data") // Firebase creates this automatically
    console.log(testdata, 'printing data in testdata')
    let data = testdata
    
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err, 'printing error')
    }
}
 
export default HandleSubmit