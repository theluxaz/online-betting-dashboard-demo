export interface ChosenBet  {
  event_id: number;
  outcome_name: string;
  odds: number;
}

export interface FinalBet  {
  bet: ChosenBet;
  stake: number;
  reward: number;
}


export interface UserData  {
  name: string;
  balance: number;
}

export interface Event {
  id: number;
  date: string;
  name: string;
  type: string;
  score_a: number;
  score_b: number;
  status: string;
  outcome_name: string;
  last_updated: string;
  odds_a_name: string;
  odds_b_name: string;
  odds_c_name: string;
  odds_a: number;
  odds_b: number;
  odds_c: number;
}
