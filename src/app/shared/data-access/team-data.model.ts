export interface Team {
  area:                Area;
  id:                  number;
  name:                string;
  shortName:           string;
  tla:                 string;
  crest:               string;
  address:             string;
  website:             string;
  founded:             number;
  clubColors:          string;
  venue:               string;
  runningCompetitions: RunningCompetition[];
  coach:               Coach;
  marketValue:         number;
  squad:               Squad[];
  staff:               any[];
  lastUpdated:         Date;
}

export interface Area {
  id:   number;
  name: string;
  code: string;
  flag: string;
}

export interface Coach {
  id:          number;
  firstName:   string;
  lastName:    string;
  name:        string;
  dateOfBirth: Date;
  nationality: string;
  contract:    Contract;
}

export interface Contract {
  start: string;
  until: string;
}

export interface RunningCompetition {
  id:     number;
  name:   string;
  code:   string;
  type:   string;
  emblem: string;
}

export interface Squad {
  id:          number;
  firstName:   string;
  lastName:    null | string;
  name:        string;
  position:    Position;
  dateOfBirth: Date;
  nationality: string;
  shirtNumber: number | null;
  marketValue: number;
  contract:    Contract;
}

export enum Position {
  Defence = "Defence",
  Goalkeeper = "Goalkeeper",
  Midfield = "Midfield",
  Offence = "Offence",
}
