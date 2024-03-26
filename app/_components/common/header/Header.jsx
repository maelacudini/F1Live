"use client";
import { links } from "@/app/_utils/data";
import style from "./header.module.scss";
import Link from "next/link";
import CursorContainer from "../cursorContainer/CursorContainer";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  return (
    <header className={style.header}>
      <nav className="btn">
        <div className={style.links}>
          {links.map((link, i) => (
            <CursorContainer key={i}>
              <Link className="link" key={i + link.href} href={link.href}>
                {link.name}
              </Link>
              <div
                className={style.dot}
                style={{ scale: path === link.href ? "1" : "0" }}
              />
            </CursorContainer>
          ))}
        </div>
      </nav>
    </header>
  );
}
