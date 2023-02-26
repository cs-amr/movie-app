import { createContext, useContext, useState } from "react";

const AppContext = createContext();
function AppProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <AppContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </AppContext.Provider>
  );
}
export function useGlobalContext() {
  const context = useContext(AppContext);
  return context;
}
export { AppContext, AppProvider };
