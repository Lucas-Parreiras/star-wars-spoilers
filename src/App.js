import { useEffect } from "react";
import MainPage from "./pages/MainPage";
import dataContext from "./hooks/dataContext";
import fetchAPI from "./helpers/APIHandler";

function App() {
  useEffect(() => {
    const planetData = fetchAPI();
    console.log(planetData);
  }, [])

  return (
    <dataContext.Provider>
      <div>
        <MainPage />
      </div>
    </dataContext.Provider>
  );
}

export default App;
