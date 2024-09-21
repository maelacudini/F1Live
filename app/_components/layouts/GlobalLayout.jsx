import style from "../../_style/globalLayout.module.scss";

export const GlobalLayout = ({ children }) => {
    return <main className={style.globalLayout}>{children}</main>;
};
