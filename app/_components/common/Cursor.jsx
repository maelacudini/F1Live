"use client";
import { useEffect, useState } from "react";
import style from "../../_style/cursor.module.scss";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { cursorAnim } from "@/app/_utils/anim";
import { useCursor } from "@/app/_context/CursorContext";

export default function Cursor() {
    const cursorSize = 40;
    const { isHovering } = useCursor();
    const [isActive, setIsActive] = useState(false);

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
        setIsActive(true);
    };

    const handleMouseLeave = () => {
        setIsActive(false);
    };

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.addEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isActive && (
                <motion.div
                    variants={cursorAnim}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key="cursor"
                    style={{
                        left: mouse.x,
                        top: mouse.y,
                        scale: isHovering ? "1.5" : "1",
                    }}
                    className={style.cursor}
                />
            )}
        </AnimatePresence>
    );
}
