import { useContext } from "react";
import { AppContext } from "../context/app.context";
const useAuth = () => {
  return useContext(AppContext);
};
export default useAuth;
