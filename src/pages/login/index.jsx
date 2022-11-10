import React from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Login() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChangeValue = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const TabsContainer = styled(Box)(({ theme }) => ({
    width: 400,
    "& .MuiButtonBase-root": {
      width: "50%",
      minHeight: "50px",
      padding: "10px 15px",
      textTransform: "capitalize",
      color: theme.palette.grey[700],
    },
  }));
  return (
    <Box>
      {/* <TabsContainer sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label="Email"
            icon={<FontAwesomeIcon icon={faEnvelope} />}
            iconPosition="start"
            // width="50%"
          />
          <Tab
            label="Phone Number"
            icon={<FontAwesomeIcon icon={faPhone} />}
            iconPosition="start"
            // width="50%"
          />
        </Tabs>
      </TabsContainer>
      <TabPanel value={value} index={0}>
        <Box>
          <TextField
            id="outlined-required"
            label="Email address"
            placeholder="Type your email address"
            focused
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChangeValue("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel> */}
    </Box>
  );
}
