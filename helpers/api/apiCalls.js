import {
  getSingleUser,
  getCurrentWeekStress,
  getLastWeekStress,
  getLastMonthStress,
  getCurrentMonthStress,
} from "../../Constants/ApiUrls";
import axios from "axios";

export const fetchUserData = axios.get(getSingleUser);
export const fetchCurrentWeeksStress = axios.get(getCurrentWeekStress);
export const fetchLastWeeksStress = axios.get(getLastWeekStress);
export const fetchLastMonthStress = axios.get(getLastMonthStress);
export const fetchCurrentMonthStress = axios.get(getCurrentMonthStress);
