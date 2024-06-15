document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage({action: "getProblemData"}, (response) => {
        // Assuming response contains the problem data
        console.log("Got response from background", response);
        displayData(response);
    });
});

function displayData(data) {
    document.getElementById('title').textContent = data.problemTitle;
    document.getElementById('url').textContent = data.problemURL;
    document.getElementById('difficulty').textContent = data.problemDifficulty;
}