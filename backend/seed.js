const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Project = require("./models/Project");

// Load env vars
dotenv.config({ path: "./.env" });

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sample projects data
const projects = [
  {
    title: "DevAsh Services Portal",
    slug: "devash-services-portal",
    thumbnailUrl:
      "https://res.cloudinary.com/dw9pihx6q/image/upload/v1764146993/devAsh%20project/devAsh-login-success_jymw15.png",
    description:
      "A modern MERN-based service management platform featuring secure user authentication, role-based access, protected routes, admin dashboards, real-time validations, and complete CRUD operations for admin.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "BCrypt",
      "Zod Validation",
      "Context API",
      "Mongoose",
    ],
    githubUrl: "https://github.com/ashwanth-achari/mern-auth-demo",
    liveUrl: "https://devash-services.vercel.app/",
    category: "Full Stack",
    role: "Full Stack Developer",
    duration: "Oct 2025 - Nov 2025",
    isFeatured: true,
  },
  {
    title: "Emoji Memory Game",
    slug: "emoji-memory-game",
    thumbnailUrl:
      "https://res.cloudinary.com/dw9pihx6q/image/upload/v1764148634/Emoji-start_r89dya.png", // replace with your screenshot if you have one
    description:
      "A fun and interactive emoji memory game built with React. . Fully responsive UI with component-based architecture.",
    techStack: ["React", "JavaScript", "CSS Modules", "React"],
    githubUrl: "https://github.com/ashwanth-achari/emoji-game", // replace your repo link
    liveUrl: "https://my-emoji-game.vercel.app/", // add your live link if deployed
    category: "Frontend",
    role: "Frontend Developer",
    duration: "March 2025",
    isFeatured: false,
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    thumbnailUrl:
      "https://res.cloudinary.com/dw9pihx6q/image/upload/v1764149488/portfolio-home_sarxsj.png",
    description:
      "I told Z.ai to vibe-code my whole portfolio, and boom — this is what you're looking at.A full MERN portfolio powered by React, Node.js, and MongoDB Atlas, created from a single prompt and refined with ChatGPT.(But without real developer experience and understanding, even the best AI-generated code can fall apart.)",
    techStack: ["Z.ai","React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/ashwanth-achari/ashwanth-portfolio",
    liveUrl: "#",
    category: "Full Stack",
    role: "Solo Developer",
    duration: "Nov 2025",
    isFeatured: true,
  },
  {
    title: "To-Do Task Manager",
    slug: "todo-task-manager",
    thumbnailUrl:
      "https://res.cloudinary.com/dw9pihx6q/image/upload/v1764148635/Todo-app_vhm5i5.png", // replace with your screenshot if available
    description:
      "A simple and responsive To-Do application built using HTML, CSS, Bootstrap, and JavaScript. Users can add, delete, and mark tasks as completed. Includes localStorage support for saving tasks.",
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript", "LocalStorage"],
    githubUrl: "https://github.com/ashwanth-achari/todo-app", // replace with your repo
    liveUrl: "https://todo-app-ashwa.vercel.app/", // replace if deployed
    category: "Frontend",
    role: "Frontend Developer",
    duration: "2024",
    isFeatured: false,
  },
  {
    title: "IPL Stats Dashboard",
    slug: "ipl-stats-dashboard",
    thumbnailUrl:
      "https://res.cloudinary.com/dw9pihx6q/image/upload/v1764148635/IPL-team-larger_tbdcgp.png", // replace with a screenshot
    description:
      "A dynamic IPL dashboard built with React using a clean component-based architecture. Displays team stats, player details, match results.",
    techStack: ["React", "JavaScript", "CSS", "Component-Based Architecture"],
    githubUrl: "https://github.com/ashwanth-achari/ipl-dashboard-app", // replace with your repo link
    liveUrl: "https://ipl-dashboard-app-ashwa.vercel.app/", // replace if deployed
    category: "Frontend",
    role: "Frontend Developer",
    duration: "2024",
    isFeatured: false,
  },
];

// Import data into DB
const importData = async () => {
  try {
    await Project.deleteMany({});

    await Project.insertMany(projects);

    console.log("Data Imported...");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Delete data from DB
const deleteData = async () => {
  try {
    await Project.deleteMany({});

    console.log("Data Destroyed...");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}

// # To import/sample data
// npm run seed

// # To destroy/delete all project data
// npm run seed:destroy
