import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const { Sider } = Layout;

const SideBar = ({ collapsed }) => {
  const { setTabCount, setActiveTab } = useAppContext();

  const navigate = useNavigate();
  return (
    <Sider
      style={{
        backgroundColor: "red",
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="demo-logo-vertical" />
      <Menu
        onOpenChange={(item) => {
          setActiveTab(item);
        }}
        onSelect={({ item, key }) => {
          console.log(item);
          setTabCount(item.props.tabcount);
          navigate(item.props.path + key);
        }}
        style={{
          backgroundColor: "red",
        }}
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: null,
            label: "1 Введение",
            children: [
              {
                key: 100,
                label: `1.1 Об этом курсе`,
                path: "lesson/",
                tabcount: 5,
              },
              {
                key: 101,
                label: `1.2 Что такое Википедия, Викимедиа и вики-проекты 1.2`,
                path: "lesson/",
                tabcount: 3,
              },
              {
                key: 102,
                label: `1.3 Общие принципы Википедии 1.3`,
                path: "lesson/",
                tabcount: 7,
              },
            ],
          },
          {
            key: "2",
            icon: null,
            label: "nav 2",
            children: [
              {
                key: 200,
                label: `option 2.1`,
                path: "lesson/",
                tabcount: 5,
              },
            ],
          },
          {
            key: "3",
            icon: null,
            label: "nav 3",
            children: [
              {
                key: 300,
                label: `option 3.1`,
                path: "lesson/",
                tabcount: 7,
              },
            ],
          },
        ]}
      />
    </Sider>
  );
};

export default SideBar;
