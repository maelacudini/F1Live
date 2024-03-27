"use client";
import style from "./quali.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Quali({ races }) {
  return (
    <section className={style.qualis}>
      <p className="h2 yellow">Quali</p>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        loop={true}
        draggable={true}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        className="swiper"
      >
        {races?.map((race, i) => {
          const date = new Date(race?.Qualifying?.date).toDateString();
          return (
            <SwiperSlide key={i + race?.raceName} className="card">
              <div className={style.quali}>
                <p className="h4">{race?.round}</p>
                <div>
                  <p className="h4">For the {race?.raceName}</p>
                  <p>
                    {date}, {race?.Qualifying?.time?.slice(0, 5)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
