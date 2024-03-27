"use client";
import style from "./races.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Races({ races }) {
  return (
    <section className={style.races}>
      <p className="h2 yellow">Races</p>

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
          const date = new Date(race?.date).toDateString();
          return (
            <SwiperSlide key={i + race?.raceName} className="card">
              <div className={style.race}>
                <p className="h4">{race?.round}</p>
                <div>
                  <p className="h4">{race?.raceName}</p>
                  <p>
                    {date}, {race?.time?.slice(0, 5)}
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
