"use client";
import Image from "next/image";
import style from "./info.module.scss";
import { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import CursorContainer from "../../common/cursorContainer/CursorContainer";

export default function Info({ info }) {
  const driver = info?.Driver;
  const [open, setOpen] = useState(false);

  return (
    <article
      onClick={() => setOpen(!open)}
      style={{ height: open ? "23rem" : "9.55rem" }}
      className={style.info}
    >
      <div className={style.row}>
        <CursorContainer>
          <p className="h2">{driver?.code}</p>
        </CursorContainer>
        <CursorContainer>
          <p className="h3">{driver?.permanentNumber}</p>
        </CursorContainer>
      </div>
      <div className={style.row}>
        <CursorContainer>
          <p className="gray">
            {driver?.familyName}, {driver?.givenName}
          </p>
        </CursorContainer>
        <CursorContainer>
          <Image
            alt="arrow"
            src={"/arrow.svg"}
            width={25}
            height={25}
            loading="lazy"
            style={{ transform: open ? "rotate(-45deg)" : "" }}
          />
        </CursorContainer>
      </div>
      <Dropdown info={info} />
    </article>
  );
}
