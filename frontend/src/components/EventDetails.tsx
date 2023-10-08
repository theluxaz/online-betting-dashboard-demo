import * as React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Hidden,
} from "@mui/material/";
import { Event, ChosenBet } from "../static/types";
import Title from "./Title";

interface DetailsProps {
  event: Event;
  chooseBet: (chosenBet: ChosenBet) => void;
}

const RenderOddsButton: React.FC<{
  odds: number;
  oddsName: string;
  event: Event;
  chooseBet: (chosenBet: ChosenBet) => void;
  isSelected: boolean;
}> = ({ odds, oddsName, event, chooseBet, isSelected }) => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Typography variant="h6" gutterBottom align="center">
      {odds}
    </Typography>
    <Button
      variant={isSelected ? "outlined" : "contained"}
      sx={{ height: 37 }}
      onClick={() =>
        chooseBet({
          event_id: event.id,
          outcome_name: oddsName,
          odds,
        })
      }
    >
      {oddsName}
    </Button>
  </Box>
);

const EventDetails: React.FC<DetailsProps> = ({ event, chooseBet }) => {
  const [selectedOddsName, setSelectedOddsName] = React.useState<string | null>(
    null
  );
  const scoreDisplay =
    event.status === "Live"
      ? `${event.odds_a_name} ${event.score_a} : ${event.odds_b_name} ${event.score_b}`
      : "TBA";

  React.useEffect(() => {
    setSelectedOddsName(null);
  }, [event]);

  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <Title>{event.name}</Title>
        <Typography>{event.date}</Typography>
        <Box display="flex" alignItems="center" my={2}>
          <Hidden smDown>{event.status} Match</Hidden>
          <Hidden smUp>
            <Typography color="text.secondary" mr={1}>
              Score:
            </Typography>
            <Typography variant="h6">{scoreDisplay}</Typography>
          </Hidden>
        </Box>
        <Box
          display="flex"
          gap={2}
          mb={2}
          alignItems="center"
          justifyContent="center"
        >
          <Hidden smDown>Odds:</Hidden>
          <RenderOddsButton
            odds={event.odds_a}
            oddsName={event.odds_a_name}
            event={event}
            chooseBet={(chosenBet) => {
              chooseBet(chosenBet);
              setSelectedOddsName(chosenBet.outcome_name);
            }}
            isSelected={selectedOddsName === event.odds_a_name}
          />
          <RenderOddsButton
            odds={event.odds_b}
            oddsName={event.odds_b_name}
            event={event}
            chooseBet={(chosenBet) => {
              chooseBet(chosenBet);
              setSelectedOddsName(chosenBet.outcome_name);
            }}
            isSelected={selectedOddsName === event.odds_b_name}
          />
          {event.odds_c && (
            <RenderOddsButton
              odds={event.odds_c}
              oddsName={event.odds_c_name}
              event={event}
              chooseBet={(chosenBet) => {
                chooseBet(chosenBet);
                setSelectedOddsName(chosenBet.outcome_name);
              }}
              isSelected={selectedOddsName === event.odds_c_name}
            />
          )}
        </Box>
      </Box>
      <Hidden smDown>
        <Card sx={{ maxWidth: 345, width: 390 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={require(`../static/football.jpg`)}
            title="Football"
          />
          <CardContent>
            <Box display="flex" alignItems="center">
              <Typography color="text.secondary" mr={1}>
                Score:
              </Typography>
              <Typography variant="h6">{scoreDisplay}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Hidden>
    </Box>
  );
};
export default EventDetails;
