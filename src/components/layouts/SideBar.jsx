import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const SideBar = ({ collapsed }) => {

    const navigate = useNavigate()
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
        // onClick={(item) => {
        //     console.log( item);
        // }}
        onSelect={({ item, key }) => {
          console.log(item.props.path + key);
          navigate(item.props.path + key)
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
            label: "nav 1",
            children: [
              {
                key: 111,
                label: `option 1.1`,
                path: "lesson/",
              },
            ],
          },
          {
            key: "2",
            icon: null,
            label: "nav 2",
            children: [
              {
                key: 112,
                label: `option 2.1`,
                path: "lesson/"
              },
            ],
          },
          {
            key: "3",
            icon: null,
            label: "nav 3",
            children: [
              {
                key: 113,
                label: `option 3.1`,
                path: "lesson/"
              },
            ],
          },
        ]}
      />
    </Sider>
  );
};

export default SideBar;
