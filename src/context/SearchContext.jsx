import { createContext, useContext, useState } from "react";

const SearchContext = createContext();
function AppProvider({ children }) {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  return (
    <SearchContext.Provider
      value={{ searchIsOpen, setSearchIsOpen, keyword, setKeyword }}
    >
      {children}
    </SearchContext.Provider>
  );
}
export function useGlobalContext() {
  const context = useContext(SearchContext);
  return context;
}
export { SearchContext, AppProvider };
