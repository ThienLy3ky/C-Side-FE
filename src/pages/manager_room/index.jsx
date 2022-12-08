import { Button } from "@mui/material";
import React from "react";
import CreateModal from "./create";
import ListRoom from "./list";
import EditModal from "./edit";
import { roomAPI } from "../../services/room.api";
import { useNavigate, Navigate } from "react-router-dom";
export default function ManagerRoom() {
  const [modelCreateRoom, setModelCreateRoom] = React.useState(false);
  const [modelEditRoom, setModelEditRoom] = React.useState(false);
  const [rooms, setRooms] = React.useState([]);
  const [room, setRoom] = React.useState([]);
  React.useEffect(() => {
    getRooms();
  }, []);
  const getRooms = async () => {
    const room = await roomAPI.getAll(25, 0);
    setRooms(room.data);
  };
  const getRoom = async (e) => {
    const room = await roomAPI.getDetail(e.target.id);
    setRoom(room?.data?.response);
    setModelEditRoom(!modelEditRoom);
  };
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
      <h4>Total:{rooms.count}</h4>
      <ListRoom data={rooms?.response?.data} editRoom={getRoom} />
      <CreateModal
        show={modelCreateRoom}
        onClose={() => {
          setModelCreateRoom(!modelCreateRoom);
        }}
      />
      <EditModal
        show={modelEditRoom}
        data={room}
        onClose={() => {
          setModelEditRoom(!modelEditRoom);
        }}
      />
    </div>
  );
}
