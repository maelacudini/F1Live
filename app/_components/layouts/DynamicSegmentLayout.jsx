import style from "../../_style/dynamicSegmentLayout.module.scss";

export const DynamicSegmentLayout = ({ children }) => {
    return <section className={style.dynamicSegmentLayout}>{children}</section>;
};
