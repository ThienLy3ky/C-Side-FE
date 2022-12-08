import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { RequireAuth } from "./components";
import {
  Dashboard,
  HostAdmin,
  Login,
  ManagerAdmin,
  Signup,
  ManagerRoom,
} from "./pages";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/dashboard"} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/managerroom" element={<ManagerRoom />} />
        <Route element={<RequireAuth />}>
          <Route path="/host/*" element={<HostAdmin />} />
          <Route path="/manager/*" element={<ManagerAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
