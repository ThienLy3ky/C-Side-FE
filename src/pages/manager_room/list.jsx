import React from "react";
import BasicCard from "../../components/card/card";
import { roomAPI } from "../../services/room.api";
import { Button } from "@mui/material";
import SimpleSnackbar from "../../components/snackbars";
export default function ListRoom(props) {
  const [snackOpen, setsnackOpen] = React.useState(false);
  const [masage, setmasage] = React.useState("");
  const remove = async (roomId) => {
    const isDelete = await roomAPI.Remove(roomId);
    window.location.reload(false);
  };
  return (
    <div>
      {props?.data?.map((room, index) => (
        <div style={{ width: "40%" }} key={index}>
          <BasicCard
            title={room?.name}
            inTitle={room?.address}
            underTitle={room?.status}
            content={room?.description}
            buttont={room?.rating.toString()}
          />

          <Button
            onClick={() => {
              remove(room.roomId);
            }}
          >
            Remove
          </Button>
          <Button id={room.roomId} onClick={props.editRoom}>
            Detail
          </Button>
        </div>
      ))}
      <SimpleSnackbar open={snackOpen} text={masage} />
    </div>
  );
}
