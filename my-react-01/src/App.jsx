import "./App.css";

import Greetings from "./components/Greetings";
import User from "./components/User";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="card">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Greetings message="" />
              <User name={"THIT LWIN WIN THANT\n6540122"} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
