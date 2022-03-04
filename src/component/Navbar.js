import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import WorkIcon from "@mui/icons-material/Work";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupIcon from "@mui/icons-material/Group";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import logo from "../assets/img/logo.jpg";
import "../assets/css/Style.css";
// import { useTheme } from "@emotion/react";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paperRoot: {
    background: "#333 !important",
    color: "#ada2a2 !important",
    fontSize: "16px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    textAlign: "left",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  listItem: {
    color: "#fff",
    marginBottom: "10px",
    fontSize: "17px",
    letterSpacing: "1px",
    "& svg": {
      color: "#fff",
    },
    "&:hover": {
      color: "#99ca3b",
      backgroundColor: "#000",
      fontWeight: "bold",
      letterSpacing: "1px",
      fontSize: "17px",
      borderLeft: "3px solid #99ca3b",
      cursor: "pointer",
      marginBottom: "10px",
      "& svg": {
        color: "#99ca3b",
        transform: "scale(1.5)",
      },
    },
  },

  iconColor: {
    color: "#000",
    transition: "transform .2s",
    marginLeft: "10px",
  },
  active: {
    color: "#99ca3b",
    backgroundColor: "#000",
    fontWeight: "bold",
    letterSpacing: "1px",
    fontSize: "17px",
    borderLeft: "3px solid #99ca3b",
    cursor: "pointer",
    marginBottom: "10px",
    "& svg": {
      color: "#99ca3b",
      transform: "scale(1.5)",
    },
  },
  search: {
    position: "relative",
    borderRadius: "25px",
    padding: "0 10px",
    border: "1px solid #fed201",

    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(5),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 0),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },

  grow: {
    flexGrow: 1,
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  bgheader: {
    backgroundColor: "#fff",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // marginLeft: drawerWidth,
    width: `calc(100%)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const sidebarList = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Jobs",
    icon: <WorkIcon />,
  },
  {
    name: " Applications",
    icon: <DescriptionIcon />,
  },
  {
    name: "Followers",
    icon: <GroupIcon />,
  },

  {
    name: "Company Profile",
    icon: <ApartmentIcon />,
  },
  {
    name: "All Users",
    icon: <GroupAddIcon />,
  },

  {
    name: "My Account",
    icon: <PersonAddAltIcon />,
  },
];

export default function Navbar({ children }) {
  const classes = useStyles();
  // const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  const handleClick = (e) => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className={classes.bgApp}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            <img
              src={logo}
              alt="logo"
              style={{ width: "200px", marginRight: "20px" }}
            />
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            <ul className="ListStyle">
              <li>Dashboard</li>
              <li>Packages</li>
              <li>Events</li>
              <li>Blogs</li>
            </ul>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        className={classes.root}
        classes={{
          paper: classes.paperRoot,
        }}
      >
        <DrawerHeader></DrawerHeader>

        <List>
          {sidebarList.map((item, index) => {
            return (
              <>
                {/* <Link to={"/"+item.id} className="ResumeLink" key={item.id}> */}
                <ListItem
                  onClick={handleClick}
                  className={`${classes.listItem} ${
                    index === 6 ? classes.active : ""
                  } `}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Typography variant="inherit">{item.name}</Typography>
                </ListItem>
              </>
            );
          })}
        </List>
      </Drawer>
      {children}
    </Box>
  );
}
