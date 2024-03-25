import { links } from "@/app/_utils/data";
import style from "./header.module.scss";
import Link from "next/link";
import CursorContainer from "../cursorContainer/CursorContainer";

export default function Header() {
  return (
    <header className={style.header}>
      <nav>
        <div className={style.links}>
          {links.map((link, i) => (
            <CursorContainer key={i}>
              <Link className="link" key={i + link.href} href={link.href}>
                {link.name}
              </Link>
            </CursorContainer>
          ))}
        </div>
      </nav>
    </header>
  );
}
