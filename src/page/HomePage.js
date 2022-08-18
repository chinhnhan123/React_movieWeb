import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="pb-20 movie-layout page-container">
        <h2 className="pb-5 mb-10 text-3xl font-bold text-white capitalize">
          Now playing
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="pb-20 movie-layout page-container">
        <h2 className="pb-5 mb-10 text-3xl font-bold text-white capitalize">
          Top rated
        </h2>
        {/* <div className="grid grid-cols-4 gap-10 movie-list"> */}
        <MovieList type="now_playing"></MovieList>
      </section>
      <section className="pb-20 movie-layout page-container">
        <h2 className="pb-5 mb-10 text-3xl font-bold text-white capitalize">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;