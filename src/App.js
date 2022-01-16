import "antd/dist/antd.css";

import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Route, Routes } from "react-router-dom";

import { Login } from "./Components/Login/Login";
import { PhoneBook } from "./Components/PhoneBook/PhoneBook";
import { Start } from "./Components/Start/Start";
import { HeaderComponent } from "./Components/Header/Header";
import { FooterComponent } from "./Components/Footer/Footer";


export function App() {
  return (
    <Layout className="layout">
      <HeaderComponent />
      <Content style={{ padding: "20px 50px", minHeight: "86vh" }}>
        <div className="site-layout-content">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/login" element={<Login />} />
            <Route path="/phonebook" element={<PhoneBook />} />
          </Routes>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
}

