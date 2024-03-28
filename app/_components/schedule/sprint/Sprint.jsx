"use client";
import style from "./sprint.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Sprint({ races }) {
  return (
    <section className={style.sprints}>
      <div className={style.title}>
        <p className="h2">
          <span className="yellow">Sprint</span> rounds
        </p>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        loop={false}
        draggable={true}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        className="swiper"
      >
        {races?.map((race, i) => {
          const date = new Date(race?.Sprint?.date).toDateString();
          if (race?.Sprint) {
            return (
              <SwiperSlide key={i + race?.raceName} className="card">
                <div className={style.sprint}>
                  <p>Round {race?.round}</p>
                  <div>
                    <p className="h4">At the {race?.Circuit?.circuitName}</p>
                    <p>
                      {date}, {race?.Sprint?.time?.slice(0, 5)}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </section>
  );
}
