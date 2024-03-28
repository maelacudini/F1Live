"use client";
import style from "./practice.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { v4 as uuidv4 } from "uuid";

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
        {races?.map((race, i) => {
          const firstDate = new Date(race?.FirstPractice?.date).toDateString();
          const secondDate = new Date(
            race?.SecondPractice?.date
          ).toDateString();
          const thirdDate = new Date(race?.ThirdPractice?.date).toDateString();
          return (
            <span key={uuidv4()}>
              <SwiperSlide key={uuidv4()} className="card">
                <div className={style.practice}>
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
                      {firstDate}, {race?.FirstPractice?.time?.slice(0, 5)}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={uuidv4()} className="card">
                <div className={style.practice}>
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
                      {secondDate}, {race?.SecondPractice?.time?.slice(0, 5)}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={uuidv4()} className="card">
                <div className={style.practice}>
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
                      {thirdDate}, {race?.ThirdPractice?.time?.slice(0, 5)}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </span>
          );
        })}
      </Swiper>
    </section>
  );
}
