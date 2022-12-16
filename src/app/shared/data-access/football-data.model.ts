export interface FootballData {
  filters: {
    dateFrom?: string;
    dateTo?: string;
    permission?: string;
  };
}
export interface resultSet {
  count?: number;
  competitions?: string;
  first?: string;
  last?: string;
  played?: number;
}

export interface MatchData extends FootballData {
  matches: Match[];
}

export interface CompetitionData extends FootballData {
  count: number;
  competitions: Competition[];
}

export interface Competition {
  id: number;
  area: Area;
  name: string;
  code: string | null;
  type: string;
  emblem: string | null;
  plan: string;
  currentSeason: CurrentSeason | null;
  numberOfAvailableSeasons: number;
  lastUpdated: string;
}

export interface Area {
  id: number;
  name: string;
  code: string;
  flag: string | null;
}

export interface CurrentSeason {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number | null;
  winner: Winner | null;
}

export interface Match {
  area: Area;
  competition: CompetitionShort;
  season: Season;
  id: number;
  utcDate: string;
  status: string;
  minute: number;
  injuryTime: number;
  attendance: number;
  venue: string;
  matchday: number;
  stage: string;
  group: string;
  lastUpdated: string;
  homeTeam: MatchTeam;
  awayTeam: MatchTeam;
  score: ScoreData;
  goals: Goal[];
  penalties: any[];
  bookings: Booking[];
  substitutions: Substitution[];
  odds: Odds;
  referees: Coach[];
}

export interface MatchTeam {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  coach: Coach;
  leagueRank: number;
  formation: string;
  lineup: Bench[];
  bench: Bench[];
  statistics: { [key: string]: number };
}

export interface Winner {
  id: number;
  name: string;
  shortName: string | null;
  tla: string | null;
  crest: string | null;
  address: string | null;
  website: string | null;
  founded: number | null;
  clubColors: string | null;
  venue: string | null;
  lastUpdated: string | null;
}

export interface Bench {
  id: number;
  name: string;
  position: null | string;
  shirtNumber: number;
}

export interface Coach {
  id: number;
  name: string;
  nationality: null | string;
  type?: string;
}

export interface Booking {
  minute: number;
  team: Player;
  player: Player;
  card: string;
}

export interface Player {
  id: number;
  name: string;
}

export interface CompetitionShort {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

export interface Goal {
  minute: number;
  injuryTime: number;
  type: string;
  team: Player;
  scorer: Player;
  assist: Player;
  score: Score;
}

export interface Score {
  home: number;
  away: number;
}

export interface Odds {
  homeWin: number;
  draw: number;
  awayWin: number;
}

export interface ScoreData {
  winner: string;
  duration: string;
  fullTime: Score;
  halfTime: Score;
}

export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number | null;
  winner: string;
  stages: string[];
}

export interface Substitution {
  minute: number;
  team: Player;
  playerOut: Player;
  playerIn: Player;
}
