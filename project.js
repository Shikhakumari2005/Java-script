<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AI Career Path Recommender</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 font-sans">

  <!-- ================= Landing Page ================= -->
  <!-- <section id="landing" class="min-h-screen flex flex-col items-center justify-center p-6">
    <h1 class="text-4xl md:text-5xl font-bold mb-4 text-center">
      AI Career Path Recommender
    </h1>
    <p class="text-gray-600 mb-8 text-center max-w-xl">
      Discover the best career based on your interests, skills and goals.
    </p>
    <button onclick="showForm()"
      class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl shadow-lg">
      Start Career Analysis
    </button>
  </section> -->

  <!-- <section id="landing"
  class="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative"
  style="background-image: url('images/hero.jpg');"> -->
  <section id="landing"
  class="min-h-screen bg-cover bg-center flex items-center justify-center"
  style="background-image: url('https://thumbs.dreamstime.com/b/futuristic-office-meeting-room-advanced-technology-sleek-design-modern-space-features-circular-area-high-tech-equipment-381416986.jpg');">

  <!-- Dark Overlay -->
  <div class="absolute inset-0 bg-black bg-opacity-60"></div>

  <!-- Content
  <div class="relative z-10 text-center px-6">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">
      <h1 class="text-white drop-shadow-lg md:text-5xl font-bold mb-4"></h1>
      Welcome to the World of Career Growth
    </h1>

    <p class="mb-6 text-lg text-gray-200">
      Discover your perfect tech career path powered by AI.
    </p>

    <button onclick="showForm()"
      class="bg-white text-black px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition">
      Start Career Analysis
    </button>
  </div> --> <!-- Content -->
  <div class="relative z-10 text-center px-6">

    <h1 onclick="playSound()"
      class="cursor-pointer text-5xl md:text-6xl font-extrabold leading-tight transition transform hover:scale-110 duration-300">

      <span class="text-white">Unlock Your</span>
      <br>
      <span class="text-yellow-400">Dream Career</span>
      <br>
      <span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Powered by AI 🚀
      </span>
    </h1>

    <p class="mt-6 text-lg text-gray-200">
      Click the title and start your journey today!
    </p>
    <button onclick="showForm()"
      class="mt-8 bg-white text-black px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition">
      Start Career Analysis
    </button>

  </div>
</section>

<!-- Celebration Sound -->
<audio id="celebrationSound" src="https://www.soundjay.com/human/sounds/applause-8.mp3"></audio>





</section>


  <!-- ================= Form Page ================= -->
  <section id="formPage" class="hidden min-h-screen flex items-center justify-center p-4">
    <form id="careerForm" class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg">
      <h2 class="text-2xl font-bold mb-6 text-center">Career Details</h2>

      <!-- Interests -->
      <!-- <label class="font-semibold">Interests</label>
      <div class="grid grid-cols-2 gap-2 mb-4 mt-2">
        <label><input type="checkbox" value="AI" /> AI</label>
        <label><input type="checkbox" value="Web Development" /> Web Development</label>
        <label><input type="checkbox" value="Design" /> Design</label>
        <label><input type="checkbox" value="Cybersecurity" /> Cybersecurity</label>
        <label><input type="checkbox" value="Data Science" /> Data Science</label>
        <label><input type="checkbox" value="Problem Solving" /> Problem Solving</label>
      </div> -->
      <label class="font-semibold">Interests</label>
      <div class="grid grid-cols-2 gap-4 mb-4 mt-2">
        
        <label class="flex items-center gap-2 border p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img src="images/ai.png" class="w-8 h-8" alt="AI">
          <input type="checkbox" value="AI" /> AI
        </label>

        <label class="flex items-center gap-2 border p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img src="images/web.png" class="w-8 h-8" alt="Web Development">
          <input type="checkbox" value="Web Development" /> Web Development
        </label>

        <label class="flex items-center gap-2 border p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img src="images/design.png" class="w-8 h-8" alt="Design">
          <input type="checkbox" value="Design" /> UI/UX Design
        </label>
        <label class="flex items-center gap-2 border p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img src="images/cyber.png" class="w-8 h-8" alt="Cybersecurity">
          <input type="checkbox" value="Cybersecurity" /> Cybersecurity
        </label>

        <label class="flex items-center gap-2 border p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img src="images/data.png" class="w-8 h-8" alt="Data Science">
          <input type="checkbox" value="Data Science" /> Data Science
        </label>

        <label class="flex items-center gap-2 border p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img src="images/problem.png" class="w-8 h-8" alt="Problem Solving">
          <input type="checkbox" value="Problem Solving" /> Problem Solving
        </label>

        <label class="flex items-center gap-2 border p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img src="images/mobile.png" class="w-8 h-8" alt="App Development">
          <input type="checkbox" value="App Development" /> App Development
        </label>
        <label class="flex items-center gap-2 border p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img src="images/cloud.png" class="w-8 h-8" alt="Cloud Computing">
          <input type="checkbox" value="Cloud Computing" /> Cloud Computing
        </label>

      </div>


      <!-- Skill Level -->
      <label class="font-semibold">Skill Level</label>
      <select id="skill" required class="w-full p-2 border rounded-lg mb-4">
        <option value="">Select</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      <!-- Education -->
      <label class="font-semibold">Education</label>
      <select id="education" required class="w-full p-2 border rounded-lg mb-4">
        <option value="">Select</option>
        <option>High School</option>
        <option>Undergraduate</option>
        <option>Postgraduate</option>
      </select>

      <!-- Work Type -->
      <label class="font-semibold">Preferred Work Type</label>
      <select id="work" required class="w-full p-2 border rounded-lg mb-6">
        <option value="">Select</option>
        <option>Remote</option>
        <option>Corporate</option>
        <option>Freelance</option>
      </select>

      <button class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold">
        Get Recommendation
      </button>
    </form>
  </section>

  <!-- ================= Result Page ================= -->
  <section id="resultPage" class="hidden min-h-screen p-6">
    <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 class="text-3xl font-bold mb-2 text-center">Recommended Role</h2>
      <p id="role" class="text-center text-xl font-semibold text-blue-600 mb-6"></p>

      <div class="flex justify-around mb-8 text-center">
        <div>
          <p class="font-semibold">Demand</p>
          <p id="demand" class="text-green-600"></p>
        </div>
        <div>
          <p class="font-semibold">Competition</p>
          <p id="competition" class="text-red-600"></p>
        </div>
      </div>

      <h3 class="text-xl font-bold mb-4">Learning Roadmap</h3>
      <div id="roadmap" class="space-y-2"></div>

      <button onclick="restart()"
        class="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">
        Start Again
      </button>
    </div>
  </section>

  <!-- ================= JavaScript ================= -->
  <script>
    function showForm() {
      document.getElementById("landing").classList.add("hidden");
      document.getElementById("formPage").classList.remove("hidden");
    }

    function restart() {
      document.getElementById("resultPage").classList.add("hidden");
      document.getElementById("landing").classList.remove("hidden");
    }

    // Recommendation Logic
    function getRecommendation(interests) {
      if (interests.includes("AI")) {
        return {
          role: "AI / Machine Learning Engineer",
          demand: "High",
          competition: "High",
          roadmap: [
            "Learn Python Basics",
            "Learn Data Structures",
            "Study Statistics Fundamentals",
            "Learn Machine Learning",
            "Practice with NumPy & Pandas",
            "Build AI Projects"
          ]
        };
      }

      if (interests.includes("Web Development")) {
        return {
          role: "Frontend Developer",
          demand: "High",
          competition: "Medium",
          roadmap: [
            "Learn HTML, CSS, JavaScript",
            "Learn React",
            "Learn Tailwind/Bootstrap",
            "Build Portfolio Projects",
            "Practice DSA Basics"
          ]
        };
      }

      return {
        role: "Software Developer",
        demand: "Medium",
        competition: "Medium",
        roadmap: [
          "Learn Programming Basics",
          "Learn DSA",
          "Build Projects",
          "Practice Problem Solving"
        ]
      };
    }

    // Form Submit
    document.getElementById("careerForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const checked = document.querySelectorAll('input[type="checkbox"]:checked');
      const interests = Array.from(checked).map(c => c.value);

      const result = getRecommendation(interests);

      // Show result
      document.getElementById("role").innerText = result.role;
      document.getElementById("demand").innerText = result.demand;
      document.getElementById("competition").innerText = result.competition;

      const roadmapDiv = document.getElementById("roadmap");
      roadmapDiv.innerHTML = "";

      result.roadmap.forEach(step => {
        const label = document.createElement("label");
        label.className = "flex items-center gap-2";
        label.innerHTML = `<input type=\"checkbox\"> ${step}`;
        roadmapDiv.appendChild(label);
      });

      document.getElementById("formPage").classList.add("hidden");
      document.getElementById("resultPage").classList.remove("hidden");
    });
  </script>
</body>
</html>