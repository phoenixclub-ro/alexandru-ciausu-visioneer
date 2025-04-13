
// Berserk character mapping based on emotion
const characters = {
    angry: { name: "Guts", image: "characters/guts.jpg", quote: "I'll keep struggling..." },
    happy: { name: "Puck", image: "characters/puck.jpg", quote: "Let's lighten the mood!" },
    sad: { name: "Casca", image: "characters/casca.jpg", quote: "The world is cruel..." },
    neutral: { name: "Griffith", image: "characters/griffith.jpg", quote: "I sacrifice." },
    surprised: { name: "Farnese", image: "characters/farnese.jpg", quote: "This can’t be real!" }
  };
  
  // Initialize webcam
  async function initializeWebcam() {
    const video = document.getElementById("webcam");
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  }
  
  // Analyze facial expression
  async function analyzeExpression() {
    const emotion = detectEmotion(); // Replace with actual emotion detection logic
    assignCharacter(emotion);
  }
  
  // Assign Berserk character based on emotion
  function assignCharacter(emotion) {
    const character = characters[emotion];
    if (character) {
      document.getElementById("character-img").src = character.image;
      document.getElementById("character-name").innerText = character.name;
      document.getElementById("character-quote").innerText = character.quote;
  
      document.getElementById("result").classList.remove("hidden");
    } else {
      alert("No emotion detected!");
    }
  }
  
  // Placeholder for emotion detection logic (to be implemented)
  function detectEmotion() {
    // Example logic for demonstration purposes
    const emotions = ["angry", "happy", "sad", "neutral", "surprised"];
    return emotions[Math.floor(Math.random() * emotions.length)];
  }
  
  // Start webcam on page load
  initializeWebcam();
  
  // Add event listener to analyze button
  document.getElementById("analyze-button").addEventListener("click", analyzeExpression);
  