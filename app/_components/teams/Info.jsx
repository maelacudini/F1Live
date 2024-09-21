"use client";
import { slideUp } from "@/app/_utils/anim";
import style from "../../_style/teamsInfo.module.scss";
import { motion } from "framer-motion";

export default function Info({ info, i }) {
    const constructor = info?.Constructor;

    return (
        <motion.article
            variants={slideUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i + 1}
            className={style.info}
        >
            <div className={style.row}>
                <p className="h3">{info?.position}</p>
                <p className="h3">{constructor?.name}</p>
            </div>
            <div className={style.row}>
                <p className="gray">Points</p>
                <p className="gray">{info?.points}</p>
            </div>
        </motion.article>
    );
}
