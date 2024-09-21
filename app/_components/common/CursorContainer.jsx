"use client";
import { useCursor } from "@/app/_context/CursorContext";

export default function CursorContainer({ children }) {
    const { setIsHovering } = useCursor();

    return (
        <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setIsHovering(false)}
        >
            {children}
        </div>
    );
}
