import { api } from "./baseApiService";

const BASE_URL = import.meta.env.VITE_LEETCODE_API

export async function fetchLeetCodeProfile(username) {
  const uri = `userProfile/${username}`
  const data = await api(uri, {}, BASE_URL);
  return data;
}

export async function fetchRecentSubmissions(username) {
  const uri = `${username}/submission`
  const data = await api(uri, {}, BASE_URL);
  return data;
}

export async function fetchSubmissionsByYear(username, year) {
  const uri = `userProfileCalendar?username=${username}&year=${year}`
  const data = await api(uri, {}, BASE_URL);
  return data;
}