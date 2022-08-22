import Nav from "../components/Nav/Nav";
import MySwiper from "../components/Swiper/Swiper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import React from "react";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Join from "../components/Join/Join";
import { ImgMaskCard, ImgMasTowkCard } from "../components/Cards/ImgCard";
import { CardMaskStyle, TitleMaskStyle } from "../components/Cards/Style";
import Img1 from "../Assets/mask2.png";
import Img2 from "../Assets/mask 3.png";
const StyledTypography = styled(Typography)`
  font-family: "Inter", sans-serif;
`;

const ParagraphTypography = styled(Typography)`
  font-family: "Inter", sans-serif;
  color: #8c8c8c;
  line-height: 25px;
  padding-left: 35px;
  /* word-wrap: break-word; */
  width: 85%;
`;

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  // "&:not(:last-child)": {
  //   borderBottom: 0,
  // },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={""} {...props} />
))(({ theme }) => ({
  // backgroundColor:
  //   theme.palette.mode === "dark"
  //     ? "rgba(255, 255, 255, .05)"
  //     : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    // transform: "rotate(90deg)",
    color: "#D1094B",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  // padding: theme.spacing(2),
  // borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const Product = () => {
  const [expanded, setExpanded] = React.useState<string | false>("");
  const [MyColor, setMyColor] = useState("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
      setMyColor(newExpanded ? "#D1094B" : "#000F08");
    };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          margin: "auto",
          padding: "0",
          fontFamily: "'Inter', sans-serif",
          fontSize: "1rem",
          color: "#8C8C8C",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "95%",
        }}
      >
        <Nav black NoOfItems={2} />

        <Box>Shop / Shirts / Skeleton Hand Shirt</Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "550px",
            width: "100%",
            gap: "20px",
          }}
        >
          <Box sx={{ width: "60%" }}>
            <MySwiper />
          </Box>
          <Box sx={{ display: "flex", width: "35%" }}>
            <ProductDetails
              Name="SKELETON HAND SHIRT"
              Colors={[
                "#DFDED9",
                "#FF6E61",
                "#FFBC00",
                "#293688",
                "#9747FF",
                "#D1094B",
                "#000F08",
                "#3A3A3A",
                "#334ADF",
                "#FFA7A7",
                "#1AC20C",
              ]}
              Price="24.59"
              Sizes={["S", "M", "L", "XL"]}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "30%",
            }}
          >
            <div>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  expandIcon={
                    expanded === "panel1" ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon sx={{ color: "#000F08" }} />
                    )
                  }
                >
                  <StyledTypography
                    sx={{ color: expanded === "panel1" ? MyColor : "" }}
                  >
                    PRODUCT DESCRIPTION
                  </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <ParagraphTypography>
                    Saints are a low-waist, drop crotch relaxed boyfriend jean.
                    Straight fit across the hips, bow shape legs, with knee
                    darts and tapered leg. Back pockets dropped slightly for
                    slouch feel.
                  </ParagraphTypography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                  expandIcon={
                    expanded === "panel2" ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon sx={{ color: "#000F08" }} />
                    )
                  }
                >
                  <StyledTypography
                    sx={{ color: expanded === "panel2" ? MyColor : "" }}
                  >
                    SHIPPING & RETURNS
                  </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <ParagraphTypography>
                    Saints are a low-waist, drop crotch relaxed boyfriend jean.
                    Straight fit across the hips, bow shape legs, with knee
                    darts and tapered leg. Back pockets dropped slightly for
                    slouch feel.
                  </ParagraphTypography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                  expandIcon={
                    expanded === "panel3" ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon sx={{ color: "#000F08" }} />
                    )
                  }
                >
                  <StyledTypography
                    sx={{ color: expanded === "panel3" ? MyColor : "" }}
                  >
                    FABRIC COMPOSITION
                  </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <ParagraphTypography>
                    Saints are a low-waist, drop crotch relaxed boyfriend jean.
                    Straight fit across the hips, bow shape legs, with knee
                    darts and tapered leg. Back pockets dropped slightly for
                    slouch feel.
                  </ParagraphTypography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "30%",
            }}
          >
            <div>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  aria-controls="panel4d-content"
                  id="panel4d-header"
                  expandIcon={
                    expanded === "panel4" ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon sx={{ color: "#000F08" }} />
                    )
                  }
                >
                  <StyledTypography
                    sx={{ color: expanded === "panel4" ? MyColor : "" }}
                  >
                    COLORS DESCRIPTION
                  </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <ParagraphTypography>
                    Saints are a low-waist, drop crotch relaxed boyfriend jean.
                    Straight fit across the hips, bow shape legs, with knee
                    darts and tapered leg. Back pockets dropped slightly for
                    slouch feel.
                  </ParagraphTypography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  aria-controls="panel5d-content"
                  id="panel5d-header"
                  expandIcon={
                    expanded === "panel5" ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon sx={{ color: "#000F08" }} />
                    )
                  }
                >
                  <StyledTypography
                    sx={{ color: expanded === "panel5" ? MyColor : "" }}
                  >
                    PAYMENTS
                  </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <ParagraphTypography>
                    Saints are a low-waist, drop crotch relaxed boyfriend jean.
                    Straight fit across the hips, bow shape legs, with knee
                    darts and tapered leg. Back pockets dropped slightly for
                    slouch feel.
                  </ParagraphTypography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  aria-controls="panel6d-content"
                  id="panel6d-header"
                  expandIcon={
                    expanded === "panel6" ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon sx={{ color: "#000F08" }} />
                    )
                  }
                >
                  <StyledTypography
                    sx={{ color: expanded === "panel6" ? MyColor : "" }}
                  >
                    COMPANY POLICIES
                  </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <ParagraphTypography>
                    Saints are a low-waist, drop crotch relaxed boyfriend jean.
                    Straight fit across the hips, bow shape legs, with knee
                    darts and tapered leg. Back pockets dropped slightly for
                    slouch feel.
                  </ParagraphTypography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "30%",
            }}
          >
            <div>
              <Accordion
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
              >
                <AccordionSummary
                  aria-controls="panel7d-content"
                  id="panel7d-header"
                  expandIcon={
                    expanded === "panel7" ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon sx={{ color: "#000F08" }} />
                    )
                  }
                >
                  <StyledTypography
                    sx={{ color: expanded === "panel7" ? MyColor : "" }}
                  >
                    OTHERS
                  </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <ParagraphTypography>
                    Saints are a low-waist, drop crotch relaxed boyfriend jean.
                    Straight fit across the hips, bow shape legs, with knee
                    darts and tapered leg. Back pockets dropped slightly for
                    slouch feel.
                  </ParagraphTypography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel8"}
                onChange={handleChange("panel8")}
              >
                <AccordionSummary
                  aria-controls="panel8d-content"
                  id="panel8d-header"
                  expandIcon={
                    expanded === "panel8" ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon sx={{ color: "#000F08" }} />
                    )
                  }
                >
                  <StyledTypography
                    sx={{ color: expanded === "panel8" ? MyColor : "" }}
                  >
                    ShoOp
                  </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <ParagraphTypography>
                    Saints are a low-waist, drop crotch relaxed boyfriend jean.
                    Straight fit across the hips, bow shape legs, with knee
                    darts and tapered leg. Back pockets dropped slightly for
                    slouch feel.
                  </ParagraphTypography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel9"}
                onChange={handleChange("panel9")}
              >
                <AccordionSummary
                  aria-controls="panel9d-content"
                  id="panel9d-header"
                  expandIcon={
                    expanded === "panel9" ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon sx={{ color: "#000F08" }} />
                    )
                  }
                >
                  <StyledTypography
                    sx={{ color: expanded === "panel9" ? MyColor : "" }}
                  >
                    REFUND
                  </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <ParagraphTypography>
                    Saints are a low-waist, drop crotch relaxed boyfriend jean.
                    Straight fit across the hips, bow shape legs, with knee
                    darts and tapered leg. Back pockets dropped slightly for
                    slouch feel.
                  </ParagraphTypography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "450px",
            width: "85%",
            gap: "20px",
            justifyContent: "end",
            div: {
              // width: "15%",
            },
            img: {
              height: "100%",
              width: "100%",
              objectFit: "cover",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <Typography
              sx={{
                color: "#000F08",
                fontFamily: "'Inter', sans-serif",
                fontSize: "2rem",
                fontWeight: "600",
                width: "70%",
                letterSpacing: "1px",
              }}
            >
              Complete the look
            </Typography>
          </Box>
          <Box
            sx={{
              boxSizing: "border-box",
              borderRadius: "0 0 0 14px",
              position: "relative",
              "&::before": {
                content: "''",
                position: "absolute",
                borderLeft: "6px #D1094B solid",
                borderBottom: "6px #D1094B solid",
                top: "20%",
                left: "-7px",
                height: "80%",
                borderRadius: "0 0 0 14px",
                width: "70%",
              },
            }}
          >
            <img
              src={Img1}
              alt=""
              style={{
                boxSizing: "border-box",
                borderRadius: "0 0 0 14px",
                border: "12px solid #fff",
              }}
            ></img>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img src={Img2} alt="" style={{ height: "80%" }} />
          </Box>
        </Box>
        <TitleMaskStyle>YOU MAY ALSO LIKE</TitleMaskStyle>
        <CardMaskStyle>
          <ImgMaskCard /> <ImgMasTowkCard /> <ImgMasTowkCard />{" "}
          <ImgMasTowkCard />
        </CardMaskStyle>
        <Join />
        <Footer />
      </Container>
    </>
  );
};