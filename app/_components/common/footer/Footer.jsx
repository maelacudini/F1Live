"use client";
import Image from "next/image";
import CursorContainer from "../cursorContainer/CursorContainer";
import SlidingText from "../slidingText/SlidingText";
import style from "./footer.module.scss";
import { links } from "@/app/_utils/data";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer" className={style.footer}>
      <div className={style.main}>
        <div className={style.info}>
          <p className="h4">Disclaimer</p>
          <p className="gray">
            This web application is not affiliated in any way with Formula 1.
            The information provided is sourced from the{" "}
            <i>Ergast Developer API</i>, and I do not claim ownership of any
            data mentioned. This project is a creative work and is not intended
            for commercial use. I am not making any money from this project nor
            do I intend to make a profit.
          </p>

          <div className={style.links}>
            {links.map((link, i) => (
              <CursorContainer key={i}>
                <Link className="link" href={link.href}>
                  {link.name}
                </Link>
              </CursorContainer>
            ))}
          </div>
        </div>
        <CursorContainer>
          <button className="btn" onClick={scrollToTop}>
            Back to top
            <Image
              alt="arrow"
              src={"/arrow.svg"}
              width={15}
              height={15}
              loading="lazy"
              style={{ transform: "rotate(-45deg)" }}
            />
          </button>
        </CursorContainer>
      </div>
      <SlidingText />
    </footer>
  );
}
