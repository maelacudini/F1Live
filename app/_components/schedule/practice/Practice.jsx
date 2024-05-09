"use client";
import style from "./practice.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { v4 as uuidv4 } from "uuid";
import Card from "./card/Card";

export default function Practice({ races }) {
  const currentDate = new Date();

  const upcomingRaces = races.filter((race) => {
    const raceDate = new Date(race?.date);
    return raceDate > currentDate;
  });

  const nextRace = upcomingRaces.length > 0 ? upcomingRaces[0] : null;

  return (
    <section className={style.practices}>
      <div className={style.title}>
        <p className="h2">
          <span className="yellow">Practice</span> rounds
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
        {races?.map((race, i) => (
          <span key={uuidv4()}>
            {race?.FirstPractice && (
              <SwiperSlide key={uuidv4()} className="card">
                <Card
                  nextRace={nextRace}
                  race={race}
                  date={race?.FirstPractice?.date}
                  time={race?.FirstPractice?.time?.slice(0, 5)}
                />
              </SwiperSlide>
            )}
            {race?.SecondPractice && (
              <SwiperSlide key={uuidv4()} className="card">
                <Card
                  nextRace={nextRace}
                  race={race}
                  date={race?.SecondPractice?.date}
                  time={race?.SecondPractice?.time?.slice(0, 5)}
                />
              </SwiperSlide>
            )}
            {race?.ThirdPractice && (
              <SwiperSlide key={uuidv4()} className="card">
                <Card
                  nextRace={nextRace}
                  race={race}
                  date={race?.ThirdPractice?.date}
                  time={race?.ThirdPractice?.time?.slice(0, 5)}
                />
              </SwiperSlide>
            )}
          </span>
        ))}
      </Swiper>
    </section>
  );
}
