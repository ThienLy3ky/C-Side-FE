import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Login } from "./pages";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
