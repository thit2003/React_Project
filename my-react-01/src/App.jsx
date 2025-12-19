import "./App.css";

import Greetings from "./components/Greetings";
import User from "./components/User";

function App() {
  return (
    <div className="card">
       <Greetings message="" />{" "}
       <User name={"THIT LWIN WIN THANT\n6540122"} />
    </div>
  );
}

export default App;
