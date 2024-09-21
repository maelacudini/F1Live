import style from "../../_style/homeLayout.module.scss";

export const HomeLayout = ({ children }) => {
    return <section className={style.main}>{children}</section>;
};
