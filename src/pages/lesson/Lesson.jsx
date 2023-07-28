import { Tabs } from "antd";

const items = [
  {
    key: "1",
    label: <div className="box"></div>,
    children: `Content of Tab Pane 1`,
  },
  {
    key: "2",
    label: <div className="box"></div>,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: <div className="box"></div>,
    children: `Content of Tab Pane 3`,
  },
];

const Lesson = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 240
        }}
      >
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Lesson;
