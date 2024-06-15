let problemData = {}; // Placeholder for storing data

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Store the received data
    problemData = message;
    console.log("Data received in background", message);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getProblemData") {
        sendResponse(problemData);
    }
    console.log("Sending response to popup.js")
});