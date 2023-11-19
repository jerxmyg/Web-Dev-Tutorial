document.addEventListener('DOMContentLoaded', function () {
    // This example adds a click event to the "Introduction" div
    var introductionDiv = document.querySelector('.meep');

    introductionDiv.addEventListener('click', function () {
        alert('Hello! This is the Introduction section.');
    });
});
