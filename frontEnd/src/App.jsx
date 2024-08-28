import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            {/* <Route path="" index element={<Home />}></Route> */}
            <Route path="profile" index element={<Profile />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
