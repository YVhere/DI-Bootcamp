// Self invoking function with 4 arguments
(function (children, partnerName, location, jobTitle) {
    const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kids.`;
    document.getElementById("fortune").textContent = sentence;
})(3, "Anna", "Tel Aviv", "web developer");