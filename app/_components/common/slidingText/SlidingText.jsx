"use client";
import { useEffect, useRef, useState } from "react";
import style from "./sliding.module.scss";
import gsap from "gsap";
import Image from "next/image";

export default function SlidingText() {
  const firstSlide = useRef(null);
  const secondSlide = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    let animationId;

    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstSlide.current, { xPercent: xPercent });
      gsap.set(secondSlide.current, { xPercent: xPercent });
      xPercent += 0.04 * direction;
      animationId = requestAnimationFrame(animate);
    };

    if (firstSlide.current && secondSlide.current) {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [firstSlide, secondSlide]);

  return (
    <section className={style.main}>
      <div className={style.slider}>
        <p ref={firstSlide} className="h1 yellow">
          <i>
            Flive Flive Flive Flive Flive Flive Flive Flive Flive Flive Flive
            Flive Flive Flive Flive&nbsp;
          </i>
        </p>
        <p ref={secondSlide} className="h1 yellow">
          <i>
            Flive Flive Flive Flive Flive Flive Flive Flive Flive Flive Flive
            Flive Flive Flive Flive&nbsp;
          </i>
        </p>
      </div>
    </section>
  );
}
