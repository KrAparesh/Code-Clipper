// Scraping leetcode
if (window.location.href.includes("leetcode.com")) {
    leetcodeHandler();
// Scraping geeksforgeeks
} else if (window.location.href.includes("geeksforgeeks.org")) {
    geeksforgeeksHandler();
}

function geeksforgeeksHandler() {
    const checkPageLoaded = setInterval(() => {
        problemTitle = document.querySelector("h3");
        if (problemTitle) {
            clearInterval(checkPageLoaded)
            problemTitle = document.querySelector("h3").textContent;
            problemURL = window.location.href;
            problemDifficulty = document.querySelector('strong').textContent;
            // console.log(problemTitle, problemURL, problemDifficulty)
            chrome.runtime.sendMessage({problemTitle, problemURL, problemDifficulty});
        }
    }, 100)
}

function leetcodeHandler() {
    const checkPageLoaded = setInterval(() => {
        const problemTitleElement = document.querySelector('.text-title-large a');
        if (problemTitleElement) {
            clearInterval(checkPageLoaded);
            problemTitle = problemTitleElement.textContent;
            problemTitle = problemTitle.substring(problemTitle.indexOf(' ') + 1)
            problemURL = window.location.href;
            problemDifficulty = document.querySelector('.text-difficulty-easy, .text-difficulty-medium, .text-difficulty-hard').textContent;
            // console.log(problemTitle, problemURL, problemDifficulty)
            chrome.runtime.sendMessage({problemTitle, problemURL, problemDifficulty});
        }
    }, 100);
}

