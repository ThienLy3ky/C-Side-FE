import {
  Toolbar,
  FormControl,
  InputLabel,
  Button,
  Select,
  MenuItem,
  Card,
  CardMedia,
  CardContent,
  Typography
} from "@mui/material";
import React from "react";

export default function Homepage() {
  return (
    <React.Fragment>
      <h1>Homepage</h1>
      <Toolbar>
        <FormControl fullWidth>
          <InputLabel id="select-province">Location</InputLabel>
          <Select 
            name="province"
            defaultValue=''
            labelId="select-province"
          >
            <MenuItem>
              Menu Item 1
            </MenuItem>
            <MenuItem>
              Menu Item 2
            </MenuItem>
            <MenuItem>
              Menu Item 3
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="select-province">Date</InputLabel>
          <Select 
            name="province"
            defaultValue=''
            labelId="select-province"
          >
            <MenuItem>
              Menu Item 1
            </MenuItem>
            <MenuItem>
              Menu Item 2
            </MenuItem>
            <MenuItem>
              Menu Item 3
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="select-province">People</InputLabel>
          <Select 
            name="province"
            defaultValue=''
            labelId="select-province"
          >
            <MenuItem>
              Menu Item 1
            </MenuItem>
            <MenuItem>
              Menu Item 2
            </MenuItem>
            <MenuItem>
              Menu Item 3
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <Button>Explore Now</Button>
        </FormControl>
      </Toolbar>

      <h1>Nearby stays</h1>
      <Card sx={{ width: 312, height: 128 }}>
        <CardMedia
          variant="outlined"
          component="img"
          width="96"
          height="96"
          image="logo192.png"
          alt="green iguana"
        >
        </CardMedia>
        <CardContent>
          <Typography>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}