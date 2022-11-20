import {
  faBars,
  faGlobe,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Grid,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import React from "react";
import {
  City,
  DashBoardBg,
  Destination,
  Logo,
  RentalArea,
} from "../../assets/images";

export default function Dashboard() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const DashboardContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    color: "white",
  }));
  const Header = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "122px",
  }));
  const HeaderLeft = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    zIndex: 1,
  }));
  const HeaderRight = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    "& .MuiButtonBase-root": {
      marginLeft: "24px",
    },
    zIndex: 1,
  }));
  const DashboardOverview = styled(Box)(({ theme }) => ({
    position: "relative",
    padding: "35px 73px 255px",
    "&:before": {
      position: "absolute",
      content: "''",
      backgroundImage: `url(${DashBoardBg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: -1,
    },
  }));
  const WidgetOverView = styled(Box)(({ theme }) => ({
    maxWidth: 400,
    marginBottom: 32,
  }));
  const WidgetExplore = styled(Box)(({ theme }) => ({
    display: "flex",
    backgroundColor: "white",
    maxWidth: "774px",
    boxShadow: "0px 12px 14px rgba(67, 83, 138, 0.06)",
    borderRadius: "30px",
    padding: "15px 16px 18px 28px",
    justifyContent: "space-between",
  }));
  const NearByContainer = styled(Box)(({ theme }) => ({
    maxWidth: "1210px",
    padding: "72px 0 96px 0",
  }));
  const CardCity = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: "15px 17px 17px 29px",
    borderRadius: "20px",
    border: `1px solid ${theme.palette.grey.A400}`,
    backgroundColor: theme.palette.grey.A500,
    width: "312px",
  }));
  const ExploreMore = styled(Box)(({ theme }) => ({
    padding: "0 0 62px",
  }));
  const WidgetRentalArea = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
  }));
  const CardRentalArea = styled(Box)(({ theme }) => ({
    maxWidth: "280px",
  }));
  const PopularDestinations = styled(Box)(({ theme }) => ({
    padding: "39px",
    background: "#F6F6F6",
    borderRadius: "30px",
    marginBottom: "62px",
  }));
  const Destinations = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridGap: "30px 32px",
    maxHeight: "590px",
  }));
  const DestinationItem = styled(Box)(({ theme }) => ({
    "&:first-child": {
      gridColumn: "1 / 3",
      gridRow: "1 / 3",
      height: "590px",
    },
    "&:nth-child(2)": {
      gridColumn: "3 / 4",
      gridRow: "1 / 2",
      height: "280px",
    },
    "&:nth-child(3)": {
      gridColumn: "4 / 5",
      gridRow: "1 / 2",
      height: "280px",
    },
    "&:last-child": {
      gridColumn: "3/5",
      gridRow: "2/3",
      height: "280px",
    },
    "& img": {
      objectFit: "cover",
      borderRadius: "20px",
    },
  }));
  return (
    <DashboardContainer>
      <DashboardOverview>
        <Header>
          <HeaderLeft>
            <img src={Logo} alt="logo" />
            <Typography variant="h5" color="common.white">
              Bindle
            </Typography>
          </HeaderLeft>
          <HeaderRight>
            <Typography variant="pa200" color="common.white">
              Become a host
            </Typography>
            <Button
              variant="text"
              startIcon={
                <FontAwesomeIcon
                  icon={faGlobe}
                  style={{
                    color: "white",
                    fontWeight: 700,
                  }}
                />
              }
            >
              <Typography
                variant="pa400"
                color="common.white"
                sx={{ fontWeight: 700 }}
              >
                EN
              </Typography>
            </Button>
            <Button
              startIcon={
                <FontAwesomeIcon
                  icon={faBars}
                  style={{
                    color: "white",
                  }}
                />
              }
              variant="outlined"
              sx={{
                borderColor: "white",
                borderRadius: "35px",
              }}
            >
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </Button>
          </HeaderRight>
        </Header>
        <WidgetOverView>
          <Typography variant="h1" sx={{ mb: 2 }}>
            Discover New Destination
          </Typography>
          <Typography variant="pa400">
            This modern trend looks nice and all, but we fell into the same trap
            again.
          </Typography>
        </WidgetOverView>
        <WidgetExplore>
          <Box>
            <FormControl variant="standard" sx={{ minWidth: 140 }}>
              <InputLabel>Location</InputLabel>
              <Select value={age} onChange={handleChange} label="Location">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="pa300" component="p" color="grey.A200">
              Your destination
            </Typography>
          </Box>
          <Box sx={{}}>
            <FormControl variant="standard" sx={{ minWidth: 140 }}>
              <InputLabel>Date</InputLabel>
              <Select value={age} onChange={handleChange} label="Location">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="pa300" component="p" color="grey.A200">
              When does it start?
            </Typography>
          </Box>
          <Box sx={{}}>
            <FormControl variant="standard" sx={{ minWidth: 140 }}>
              <InputLabel>People</InputLabel>
              <Select value={age} onChange={handleChange} label="Location">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="pa300" component="p" color="grey.A200">
              How many people?{" "}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              padding: "24px 36px",
              maxHeight: "72px",
              borderRadius: "16px",
            }}
          >
            Explore New
          </Button>
        </WidgetExplore>
      </DashboardOverview>
      <Box sx={{ padding: "0px 73px" }}>
        <NearByContainer>
          <Typography
            variant="h3"
            color="grey.A300"
            sx={{ marginBottom: "8px" }}
          >
            Nearby stays
          </Typography>
          <Typography
            variant="pa400"
            color="grey.A200"
            sx={{ marginBottom: "54px" }}
            component="p"
          >
            Because you viewed vacation homes in this city
          </Typography>

          <Grid container spacing={4}>
            {Array(6)
              .fill()
              .map((item, idx) => (
                <Grid item xs={4} key={idx}>
                  <CardCity>
                    <img src={City} alt="city" />
                    <Box sx={{ ml: "16px" }}>
                      <Typography variant="h4" color="grey.A300">
                        Florida
                      </Typography>
                      <Typography variant="pa300" color="grey.A300">
                        156,786 properties
                      </Typography>
                    </Box>
                  </CardCity>
                </Grid>
              ))}
          </Grid>
        </NearByContainer>
        <ExploreMore>
          <Typography
            variant="h3"
            color="grey.A300"
            sx={{ textAlign: "center", marginBottom: "54px" }}
          >
            Explore more travel vacation rentals
          </Typography>
          <WidgetRentalArea>
            {Array(4)
              .fill()
              .map((_, idx) => {
                return (
                  <CardRentalArea key={idx}>
                    <img
                      src={RentalArea}
                      sx={{ width: "280px", height: "280px" }}
                    />
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="h5" color="grey.A300">
                        Entire homes
                      </Typography>
                      <Typography variant="pa400" color="grey.A200">
                        156,786 properties
                      </Typography>
                    </Box>
                  </CardRentalArea>
                );
              })}
          </WidgetRentalArea>
        </ExploreMore>
        <PopularDestinations>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "53px",
            }}
          >
            <Typography variant="h3" color="grey.A300">
              Popular Destinations
            </Typography>
            <Button
              variant="outlined"
              endIcon={<FontAwesomeIcon icon={faArrowRight} />}
            >
              Explore
            </Button>
          </Box>

          <Destinations>
            <DestinationItem>
              <img
                src={Destination}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </DestinationItem>
            <DestinationItem>
              <img
                src={Destination}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </DestinationItem>
            <DestinationItem>
              <img
                src={Destination}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </DestinationItem>
            <DestinationItem>
              <img
                src={Destination}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </DestinationItem>
          </Destinations>
        </PopularDestinations>
      </Box>
    </DashboardContainer>
  );
}
