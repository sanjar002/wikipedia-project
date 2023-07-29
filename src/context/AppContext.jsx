import React, { useContext, useState } from "react";

const TabContext = React.createContext();

const { Provider } = TabContext;

const AppContext = ({ children }) => {
  const [tabCount, setTabCount] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const value = {
    tabCount,
    setTabCount,
    setActiveTab,
    activeTab
  };

  return <Provider value={value}>{children}</Provider>;
};

export default AppContext;

export function useAppContext() {
  return useContext(TabContext);
}
