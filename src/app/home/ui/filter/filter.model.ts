import { Competition } from "../../../shared/data-access/football-data.model";

export interface FilterData {
  competition: Competition;
  matchday: Date;
}
