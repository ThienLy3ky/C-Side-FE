import { Button } from "@mui/material";
import React from "react";
import { authAPI } from "../../services/auth.api";
import { clearAccessTokenFromLS } from "../../utils/auth";
import CreateModal from "./create";
import { useNavigate, Navigate } from "react-router-dom";
export default function ManagerRoom() {
  const [modelCreateRoom, setModelCreateRoom] = React.useState(false);
  return (
    <div>
      List Room
      <Button
        onClick={() => {
          setModelCreateRoom(!modelCreateRoom);
        }}
      >
        Create room
      </Button>
      <Button>Deleted room</Button>
      <CreateModal show={modelCreateRoom} />
    </div>
  );
}
