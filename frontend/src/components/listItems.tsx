import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material/";
import {
  Casino,
  SportsFootball,
  SportsSoccer,
  Settings,
  PriceChange,
} from "@mui/icons-material/";
import DashboardIcon from "@mui/icons-material/Dashboard";

interface ListItem {
  icon: JSX.Element;
  text: string;
}

const mainItems: ListItem[] = [
  { icon: <DashboardIcon />, text: "Dashboard" },
  { icon: <PriceChange />, text: "Betting History" },
  { icon: <SportsFootball />, text: "Sports Betting" },
  { icon: <Casino />, text: "Casino" },
  { icon: <Settings />, text: "Account Settings" },
];

const secondaryItems: ListItem[] = [
  { icon: <SportsSoccer />, text: "Football" },
  { icon: <SportsFootball />, text: "Rugby" },
  { icon: <Casino />, text: "Roulette" },
];

const createListItems = (items: ListItem[]): JSX.Element[] =>
  items.map((item, index) => (
    <ListItemButton key={index}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItemButton>
  ));

export const mainListItems = <div>{createListItems(mainItems)}</div>;

export const secondaryListItems = (
  <div>
    <ListSubheader component="div" inset>
      Recently Played
    </ListSubheader>
    {createListItems(secondaryItems)}
  </div>
);
