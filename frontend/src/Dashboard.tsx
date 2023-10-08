import React, { useState, useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Alert, AlertTitle } from "@mui/material/";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material/";
import EventDetails from "./components/EventDetails";
import BettingBox from "./components/BettingBox";
import Events from "./components/Events";
import BetModal from "./components/BetModal";
import SideBar from "./components/SideBar";
import { Event, UserData, ChosenBet, FinalBet } from "./static/types";
import { API_URL, pageName, userData } from "./static/constants";

const defaultTheme = createTheme();

export default function Dashboard() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const [error, setError] = useState<string | null>(null);
  const [chosenBet, setChosenBet] = useState<ChosenBet>();
  const [finalBet, setFinalBet] = useState<FinalBet>();
  const [betModal, setBetModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const response = await fetch(API_URL+"/api/football/events");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const eventsData = await response.json();
        eventsData.sort((event1: Event, event2: Event) => {
          return event1.date <= event2.date ? -1 : event1.date > event2.date ? 1 : 0;
        });
        setEvents(eventsData);
      } catch (error) {
        setError("Error occurred");
      }
    };

    fetchData();
  }, []);

  const submitBetScreen = (bet: boolean) => {
    setBetModal(bet);
  };

  const selectEvent = (event: Event) => {
    setSelectedEvent(event);
    setChosenBet(undefined);
  };

  const chooseBet = (chosenBet: ChosenBet) => {
    setChosenBet(chosenBet);
  };

  const chooseFinalBet = (finalBet: FinalBet) => {
    submitBetScreen(true);
    setFinalBet(finalBet);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <BetModal open={betModal} finalBet={finalBet} submitBetScreen={submitBetScreen} />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideBar pageName={pageName} />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {selectedEvent && (
                <Grid item xs={12} md={8} lg={9}>
                  <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 240 }}>
                    <EventDetails event={selectedEvent} chooseBet={chooseBet} />
                  </Paper>
                </Grid>
              )}
              {selectedEvent && (
                <Grid item xs={12} md={4} lg={3}>
                  <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 240 }}>
                    {events.length > 0 && (
                      <BettingBox userData={userData} chosenBet={chosenBet} chooseFinalBet={chooseFinalBet} />
                    )}
                  </Paper>
                </Grid>
              )}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Events events={events} selectedEvent={selectedEvent} selectEvent={selectEvent} />
                  {error && (
                    <Alert severity="error">
                      <AlertTitle>Internal Server Error: HTTP 500</AlertTitle>
                      <strong>The server encountered an internal error. Please try again later.</strong>
                    </Alert>
                  )}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}