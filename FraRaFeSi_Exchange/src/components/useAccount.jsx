import { useEffect, useState } from "react";

export function useAccount({ username, password }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(
      `http://localhost:3001/users?username=${username}&password=${password}}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella richiesta API");
        }
        return response.json();
      })
      .then((json) => {
        if (json.name && json.email) {
          setData({
            NomeUtente: json.name,
            Email: json.email,
          });
        } else {
          console.log("Dati mancanti nella risposta API");
        }
      })
      .catch((error) => {
        console.error("Error fetching GitHub user data:", error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [username, password]);

  if (isLoading) {
    return <div>Caricamento...</div>;
  }
  if (error) {
    return { error };
  }

  return {
    username: data.name,
    email: data.email,
  };
}
