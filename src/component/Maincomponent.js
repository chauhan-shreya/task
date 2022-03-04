import React from "react";
import {
  Grid,
  Box,
  Divider,
  Avatar,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  FormControl,
  Radio,
  Button,
  Paper,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import MyCard from "./MyCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  backGroundLight: {
    background: "#f8f8f8",
  },
  gapZero: {
    padding: 0,
    margin: 0,
    fontSize: "18px",
    fontWeight: "300",
  },
  textAlignCenter: {
    textAlign: "center",
  },
  padding: {
    padding: "1rem",
  },
  colorGray: {
    color: "grayText",
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Maincomponent() {
  const classes = useStyles();
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Paper sx={{ padding: "1rem" }} variant="outlined">
        <div style={{ display: "flex", marginBottom: "1rem" }}>
          <IconButton component="span">
            <ArrowBackIcon sx={{ color: "#99ca3b", marginTop: "-5px" }} />
          </IconButton>
          <h2
            className={`${classes.paddingLeft} ${classes.gapZero}`}
            style={{ fontSize: "22px" }}
          >
            My Account
          </h2>
        </div>
        <Divider />
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MyCard
              heading="My Profile"
              style={{ padding: "10px 0 !important" }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "1rem" }}>
                  <Avatar
                    sx={{
                      height: "150px",
                      width: "150px",
                      margin: "auto",
                      marginTop: "1rem",
                    }}
                    src="https://randomuser.me/api/portraits/women/90.jpg"
                  >
                    M
                  </Avatar>
                </div>
                <div>
                  <Grid item xs={12}>
                    <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
                      Divya Chatterjee
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h5 className={`${classes.gapZero} ${classes.colorGray}`}>
                      Designation
                    </h5>
                    <p style={{ margin: "0 0 10px 0" }}>
                      Assistant Manager - HR
                    </p>
                  </Grid>
                  <Grid item xs={12}>
                    <h5 className={`${classes.gapZero} ${classes.colorGray}`}>
                      Company
                    </h5>
                    <p style={{ margin: "0 0 10px 0" }}>XYZ Company</p>
                  </Grid>
                </div>
              </div>
              <Grid xs={12}>
                <h5 className={`${classes.gapZero} ${classes.colorGray}`}>
                  About Me
                </h5>
                <p>
                  Microsoft enables digital transformation for the era of an
                  intelligent cloud and an intelligent edge.Its mission is to
                  empower every person and every organization on the planet to
                  achive more. Microsoft set up its India operations in 1990.
                  Microsoft in India offers its global cloud services from local
                  data centers to accelerate digital transformation across
                  Indian start-ups, businesses, and government agencies.
                </p>
              </Grid>
            </MyCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MyCard heading="My Account Settings">
              <Grid container>
                <Grid item xs={6} mt={2}>
                  <h5 className={`${classes.gapZero} ${classes.colorGray}`}>
                    Full Name*
                  </h5>
                  <p style={{ margin: "0 0 10px 0", fontSize: "18px" }}>
                    Divya Chatterjee
                  </p>
                </Grid>
                <Grid item xs={6} mt={2}>
                  <h5 className={`${classes.gapZero} ${classes.colorGray}`}>
                    Designation
                  </h5>
                  <p style={{ margin: "0 0 10px 0", fontSize: "18px" }}>
                    Assistant Manager - HR
                  </p>
                </Grid>
                <Grid item xs={6} mt={2}>
                  <h5 className={`${classes.gapZero} ${classes.colorGray}`}>
                    Phone / Landline*
                  </h5>
                  <p style={{ margin: "0 0 10px 0", fontSize: "18px" }}>
                    9999999999
                  </p>
                </Grid>
                <Grid item xs={6} mt={2}>
                  <div>
                    <Button variant="text">
                      <p
                        style={{
                          color: "#1a76d2",
                          fontSize: "18px",
                          fontWeight: "bold",
                          textTransform: "capitalize",
                        }}
                      >
                        Change Password
                      </p>
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </MyCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MyCard heading="Application Settings">
              <Grid item xs={12}>
                <h5 className={`${classes.gapZero} ${classes.colorGray}`}>
                  Receive job applications via
                </h5>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="0"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="Only on my dashboard"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Email and on my dashboard"
                    />
                  </RadioGroup>
                </FormControl>
                <h5 className={`${classes.gapZero} ${classes.colorGray}`}>
                  *Please note, this setting will not impact your old job
                  pstings
                </h5>
              </Grid>
            </MyCard>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
