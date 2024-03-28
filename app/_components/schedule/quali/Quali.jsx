"use client";
import style from "./quali.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Quali({ races }) {
  const currentDate = new Date();

  const upcomingQuali = races.filter((race) => {
    const qualiDate = new Date(race?.date);
    return qualiDate > currentDate;
  });

  const nextQuali = upcomingQuali.length > 0 ? upcomingQuali[0] : null;

  return (
    <section className={style.qualis}>
      <div className={style.title}>
        <p className="h2">
          <span className="yellow">Qualifying</span> rounds
        </p>
      </div>

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
                <div className={style.intro}>
                  <p className="h4">{race?.round}</p>
                  {nextQuali?.raceName === race?.raceName ? (
                    <span className="yellow">Next quali</span>
                  ) : null}
                </div>
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
