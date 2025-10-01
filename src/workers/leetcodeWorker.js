// Import your API services

import { fetchLeetCodeProfile } from "../services/leetcodeProfile";

self.onmessage = async (e) => {
  const { type, username } = e.data;

  try {
    if (type === "FETCH_PROFILE") {
      const data = await fetchLeetCodeProfile(username);
      self.postMessage({ type, success: true, data });
    }
  } catch (error) {
    self.postMessage({ type, success: false, error: error.message });
  }
};
