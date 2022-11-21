import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Login, Homepage } from "./pages";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/homepage"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
