import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { roomAPI } from "../../services/room.api";
const currencies = [
  {
    value: "available",
    label: "Available",
  },
  {
    value: "full",
    label: "Full",
  },
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "maintain",
    label: "Maintain",
  },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function CreateModal(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setname] = React.useState("");
  const [address, setaddress] = React.useState("");
  const [capacity, setcapacity] = React.useState(0);
  const [price, setprice] = React.useState(0);
  const [lng, setlng] = React.useState(0);
  const [lat, setlat] = React.useState(0);
  const [status, setstatus] = React.useState("false");
  const [description, setdescription] = React.useState("");
  const [image, setimage] = React.useState("");
  const [rating, setrating] = React.useState(0);
  React.useEffect(() => {
    setOpen(props.show);
  }, [props]);
  const handleClose = () => {
    setOpen(false);
  };
  const CreateRoom = async () => {
    // const newRoom = await roomAPI.getAll({
    //   name,
    //   address,
    //   capacity,
    //   price,
    //   status,
    //   description,
    //   image,
    //   rating,
    //   location: { lng, lat },
    // });
    const newRoom = await roomAPI.getAll(20, 0);
    console.log(newRoom);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
      >
        <Box sx={{ ...style, width: "50%" }}>
          <h2 id="parent-modal-title">Create Room </h2>
          <TextField
            className="col-12"
            style={{ width: "100%", marginTop: "10px" }}
            label="Name"
            onChange={(e) => {
              setname(e.target.value);
            }}
            variant="outlined"
          />
          <TextField
            className="col-12"
            style={{ width: "100%", marginTop: "10px" }}
            label="address"
            onChange={(e) => {
              setaddress(e.target.value);
            }}
            variant="outlined"
          />
          <TextField
            className="col-12"
            type="number"
            style={{ width: "100%", marginTop: "10px" }}
            label="capacity"
            onChange={(e) => {
              setcapacity(e.target.value);
            }}
            variant="outlined"
          />
          <TextField
            className="col-12"
            type="number"
            style={{ width: "100%", marginTop: "10px" }}
            label="price"
            onChange={(e) => {
              setprice(e.target.value);
            }}
            variant="outlined"
          />
          <TextField
            className="col-12"
            type="number"
            onChange={(e) => {
              setlng(e.target.value);
            }}
            style={{ width: "50%", marginTop: "10px" }}
            label="Longtitude"
            variant="outlined"
          />
          <TextField
            className="col-12"
            type="number"
            onChange={(e) => {
              setlat(e.target.value);
            }}
            style={{ width: "50%", marginTop: "10px" }}
            label="Latitude"
            variant="outlined"
          />
          <TextField
            className="col-12"
            style={{ width: "100%", marginTop: "10px" }}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
            label="description"
            variant="outlined"
          />
          <TextField
            className="col-12"
            style={{ width: "100%", marginTop: "10px" }}
            label="image"
            onChange={(e) => {
              setimage(e.target.value);
            }}
            variant="outlined"
          />
          <TextField
            className="col-12"
            type="number"
            onChange={(e) => {
              setrating(e.target.value);
            }}
            style={{ width: "100%", marginTop: "10px" }}
            label="rating"
            variant="outlined"
          />
          <TextField
            className="col-12"
            select
            onChange={(e) => {
              setstatus(e.target.value);
            }}
            style={{ width: "100%", marginTop: "10px" }}
            label="Status"
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button onClick={CreateRoom}>Save</Button>
        </Box>
      </Modal>
    </div>
  );
}
