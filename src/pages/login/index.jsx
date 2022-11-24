import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { FaIcon } from "../../components";
import useAuth from "../../hooks/useAuth";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ padding: "30px 24px 24px" }}>{children}</Box>
      )}
    </div>
  );
}

const isValidEmail = (email) => {
  return (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [value, setValue] = React.useState(0);
  const [isShowPassword, setIsShowpPassword] = useState(true);

  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  };
  
  const handleClickShowPassword = () => {
    setIsShowpPassword(!isShowPassword);
  };

  const makeStyleIcon = {
    textTransform: "capitalize",
    width: "50%",
    minHeight: "30px",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
  };
  const IconCircle = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.grey[100],
    padding: "10px",
    borderRadius: "50%",
    marginRight: "10px !important",
  }));
  const LoginHeader = styled(Box)(({ theme }) => ({
    textAlign: "center",
    padding: "20px 20px 5px",
    fontWeight: "bold",
  }));

  return (
    <Paper
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "375px",
        backgroundColor: "white",
      }}
      elevation={4}
    >
      <LoginHeader>
        <Typography variant="h4">Login</Typography>
      </LoginHeader>
      <Tabs
        value={value}
        textColor="primary"
        indicatorColor="primary"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
        <Tab
          label="Email"
          sx={makeStyleIcon}
          icon={
            <IconCircle>
              <FaIcon icon={faEnvelope} size="0.8rem" />
            </IconCircle>
          }
          iconPosition="start"
        />
        <Tab
          label="Phone Number"
          sx={makeStyleIcon}
          icon={
            <IconCircle>
              <FaIcon icon={faPhone} size="0.8rem" />
            </IconCircle>
          }
          iconPosition="start"
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box>
          <TextField 
            label="Email address" 
            variant="outlined"
            name="email"
            error={isValidEmail(email)}
            value={email}
            onChange={handleEmailChange}
            fullWidth
          />
          <TextField
            fullWidth
            name="password"
            type={isShowPassword ? "password" : "text"}
            value={password}
            onChange={handlePasswordChange}
            sx={{ width: "100%", marginTop: "15px" }}
            label="Password"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={handleClickShowPassword}>
                    <FaIcon
                      icon={isShowPassword ? faEyeSlash : faEye}
                      style={{
                        backgroundColor: "#d8dae4",
                        padding: "7px",
                        borderRadius: "50%",
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Link
            variant="pa200"
            underline="none"
            sx={{ display: "flex", justifyContent: "flex-end", mt: "25px" }}
          >
            Forgot password?
          </Link>
          <Stack direction="column" alignItems="center" sx={{ mt: "25px" }}>
            <Box>
              <Typography variant="pa200">
                By signing in,I agree to Bindle
              </Typography>{" "}
              <Link variant="pa200" underline="none">
                Terms of Use
              </Link>
            </Box>
            <Box>
              <Typography variant="pa200">and</Typography>{" "}
              <Link variant="pa200" underline="none">
                Privacy Policy
              </Link>
            </Box>
          </Stack>
          <Button
            sx={{
              textTransform: "capitalize",
              padding: "15px 0",
              fontSize: "16px",
              mt: "30px",
            }}
            variant="contained"
            fullWidth
            onClick={handleLogin}
          >
            Sign in
          </Button>
          <Stack
            direction="column"
            alignItems="center"
            sx={{ padding: "25px" }}
          >
            <Box>
              <Typography variant="pa200">No account yet?</Typography>{" "}
              <Link variant="pa200" underline="none">
                Create account
              </Link>
            </Box>
          </Stack>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Item Two */}
        <Box sx={{ minHeight: "410px" }}></Box>
      </TabPanel>
    </Paper>
  );
}
