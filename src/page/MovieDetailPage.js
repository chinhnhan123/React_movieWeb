import { func } from "prop-types";
import React from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../components/config";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import MovieCard from "./../components/movie/MovieCard";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  console.log(
    "🚀 ~ file: MovieDetailPage.js ~ line 13 ~ MovieDetailPage ~ data",
    data
  );
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <div className="py-10 text-white">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover rounded-lg"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt=""
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <h1 className="mb-10 text-4xl font-bold text-center text-white">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center mb-10 gap-x-5">
          {genres.map((item) => (
            <span
              className="gap-3 px-4 py-2 border rounded-lg border-primary text-primary"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-justify leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits></MovieCredits>
      <MovideVideos></MovideVideos>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast && cast.length < 0) return null;
  // console.log(" MovieCredits ~ data", data);

  return (
    <div>
      <h2 className="mb-10 text-3xl text-center">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div key={item.id} className="cast-item">
            <img
              src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
              alt=""
              className="w-full h-[350px] object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-medium text-center">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovideVideos() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (results.length <= 0 || !results) return null;

  return (
    <div className="py-10">
      {results.slice(0, 1).map((item) => (
        <div key={item.id} className="max-w-5xl p-10 m-auto aspect-video">
          <iframe
            width="942"
            height="530"
            src={`https://www.youtube.com/embed/${item.key}`}
            title="J Fla Best Cover Songs 2020, J Fla Greatest Hits 2021 Full Album"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="object-cover w-full h-full"
          ></iframe>
        </div>
      ))}
    </div>
  );
}

function MovieSimilar() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  console.log(
    "🚀 --------------------------------------------------------------------🚀"
  );
  console.log(
    "🚀 ~ file: MovieDetailPage.js ~ line 130 ~ MovieSimilar ~ data",
    data
  );
  console.log(
    "🚀 --------------------------------------------------------------------🚀"
  );
  const { results } = data;
  if (results.length <= 0 || !results) return null;
  return (
    <div className="py-10">
      <h2 className="mb-10 text-3xl font-bold">Similar movies </h2>
      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {results.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieDetailPage;
