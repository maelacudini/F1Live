"use client";
import style from "./quali.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getDate, getTime } from "@/app/_utils/func";

export default function Quali({ races }) {
  const currentDate = new Date();

  const upcomingRaces = races.filter((race) => {
    const raceDate = new Date(race?.date);
    return raceDate > currentDate;
  });

  const nextRace = upcomingRaces.length > 0 ? upcomingRaces[0] : null;

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
          const date = getDate(race?.Qualifying?.date);
          const time = getTime(race?.Qualifying?.time?.slice(0, 5));
          return (
            <SwiperSlide key={i + race?.raceName} className="card">
              <div className={style.quali}>
                <div className={style.intro}>
                  <p>Round {race?.round}</p>
                  {nextRace?.raceName === race?.raceName ? (
                    <p className="yellow">Upcoming</p>
                  ) : null}
                </div>
                <div>
                  <p className="h4">
                    {" "}
                    At the {race?.Circuit?.circuitName},{" "}
                    {race?.Circuit?.Location?.locality}
                  </p>
                  <p>
                    {date}, {time}
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
