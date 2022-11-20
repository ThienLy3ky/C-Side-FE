import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Dashboard, HostAdmin, Login, ManagerAdmin } from "./pages";
import { RequireAuth } from "./components";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/dashboard"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route element={<RequireAuth />}>
          <Route path="/host/*" element={<HostAdmin />} />
          <Route path="/manager/*" element={<ManagerAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
