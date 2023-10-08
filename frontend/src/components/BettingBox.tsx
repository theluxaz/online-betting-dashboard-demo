import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
} from "@mui/material/";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { UserData, ChosenBet, FinalBet } from "../static/types";
import Title from "./Title";


interface Props {
  userData: UserData;
  chosenBet: ChosenBet | undefined;
  chooseFinalBet: (finalBet: FinalBet) => void;
}

const BettingBox: React.FC<Props> = ({
  userData,
  chosenBet,
  chooseFinalBet,
}) => {
  const [stake, setStake] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value) || 0;
    setStake(value);
    setError(value > userData.balance);
  };

  const handleMaxBet = () => {
    setStake(userData.balance);
    setError(false);
  };

  const potentialWinnings = (
    chosenBet ? chosenBet.odds * stake : stake
  ).toFixed(2);
  const balance = userData.balance.toFixed(2);

  return (
    <React.Fragment>
      <Title>Potential Winnings</Title>
      <Box display="flex" flexDirection="column">
        <Box mt={0} mb={1}>
          <Typography component="p" variant="h5">
            ${potentialWinnings}
          </Typography>
          <Typography color="text.secondary" fontSize={14}>
            Balance: ${balance}
          </Typography>
        </Box>
      </Box>
      <Box mt={0} mb={0}>
        <FormControl size="medium" fullWidth sx={{ m: 1, "margin-left": 0 }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            {chosenBet ? "Amount for " + chosenBet.outcome_name : "Amount"}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label={
              chosenBet ? "Amount for " + chosenBet.outcome_name : "Amount"
            }
            type="number"
            value={stake}
            onChange={handleInputChange}
            error={error}
          />
        </FormControl>
      </Box>
      <Box
        display="flex"
        sx={{ "padding-bottom": "25px" }}
        justifyContent="space-between"
        width="100%"
      >
        <Button variant="text" onClick={handleMaxBet}>
          Max. Bet
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            chosenBet &&
            chooseFinalBet({
              bet: chosenBet,
              stake: stake,
              reward: stake * chosenBet.odds,
            })
          }
          size="large"
          endIcon={chosenBet ? <AttachMoneyIcon /> : ""}
          disabled={!chosenBet}
        >
          {chosenBet ? "Bet" : "Pick Odds"}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default BettingBox;
