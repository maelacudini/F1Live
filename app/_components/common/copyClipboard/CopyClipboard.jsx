"use client";
import Image from "next/image";
import style from "./copy.module.scss";
import { usePathname } from "next/navigation";
import CursorContainer from "../cursorContainer/CursorContainer";
import { useState } from "react";

export default function CopyClipboard() {
  const path = usePathname();
  const base = "https://f1-live-eight.vercel.app";
  const links = base + path;
  const [copyText, setCopyText] = useState("Copy and share");

  const copylink = (e) => {
    navigator.clipboard.writeText(links);
    setCopyText("Link copied!");
    setTimeout(() => {
      setCopyText("Copy and share");
    }, 5000);
  };

  return (
    <div className={style.copy}>
      <div className={style.main}>
        <CursorContainer>
          <button className="btn" onClick={copylink}>
            {copyText}
            <Image
              alt="copy"
              src={"/copy.svg"}
              width={20}
              height={20}
              loading="lazy"
            />
          </button>
        </CursorContainer>
      </div>
    </div>
  );
}
