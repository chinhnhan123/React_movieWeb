import React from "react";
import axios from "axios";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};

const hackerNewReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_ERRORMESSAGE": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.payload };
    }

    default:
      break;
  }
};

const HackerNewsWithReduce = () => {
  const [state, dispatch] = React.useReducer(hackerNewReducer, initialState);
  const handleFetchData = React.useRef({});

  handleFetchData.current = async () => {
    // setLoading(true);
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(state.url);
      dispatch({
        type: "SET_DATA",
        payload: response.data?.hits || [],
      });
      console.log(response.data.hits);
      // set Loading(false);
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      console.log(error);
      // set Loading(false);
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });

      dispatch({
        type: "SET_ERRORMESSAGE",
        payload: `the error happen ${error}`,
      });
    }
  };
  React.useEffect(() => {
    handleFetchData.current();
  }, [state.url]);

  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5">
        <input
          type="text"
          className="p-5 border border-gray-200 w-full rounded-md  focus:border-blue-400 transition-all"
          defaultValue={state.aquery}
          onChange={(e) =>
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            })
          }
          disabled={state.loading}
        />
        <button
          onClick={
            () =>
              dispatch({
                type: "SET_URL",
                payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
              })
            // setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className=" bg-lime-600 p-5 rounded-lg ml-3 text-white font-semibold-600 flex-shrink-0"
        >
          Search
        </button>
      </div>
      {state.loading && (
        <div className="w-8 h-8 border-4 border-r-4 border-blue-500 rounded-full loading border-r-transparent animate-spin mx-auto "></div>
      )}
      {!state.loading && state.errorMessage && (
        <div className="text-red-500"> {state.errorMessage}</div>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          //          query.length > 0 &&
          state.hits.map((item, index) => {
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

export default HackerNewsWithReduce;
