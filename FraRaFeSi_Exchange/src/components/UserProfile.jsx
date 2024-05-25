import { useState, useEffect } from "react";

export function UserProfile({ userId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Effettua la richiesta per ottenere i dati dell'utente dal server
    fetch(`http://localhost:3000/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, [userId]); // Aggiungi userId come dipendenza affinché l'effetto venga eseguito ogni volta che userId cambia

  return (
    <div>
      {userData ? (
        <div>
          <h1>{userData.name}</h1>
          <p>Balance: ${userData.balance}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
