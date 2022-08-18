import React from "react";
import useSWR from "swr";
import { fetcher, apiKey } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
    fetcher
  );

  const movies = data?.results || [];
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor={"true"} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, backdrop_path } = item;

  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="absolute inset-0 rounded-lg overlay bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] "></div>
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute w-full text-white bottom-5 left-5">
        <h2 className="mb-5 text-3xl font-bold">{title}</h2>
        <div className="flex mb-8 item-center gap-x-3">
          <span className="px-4 py-2 border border-white rounded-md ">
            Action
          </span>
          <span className="px-4 py-2 border border-white rounded-md ">
            Advanture
          </span>
          <span className="px-4 py-2 border border-white rounded-md ">
            Drama
          </span>
        </div>
        <button className="px-6 py-3 font-medium text-white rounded-lg bg-primary">
          Watch Now
        </button>
      </div>
    </div>
  );
}

export default Banner;
