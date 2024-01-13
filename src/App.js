import './App.css';
import HandleSubmit from './handles/handlesubmit';
import HandleFetch from './handles/handleFetch';
import { useState, useEffect } from 'react';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const submithandler = (e) => {
    e.preventDefault()
    console.log(userData, 'printing data')
    HandleSubmit(userData)
    setUserData({
      name: '',
      email: '',
      phone: ''
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await HandleFetch();
        console.log(data, 'printing data after getting');
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <form onSubmit={submithandler}>
        <input type="text" name='name' value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
        <input type="text" name='email' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
        <input type="text" name='phone' value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;