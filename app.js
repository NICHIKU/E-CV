const { createApp } = Vue;

createApp({
  data() {
    return {
      personalInfo: {
        name: "Puype Ethan",
        title: "Web & App Developer",
        profileImage: "Profile.jpg",
        about: "I'm a passionate developer with experience in creating creative and user-friendly websites and applications. I specialize in app development with a focus on C++ and modern Python frameworks.",
        email: "ethan.puype1@gmail.com",
        phone: "+33783308974",
        location: "Calais, 62100",
        website: "https://www.lipsum.com/",
        linkedin: "https://www.linkedin.com/in/ethan-puype-374937192/",
        github: "https://github.com/NICHIKU"
      },
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Vue.js", level: 70 },
        { name: "Python", level: 80 },
        { name: "C++", level: 75 },
        { name: "Java", level: 70 },
        { name: "Github", level: 90 },
      ],
      experience: [
        {
          title: "Developer fullstack",
          company: "ALEC",
          date: "April 2024 - June 2024",
          description: "Developed and maintained multiple Vue.js applications. Collaborated with designers to implement responsive UI components. Optimized application performance and improved load times by 40%."
        },
        {
          title: "Dev Ops",
          company: "Quai des entreprises",
          date: "March 2025 - Present",
          description: "Optimised and documented an already existing ERP and then created different apps to help our clients to better understand their employees struggle in the workfield"
        }
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          institution: "IUT de Calais",
          date: "2021 - 2025",
          description: "Focused on web development and software engineering. Participated in various coding Projects"
        }      
      ],
      projects: [
        {
          title: "ALEC",
          link: "https://alec-residence.com/",
          date: "2024",
          description: "Created a website that displays the association and what they are proposing"
        },
        {
          title: "Turn-Based Action game",
          link: "https://github.com/NICHIKU/SaeJeu",
          date: "2023",
          description: "Built a full game from scratch using pythond and pygame library"
        },
        {
          title: "Chess game",
          link: "https://github.com/NICHIKU/Echec",
          date: "2022",
          description: "Developed a task management application with real-time updates using Vue.js and Firebase. Features include task creation, assignment, status tracking, and notifications."
        }
      ]
    }
  },
  mounted() {
    console.log('CV Application Loaded');
  },
  methods: {
    // You can add methods here for any interactive features
    downloadCV() {
      alert('CV download functionality would go here');
    },
    contactMe() {
      alert('Contact form functionality would go here');
    }
  }
}).mount('#app');
