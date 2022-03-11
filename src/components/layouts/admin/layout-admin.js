import Header from "./header/header";
import Menu from "./menu/menu";
import style from "./layout-admin.module.css";

const LayoutAdmin = ({ children }) => {
  return (
    <div className={style.layout}>
      <div className={style.menu}>
        <Menu />
      </div>
      <div className={style["header-main"]}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.main}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
