import * as React from 'react';
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from '@mui/material';
import Title from './Title';
import { Event } from '../static/types';

interface EventsProps {
  events: Event[];
  selectedEvent: Event | undefined;
  selectEvent: (event: Event) => void;
}

const styles = {
  tableRow: {
    cursor: 'pointer',
  },
  olderEventsLink: {
    mt: 3,
  },
};

const formatOdds = (oddsName: string, odds: number) => `${oddsName} ( ${odds} )`;

const Events: React.FC<EventsProps> = ({ events, selectedEvent, selectEvent }) => {
  const renderEventsTable = () => (
    <>
      <Title>Current Matches</Title>
      <TableContainer sx={{ overflowX: 'auto' }}>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Event</TableCell>
              <TableCell>Odds</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow
                hover
                onClick={() => selectEvent(event)}
                key={event.id}
                sx={styles.tableRow}
                selected={selectedEvent?.id === event.id}
              >
                <TableCell>{event.date}</TableCell>
                <TableCell>{event.name}</TableCell>
                <TableCell>{formatOdds(event.odds_a_name, event.odds_a)}</TableCell>
                <TableCell>{event.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link color="primary" href="#" sx={styles.olderEventsLink}>
        See older events
      </Link>
    </>
  );

  return events.length > 0 ? renderEventsTable() : <Title>Current Matches</Title>;
}

export default Events;