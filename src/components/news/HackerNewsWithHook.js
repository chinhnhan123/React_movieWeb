import React from "react";

import useHackerNews from "../../hooks/useHackerNews";
const HackerNewsWithHook = () => {
  const { query, setQuery, setUrl, loading, errorMessage, hits } =
    useHackerNews(`https://hn.algolia.com/api/`);
  return (
    <div className="w-2/4 p-5 mx-auto mt-5 bg-white rounded-lg shadow-md">
      <div className="flex mb-5">
        <input
          type="text"
          className="w-full p-5 transition-all border border-gray-200 rounded-md focus:border-blue-400"
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="flex-shrink-0 p-5 ml-3 text-white rounded-lg  bg-lime-600 font-semibold-600"
        >
          Search
        </button>
      </div>
      {loading && (
        <div className="w-8 h-8 mx-auto border-4 border-r-4 border-blue-500 rounded-full loading border-r-transparent animate-spin "></div>
      )}
      {!loading && errorMessage && <div> {errorMessage}</div>}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          //          query.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 className="p-3 bg-gray-100 rounded-sm" key={item.title}>
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithHook;
