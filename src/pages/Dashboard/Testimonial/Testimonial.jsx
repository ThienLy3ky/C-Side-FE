import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TestimonialImage } from "../../../assets/images";
export default function Testimonial() {
  const TestimonialGallery = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridGap: "30px 32px",
    maxHeight: "590px",
    margin: "20px 0 100px",
  }));
  const TestimonialGalleryItem = styled(Box)(({ theme }) => ({
    position: "relative",
    "&:first-child": {
      gridColumn: "1 / 3",
      gridRow: "1 / 3",
      height: "590px",
    },
    "&:nth-child(2)": {
      gridColumn: "3 / 4",
      gridRow: "1 / 3",
      height: "590px",
    },
    "&:nth-child(3)": {
      gridColumn: "4 / 6",
      gridRow: "1 / 2",
      height: "280px",
    },
    "&:last-child": {
      gridColumn: "4/ 6",
      gridRow: "2 / 3",
      height: "280px",
    },
    "& img": {
      objectFit: "cover",
      borderRadius: "20px",
    },
  }));
  return (
    <TestimonialGallery>
      <TestimonialGalleryItem>
        <img
          src={TestimonialImage}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "325px",
            height: "169px",
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "20px",
            left: "50%",
            top: "100%",
            transform: "translate(-50%, -50%)",
            backdropFilter: "blur(80px)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "62px",
              height: "62px",
              borderRadius: "20px",
              left: "50%",
              top: "0%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                color: "red",
                fontSize: "1.5rem",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="pa400" color="grey.A300">
              I’ve spent a wonderful time here. Will come back for sure next
              year together with my family and friends.
            </Typography>
          </Box>
        </Box>
      </TestimonialGalleryItem>
      <TestimonialGalleryItem>
        <img
          src={TestimonialImage}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </TestimonialGalleryItem>
      <TestimonialGalleryItem>
        <img
          src={TestimonialImage}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </TestimonialGalleryItem>
      <TestimonialGalleryItem>
        <img
          src={TestimonialImage}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </TestimonialGalleryItem>
    </TestimonialGallery>
  );
}
