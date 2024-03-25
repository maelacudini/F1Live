"use client";
import style from "./title.module.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { titleAnim } from "@/app/_utils/anim";

export default function Title({ title, cname }) {
  const words = title.split(" ");
  const body = useRef(null);
  const isInView = useInView(body, { once: false, margin: "10%" });

  return (
    <div ref={body} className={style.title}>
      {words.map((word, index) => (
        <span key={index + 1}>
          <motion.h1
            className={cname}
            variants={titleAnim}
            initial="initial"
            animate={isInView ? "animate" : ""}
            custom={index + 1}
            key={index + 1}
          >
            {word}&nbsp;
          </motion.h1>
        </span>
      ))}
    </div>
  );
}
