import { Competition } from "../../../shared/data-access/football-data.model";
import { DateRange } from "../../feature/date-picker/date-picker.model";

export interface FilterData {
  competition: Competition;
  matchday: DateRange;
}
