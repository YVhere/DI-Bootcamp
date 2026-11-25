// 1. Class Video
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    // 2. Method watch()
    watch() {
        console.log(this.uploader + " watched all " + this.time + " of " + this.title + "!");
    }
}

// 3. First Video instance + call watch()
const video1 = new Video("JavaScript Basics", "Yakov", 600);
video1.watch();

// 4. Second Video instance with different values
const video2 = new Video("Learn CSS", "Max", 900);
video2.watch();

// 5. Bonus: array with the data for five videos
const videosData = [
    { title: "HTML for beginners", uploader: "Anna", time: 300 },
    { title: "Arrays in JS", uploader: "David", time: 450 },
    { title: "Classes in JS", uploader: "Sarah", time: 720 },
    { title: "Git and GitHub", uploader: "Tom", time: 540 },
    { title: "DOM manipulation", uploader: "Lea", time: 660 }
];

// 6. Bonus: loop through the array to create the instances
const videos = [];
videosData.forEach((data) => {
    const video = new Video(data.title, data.uploader, data.time);
    videos.push(video);
    video.watch();
});