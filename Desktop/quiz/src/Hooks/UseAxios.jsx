import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "https://opentdb.com/";

const UseAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const FetchData = () => {
      axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    FetchData();
  }, [url]);

  return { response, error, loading };
};
export default UseAxios;
