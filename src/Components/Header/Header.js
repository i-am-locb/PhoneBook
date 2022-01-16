import { Button, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { logout } from "../../Redux/auth_reducer";
import styles from "./Header.module.css";

export function HeaderComponent() {
  let isAuth = useSelector((state) => state.auth.isAuth);

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logout());
  };

  return (
    <Header className={styles.header}>
      <div className="logo">Phone Book</div>
      {isAuth && (
        <Button type="primary" onClick={() => onClick()}>
          Logout
        </Button>
      )}
    </Header>
  );
}
