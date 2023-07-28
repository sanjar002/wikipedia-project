import { Tabs } from "antd";
import { useAppContext } from "../../context/AppContext";
import { useEffect, useState } from "react";

// tabs comp
import Tab1 from '../../components/Home2/Home2'
import Tab2  from '../../components/Home3/Home3'
import Tab3  from '../../components/HomePage/HomePage'

const Lesson = () => {
  const { tabCount } = useAppContext();
  const [tabs, setTabs] = useState([]);

  let items = [];

  const onChange = (key) => {
    console.log(key);
  };

  useEffect(() => {
    for (let i = 1; i < tabCount; i++) {
      items.push({
        key: "tab-" + i,
        label: <div className="box"></div>,
        children:`Lorem ${i}`,
      });
    }

    setTabs([...items])

  }, [tabCount]);
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 240,
        }}
      >
        <Tabs defaultActiveKey="1" items={tabs} onChange={onChange} />
      </div>
    </div>
  );
};

export default Lesson;
