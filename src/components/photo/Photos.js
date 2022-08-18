import React, { useEffect, useState } from "react";
import axios from "axios";
const GetRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&&limit=8`
    );
    return response.data;
  } catch (error) {
    // handle error
    console.log(error);
  }
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const hanldClickLoadMore = React.useRef({});
  hanldClickLoadMore.current = async () => {
    const img = await GetRandomPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...img];
    setRandomPhotos(newPhotos);
    setNextPage(nextPage + 1);
  };

  useEffect(() => {
    document.title = "Welcome to Photos";
    hanldClickLoadMore.current();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((photo, index) => (
            <div key={photo.id} className="p-3 bg-white rounded-lg shadow-md">
              <img
                src={photo.download_url}
                alt={photo.author}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={hanldClickLoadMore.current}
          className="inline-block px-8 py-4 text-white bg-purple-600 rounded-lg"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
