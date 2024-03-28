"use client";
import Image from "next/image";
import CursorContainer from "../cursorContainer/CursorContainer";
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
            This website is unofficial and is not associated in any way with the
            Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE
            WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of
            Formula One Licensing B.V. This website is also a personal project
            built with no intention for commercial use; it serves solely as a
            practice platform.
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

          <CursorContainer>
            <a className="link" href="https://www.formula1.com/">
              FORMULA 1 Official Website
            </a>
          </CursorContainer>
        </div>
        <CursorContainer>
          <button className="btn" onClick={scrollToTop}>
            Back to top
            <Image
              alt="arrow"
              src={"/arrow.svg"}
              width={10}
              height={10}
              loading="lazy"
            />
          </button>
        </CursorContainer>
      </div>
    </footer>
  );
}
