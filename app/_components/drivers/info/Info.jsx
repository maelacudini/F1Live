"use client";
import Image from "next/image";
import style from "./info.module.scss";
import { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import CursorContainer from "../../common/cursorContainer/CursorContainer";
import { motion } from "framer-motion";
import { slideUp } from "@/app/_utils/anim";

export default function Info({ info, i }) {
  const driver = info?.Driver;
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      variants={slideUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={i + 1}
      onClick={() => setOpen(!open)}
      style={{ height: open ? "20rem" : "8.5rem" }}
      className={style.info}
    >
      <div className={style.row}>
        <CursorContainer>
          <p className="h3">{driver?.code}</p>
        </CursorContainer>
        <p className="h3">{driver?.permanentNumber}</p>
      </div>
      <div className={style.row}>
        <p className="gray">
          {driver?.familyName}, {driver?.givenName}
        </p>
        <CursorContainer>
          <Image
            alt="arrow"
            src={"/arrow.svg"}
            width={15}
            height={15}
            loading="lazy"
            style={{
              transform: open ? "rotate(90deg)" : "",
              transition: "all 0.3s",
            }}
          />
        </CursorContainer>
      </div>
      <Dropdown info={info} />
    </motion.article>
  );
}
