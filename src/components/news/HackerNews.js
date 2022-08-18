import React from "react";
import axios from "axios";
import lodash from "lodash";
const HackerNews = () => {
  const [hits, setHits] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [url, setUrl] = React.useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );

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

  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5">
        <input
          type="text"
          className="p-5 border border-gray-200 w-full rounded-md  focus:border-blue-400 transition-all"
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className=" bg-lime-600 p-5 rounded-lg ml-3 text-white font-semibold-600 flex-shrink-0"
        >
          Search
        </button>
      </div>
      {loading && (
        <div className="w-8 h-8 border-4 border-r-4 border-blue-500 rounded-full loading border-r-transparent animate-spin mx-auto "></div>
      )}
      {!loading && errorMessage && <div> {errorMessage}</div>}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          //          query.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 className="bg-gray-100 p-3 rounded-sm" key={item.title}>
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
