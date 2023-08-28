// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
    consturctor(title, uploader, time) {
        this.title = title; 
        this.uploader = uploader;
        this.time = time;
    }

watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  } }

const video1 = new Video("Video 1", "Uploader 1", 120)
const video2 = new Video("Video 2", "Uploader 2", 180)

const videosData = [
    {title: "Video 1", uploader: "Video 2", time: 120},
    { title: "Video 2", uploader: "Uploader 2", time: 180 },
  { title: "Video 3", uploader: "Uploader 3", time: 240 },
  { title: "Video 4", uploader: "Uploader 4", time: 150 },
  { title: "Video 5", uploader: "Uploader 5", time: 300 }
]

const videos = [];

for (const data of videosData) {
  const video = new Video(data.title, data.uploader, data.time);
  videos.push(video);
}

// Now you can access and use the video instances in the 'videos' array as needed
videos[0].watch(); // Output: "Uploader 1 watched all 120 seconds of "Video 1"!"
videos[1].watch(); // Output: "Uploader 2 watched all 180 seconds of "Video 2"!"