// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all <img>, <video>, and <iframe> elements on the page
    const mediaElements = document.querySelectorAll('img, video, iframe');

    // Add 'loading="lazy"' to each element
    mediaElements.forEach(element => {
        // Check if the element is an iframe (for lazy loading embedded videos, etc.)
        if (element.tagName.toLowerCase() === 'iframe') {
            element.setAttribute('loading', 'lazy');
        }

        // Check if the element is a video
        if (element.tagName.toLowerCase() === 'video') {
            element.setAttribute('loading', 'lazy');
        }

        // For images (in case you're using <img> tags as well)
        if (element.tagName.toLowerCase() === 'img') {
            element.setAttribute('loading', 'lazy');
        }
    });
});

