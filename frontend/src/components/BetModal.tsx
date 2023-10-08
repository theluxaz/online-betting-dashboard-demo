import { Box, Typography, Modal, IconButton } from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";
import { FinalBet } from "../static/types";

interface DepositProps {
  open: boolean;
  finalBet: FinalBet | undefined;
  submitBetScreen: (bet: boolean) => void;
}

const BetModal: React.FC<DepositProps> = ({
  open,
  finalBet,
  submitBetScreen,
}) => {
  return (
    <Modal
      open={open}
      onClose={() => submitBetScreen(false)}
      aria-labelledby="bet-modal-title"
      aria-describedby="bet-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "1px solid #e0e0e0",
          boxShadow: 24,
          borderRadius: "12px",
          p: 4,
        }}
      >
        <Typography id="bet-modal-title" variant="h6" component="h2">
          Bet Placed Successfully!
        </Typography>
        <Typography
          id="bet-modal-outcome"
          sx={{ mt: 2, color: "text.secondary" }}
        >
          Bet: {finalBet?.bet.outcome_name}
        </Typography>
        <Typography
          id="bet-modal-stake"
          sx={{ mt: 2, color: "text.secondary" }}
        >
          Stake: ${finalBet?.stake.toFixed(2)}
        </Typography>
        <Typography id="bet-modal-odds" sx={{ mt: 2, color: "text.secondary" }}>
          Odds: {finalBet?.bet.odds}
        </Typography>
        <Typography id="bet-modal-reward" sx={{ mt: 2, fontWeight: "bold" }}>
          Potential Reward: ${finalBet?.reward.toFixed(2)}
        </Typography>

        <IconButton
          aria-label="close"
          onClick={() => submitBetScreen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default BetModal;
