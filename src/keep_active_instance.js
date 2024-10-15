const API_URL = "https://kanbanfloww.onrender.com/api/users/check-token"; // Replace with your API endpoint

// Optional: Include headers if your API requires authentication or specific content-type
const HEADERS = {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_ACCESS_TOKEN", // Adjust if needed
};

// Function to make the API call
async function makeApiCall() {
    try {
        const response = await fetch(API_URL, { method: "GET", headers: HEADERS });

        if (response.ok) {
            const data = await response.json(); // Parse JSON response
            console.log("API call successful:", data); // Optional: Process the data
        } else {
            console.error(`Error: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Schedule the API call every 14 minutes (840,000 milliseconds)
console.log("Starting the API caller...");
makeApiCall(); // Make the first call immediately

setInterval(() => {
    console.log("Making another API call...");
    makeApiCall();
}, 14 * 60 * 1000); // 14 minutes in milliseconds (840,000 ms)
