import React from "react";
import axios from "axios";

export default function useHackerNews(initialURL) {
  const [hits, setHits] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [url, setUrl] = React.useState(initialURL);

  const handleFetchData = React.useRef({});
  // const handleQueryData = lodash.debounce((e) => {
  //   setQuery(e.target.value);
  // }, 500);
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      console.log(response.data.hits);
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorMessage(`the error happen ${error}`);
    }
  };
  React.useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return {
    query,
    setQuery,
    setUrl,
    loading,
    errorMessage,
    hits,
  };
}
