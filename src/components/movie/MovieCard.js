import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./../button/Button";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
        className="object-cover w-full h-[250px] rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl text-bold">{title}</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span className="">{new Date(release_date).getFullYear()}</span>
          <span className="">{vote_average}</span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch now</Button>
      </div>
    </div>
  );
};

export default MovieCard;
