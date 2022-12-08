import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { roomAPI } from "../../services/room.api";
import SimpleSnackbar from "../../components/snackbars";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiY3NpZGUiLCJhIjoiY2xhYTBrMXIwMDF4bzNwcDExMDdmNG10ZCJ9.dJ8utYc12qEivXTKawbZxg";
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

export default function EditModal(props) {
  const [open, setOpen] = React.useState(false);
  const [snackOpen, setsnackOpen] = React.useState(false);
  const [masage, setmasage] = React.useState("");
  const [name, setname] = React.useState("");
  const [address, setaddress] = React.useState("");
  const [capacity, setcapacity] = React.useState(0);
  const [price, setprice] = React.useState(0);
  const [lng, setlng] = React.useState(-70.9);
  const [lat, setlat] = React.useState(42.35);
  const [status, setstatus] = React.useState("false");
  const [description, setdescription] = React.useState("");
  const [image, setimage] = React.useState("");
  const [rating, setrating] = React.useState(0);
  const mapContainer = React.useRef(null);
  const map = React.useRef(null);
  const [zoom, setZoom] = React.useState(9);
  React.useEffect(() => {
    setOpen(props.show);
    setname(props?.data?.name);
    setaddress(props?.data?.address);
    setcapacity(props?.data?.capacity);
    setprice(props?.data?.price);
    if (props.data?.location) {
      setlng(parseInt(props.data?.location?.y));
      setlat(parseInt(props?.data?.location?.x));
    }
    setstatus(props?.data?.status);
    setdescription(props?.data?.description);
    setimage(props?.data?.image);
    setrating(props?.data?.rating);
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  }, [props, props?.data]);

  const handleClose = () => {
    setOpen(false);
  };
  const EditRoom = async () => {
    if (
      name !== "" &&
      address !== "" &&
      lng &&
      lat &&
      status !== "" &&
      image !== "" &&
      rating &&
      props?.data?.roomId
    ) {
      const newRoom = await roomAPI.edit(props?.data?.roomId, {
        name,
        address,
        capacity,
        price,
        status,
        description,
        image,
        rating,
        location: { lng, lat },
        is_active: true,
      });
      setsnackOpen(true);
      if (newRoom ? true : false) {
        setmasage(" Create success");
        setOpen(!open);
        window.location.reload(false);
      } else {
        setmasage("create fails");
      }
    } else {
      setsnackOpen(true);
      setmasage(" Check data again");
    }
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={props.onClose}
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
      >
        <Box sx={{ ...style, width: "50%" }}>
          <h2 id="parent-modal-title">Edit Room </h2>
          <TextField
            className="col-12"
            style={{ width: "100%", marginTop: "10px" }}
            label="Name"
            defaultValue={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            variant="outlined"
          />
          <TextField
            className="col-12"
            style={{ width: "100%", marginTop: "10px" }}
            label="address"
            defaultValue={address}
            onChange={(e) => {
              setaddress(e.target.value);
            }}
            variant="outlined"
          />
          <TextField
            className="col-12"
            type="number"
            defaultValue={capacity}
            style={{ width: "100%", marginTop: "10px" }}
            label="capacity"
            onChange={(e) => {
              setcapacity(parseInt(e.target.value));
            }}
            variant="outlined"
          />
          <TextField
            className="col-12"
            type="number"
            defaultValue={price}
            style={{ width: "100%", marginTop: "10px" }}
            label="price"
            onChange={(e) => {
              setprice(parseInt(e.target.value));
            }}
            variant="outlined"
          />
          <TextField
            className="col-12"
            type="number"
            defaultValue={lng}
            style={{ width: "50%", marginTop: "10px" }}
            label="Longtitude"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className="col-12"
            type="number"
            defaultValue={lat}
            style={{ width: "50%", marginTop: "10px" }}
            label="Latitude"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className="col-12"
            defaultValue={description}
            style={{ width: "100%", marginTop: "10px" }}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
            label="description"
            variant="outlined"
          />
          <TextField
            className="col-12"
            defaultValue={image}
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
            defaultValue={rating}
            onChange={(e) => {
              setrating(parseInt(e.target.value));
            }}
            style={{ width: "100%", marginTop: "10px" }}
            label="rating"
            variant="outlined"
          />
          <TextField
            className="col-12"
            select
            defaultValue={status}
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

          <Button onClick={EditRoom}>Save</Button>
        </Box>
      </Modal>
      <div
        style={
          open
            ? { display: "none", height: "400px", width: "400px" }
            : { height: "400px", width: "400px" }
        }
        ref={mapContainer}
      />
      <SimpleSnackbar open={snackOpen} text={masage} />
    </div>
  );
}
