import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useState } from "react";
const { Header, Content } = Layout;

const headerStyle = {
  display: "flex",
};

const AppHeader = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout>
        <Header style={headerStyle}>
          <div className="demo-logo">
            <img
              width={80}
              src="https://stepik.org/static/frontend/topbar_logo.svg"
              alt=""
            />

            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </div>
        </Header>
        <Layout hasSider>
          <SideBar collapsed={collapsed} />

          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "100vh",
              background: "",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AppHeader;
