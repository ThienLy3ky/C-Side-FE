import { Button } from "@mui/material";
import React from "react";
import { authAPI } from "../../services/auth.api";
import { clearAccessTokenFromLS } from "../../utils/auth";

import { useNavigate, Navigate } from "react-router-dom";
export default function ListRoom() {
  return (
    <div>
      List Room
      <Button>Show room</Button>
    </div>
  );
}
