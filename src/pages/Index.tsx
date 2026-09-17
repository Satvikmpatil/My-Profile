import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  MessageSquare,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SkillTag from "@/components/SkillTag";
import ChatBot from "@/components/ChatBot";
import SolarSystemBackground from "@/components/SolarSystemBackground";
import Footer from "@/components/Footer";

// Define project category type
type ProjectCategory = "all" | "backend" | "web" | "cloud" | "ui-ux" | "design";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string | null;
  live: string | null;
  tags: string[];
  category: ProjectCategory | ProjectCategory[];
}

const Index = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { toast } = useToast();
  const { isDarkMode } = useTheme();
  const headerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const chatBotRef = useRef<HTMLDivElement>(null);

  // Project category state
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  // Contact form state
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = () => {
    setTimeout(() => {
      setFormStatus("success");
      formRef.current?.reset();
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
    }, 500);
  };

  useEffect(() => {
    const sections = [aboutRef, skillsRef, projectsRef, experienceRef];

    // Header animation
    gsap.fromTo(
      headerRef.current?.querySelectorAll(".animate-on-load"),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power2.out" }
    );

    // Sections animations
    sections.forEach((sectionRef) => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".gsap-reveal"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    });

    // Chatbot animation
    gsap.fromTo(
      chatBotRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 2, ease: "back.out" }
    );
  }, []);

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1tKnu1FU5DDvfszR9ZNiYIK2rbb4-f0yK/view?usp=sharing",
      "_blank"
    );
    toast({
      title: "Resume Opened",
      description: "Resume is opening in a new tab",
    });
  };

  const languageSkills = ["Go", "Java", "JavaScript", "C"];
  const frameworkSkills = [
    "React",
    "Redux",
    "Gin",
    "gRPC",
    "REST APIs",
  ];
  const toolsSkills = ["PostgreSQL", "Redis", "Docker", "AWS", "JWT/PASETO"];

  const projects: Project[] = [
    {
      title: "Banking Microservices Platform",
      description:
        "Production-ready banking backend with Go, Postgres, gRPC, and Kubernetes. Features secure money transfers, JWT/PASETO auth, RBAC, Redis async workers, and AWS deployment.",
      image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f",
      github: "https://github.com/Satvikmpatil/backend",
      live: null,
      tags: ["Go", "gRPC", "Postgres", "Kubernetes", "AWS"],
      category: "backend",
    },
    {
      title: "Learning Go - Book Notes",
      description:
        "Notes and code from 'Learning Go' by Jon Bodner (2nd Ed) - all 16 chapters covering concurrency, generics, testing, context, and more.",
      image: "/learning-go-cover.webp",
      github: "https://github.com/Satvikmpatil/Golang",
      live: null,
      tags: ["Go", "Concurrency", "Generics", "Testing"],
      category: "backend",
    },
    {
      title: "Go Learning Journey",
      description:
        "Comprehensive Go examples from basics to advanced topics: concurrency, REST APIs, MongoDB, goroutines, and channels.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      github: "https://github.com/Satvikmpatil/Go-Learning-Journey",
      live: null,
      tags: ["Go", "REST API", "MongoDB", "Concurrency"],
      category: "backend",
    },
    {
      title: "AI Policy Advisor",
      description:
        "AI-powered security policy generator using MCP (Model Context Protocol) with Go backend and React frontend.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      github: null,
      live: null,
      tags: ["Go", "gRPC", "React", "AI", "MCP"],
      category: "backend",
    },
    {
      title: "README Generator",
      description:
        "A tool to automatically generate professional README files for your projects.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      github: "https://github.com/Satvikpatil7/README-File-Generator",
      live: null,
      tags: ["Python"],
      category: "design",
    },
    {
      title: "AWS WAF Security (CloudDefender)",
      description:
        "Cloud security solution using AWS WAF for protecting web applications.",
      image: "https://cdn.wallpapersafari.com/30/59/JigpBb.jpg",
      github: "https://github.com/Satvikpatil7/CloudDefender",
      live: null,
      tags: ["AWS", "Security", "Cloud"],
      category: "cloud",
    },
    {
      title: "Vealthx Fintech",
      description:
        "Financial technology platform providing innovative solutions.",
      image:
        "https://i.pinimg.com/736x/9e/3b/a6/9e3ba64814687c57df6476362bfc88d0.jpg",
      github: null,
      live: "https://www.vealthx.com/",
      tags: ["Fintech", "Startup"],
      category: "web",
    },
    {
      title: "Crypto Site",
      description: "Cryptocurrency information and tracking platform.",
      image:
        "https://i.pinimg.com/736x/c3/c8/b5/c3c8b5db0add09dc0e5d41402f6cb0af.jpg",
      github: "https://github.com/Satvikpatil7/Crypto",
      live: "https://crypto-olive-xi.vercel.app/",
      tags: ["React", "Crypto API", "Frontend"],
      category: "web",
    },
    {
      title: "AI Agent (MERN)",
      description: "AI-powered agent built using the MERN stack.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      github: "https://github.com/Satvikpatil7/AI-Agent-in-MERN",
      live: null,
      tags: ["MERN", "AI", "Full Stack"],
      category: "web",
    },
    {
      title: "Nike UI",
      description: "Modern UI design for Nike e-commerce platform.",
      image:
        "https://i.pinimg.com/736x/9c/03/5c/9c035c7a57060378260f5c97375f4d88.jpg",
      github: null,
      live: "https://www.figma.com/proto/ItTHXjmF6Cqjq5nCoBY86Z/nike",
      tags: ["UI/UX", "Figma", "Design"],
      category: "ui-ux",
    },
    {
      title: "Logitech UI",
      description: "UI design for Logitech products showcase.",
      image:
        "https://i.pinimg.com/736x/04/cc/eb/04ccebef12d8f577d6fe5383631d504c.jpg",
      github: null,
      live: "https://www.figma.com/proto/GCLwLDKOQLfqgQm40eCKQs/LOGITECH",
      tags: ["UI/UX", "Figma", "Design"],
      category: "ui-ux",
    },
    {
      title: "DSA Checkbox App",
      description:
        "Application showcasing category tree implementation with checkboxes.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      github: "https://github.com/Satvikpatil7/Category-Tree-Checkbox-App",
      live: "https://category-tree-checkbox-app.vercel.app/",
      tags: ["React", "Data Structures", "Recursion", "Tree"],
      category: "web",
    },
    {
      title: "Recipe Search",
      description: "Autocomplete component for searching recipes.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      github: "https://github.com/Satvikpatil7/Autocomplete-Component",
      live: "https://autocomplete-component-eosin.vercel.app/",
      tags: ["React", "API", "Frontend", "Debouncing", "Caching"],
      category: "web",
    },
  ];

  // Filter projects based on active category
  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "all" ||
      (Array.isArray(project.category)
        ? project.category.includes(activeCategory)
        : project.category === activeCategory)
  );

  // Category buttons data
  const categoryButtons = [
    { id: "all", label: "All Projects" },
    { id: "backend", label: "Backend/Go" },
    { id: "web", label: "Web" },
    { id: "cloud", label: "Cloud" },
    { id: "ui-ux", label: "UI/UX" },
  ];

  return (
    <div
      className={`min-h-screen overflow-x-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-black via-gray-900 to-gray-800"
          : "bg-gradient-to-br from-gray-50 via-gray-100 to-white"
      } watermark animate-watermark-flow`}
    >
      <SolarSystemBackground />
      <Navbar />

      {/* Hero Section */}
      <section
        ref={headerRef}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute inset-0 ${
              isDarkMode
                ? "bg-gradient-to-br from-purple-900/10 to-blue-900/10"
                : "bg-gradient-to-br from-purple-200/30 to-blue-200/30"
            } pointer-events-none`}
          ></div>
          <div
            className={`absolute inset-0 opacity-5 animate-watermark-flow watermark`}
          ></div>
        </div>

        <div className="container max-w-5xl z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text animate-on-load">
            Hello, I'm Satvik Patil
          </h1>
          <div className="h-1 w-20 bg-accent mx-auto mb-6 animate-on-load"></div>
          <p
            className={`text-xl md:text-2xl mb-8 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } animate-on-load`}
          >
            Imagine | Build | Deploy
          </p>

          <div className="flex justify-center gap-6 mb-12 animate-on-load">
            <a
              href="https://www.linkedin.com/in/satvikpatil/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              } transition-colors`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Satvikmpatil"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              } transition-colors`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://leetcode.com/u/satvikmpatil/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              } transition-colors`}
            >
              <span className="text-xl font-bold">LC</span>
            </a>
            <a
              href="https://x.com/SatvikMPatil?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              } transition-colors`}
            >
              <X size={24} />
            </a>
            <a
              href="mailto:7satvikpatil@gmail.com"
              className={`${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              } transition-colors`}
            >
              <Mail size={24} />
            </a>
          </div>

          <Button
            onClick={handleResumeClick}
            variant="outline"
            className={`border-accent ${
              isDarkMode
                ? "text-white hover:bg-accent/20"
                : "text-gray-800 hover:bg-accent/10"
            } animate-on-load`}
          >
            View Resume
          </Button>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5L12 19M12 19L19 12M12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text gsap-reveal">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="gsap-reveal">
              <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl">
                <img
                  src="/profile.png"
                  alt="Satvik Patil"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 bg-accent rounded-full p-2">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png"
                    alt="Finlon logo"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="glass p-8 gsap-reveal">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Software Engineer
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
Hi, I'm Satvik Patil — Software Engineer 1 at Barracuda Networks, building cloud security products for OneDrive and SharePoint. I specialize in scalable backend services with Go, gRPC, and cloud-native technologies, while also crafting modern frontends with React and TypeScript.
              </p>
              <div className="border-l-4 border-accent pl-4 py-2">
                <p className="text-gray-300 italic">
                  Go | gRPC | PostgreSQL | TypeScript | React | Docker
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsRef}
        className={`py-20 px-4 ${isDarkMode ? "bg-black/20" : "bg-black/5"}`}
      >
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text gsap-reveal">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="glass p-6 gsap-reveal">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {languageSkills.map((skill, index) => (
                  <SkillTag key={index} name={skill} />
                ))}
              </div>
            </div>

            <div className="glass p-6 gsap-reveal">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {frameworkSkills.map((skill, index) => (
                  <SkillTag key={index} name={skill} />
                ))}
              </div>
            </div>

            <div className="glass p-6 gsap-reveal">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">
                Tools
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {toolsSkills.map((skill, index) => (
                  <SkillTag key={index} name={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text gsap-reveal">
            Projects
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 gsap-reveal">
            {categoryButtons.map((category) => (
              <Button
                key={category.id}
                onClick={() =>
                  setActiveCategory(category.id as ProjectCategory)
                }
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`
                  ${
                    activeCategory === category.id
                      ? "bg-accent hover:bg-accent/90"
                      : isDarkMode
                      ? "border-gray-700 hover:bg-gray-800"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  } 
                  transition-all px-4 py-2 rounded-full
                `}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="gsap-reveal">
                <ProjectCard {...project} />
              </div>
            ))}

            {filteredProjects.length === 0 && (
              <div className="col-span-3 text-center py-12">
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={experienceRef}
        className={`py-20 px-4 ${isDarkMode ? "bg-black/20" : "bg-black/5"}`}
      >
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text gsap-reveal">
            Experience
          </h2>

          <div className="space-y-6">
            {/* Current Role */}
            <div className="max-w-3xl mx-auto glass p-8 gsap-reveal">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Software Engineer 1
                </h3>
                <div className="md:ml-auto text-accent">Barracuda Networks</div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="text-gray-400">Jul 2025 – Present</div>
                <div className="md:ml-auto text-gray-400">Bengaluru</div>
              </div>
              <p className="text-gray-300 leading-relaxed text-justify">
                Building cloud security products for OneDrive and SharePoint. Developing backend APIs using Go to improve reporting capabilities and system modularity. Building frontend features with React, Redux, and TypeScript.
              </p>
            </div>

            {/* Barracuda Internship */}
            <div className="max-w-3xl mx-auto glass p-8 gsap-reveal">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Software Developer Intern
                </h3>
                <div className="md:ml-auto text-accent">Barracuda Networks</div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="text-gray-400">Feb 2025 – Jun 2025</div>
                <div className="md:ml-auto text-gray-400">Bengaluru</div>
              </div>
              <p className="text-gray-300 leading-relaxed text-justify">
                Contributed to full-stack development of cloud security products. Built and optimized frontend features using React, Redux, and TypeScript.
              </p>
            </div>

            {/* Vealthx Internship */}
            <div className="max-w-3xl mx-auto glass p-8 gsap-reveal">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Web Developer Intern
                </h3>
                <div className="md:ml-auto text-accent">Vealthx</div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="text-gray-400">Jul 2024 – Jan 2025</div>
                <div className="md:ml-auto text-gray-400">Remote</div>
              </div>
              <p className="text-gray-300 leading-relaxed text-justify">
                Developed web applications for fintech platform providing innovative financial solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text gsap-reveal">
            Connect with Me
          </h2>
          <p className={`text-center mb-12 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Looking for a referral, collaboration, or just want to say hi? Let's connect!
          </p>

          <div className="max-w-2xl mx-auto glass p-8 gsap-reveal">
            <iframe name="hidden_iframe" id="hidden_iframe" className="hidden" />
            {formStatus === "success" ? (
              <div className="text-center py-8">
                <div className="text-green-500 text-5xl mb-4">✓</div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                  Message Sent!
                </h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Thanks for reaching out. I'll get back to you soon!
                </p>
                <Button
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 bg-accent hover:bg-accent/80 text-white"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                ref={formRef}
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeTXtMqi5bVhmm5vspVn73vqaLQtgyer0gJKdJzpfvsrUCrhA/formResponse"
                method="POST"
                target="hidden_iframe"
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                <div>
                  <label className={`block mb-2 font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="entry.2005620554"
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent ${
                      isDarkMode
                        ? "bg-gray-900 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-gray-800"
                    }`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className={`block mb-2 font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="entry.1045781291"
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent ${
                      isDarkMode
                        ? "bg-gray-900 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-gray-800"
                    }`}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className={`block mb-2 font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="entry.1065046570"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent ${
                      isDarkMode
                        ? "bg-gray-900 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-gray-800"
                    }`}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label className={`block mb-2 font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="entry.1166974658"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent ${
                      isDarkMode
                        ? "bg-gray-900 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-gray-800"
                    }`}
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label className={`block mb-2 font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="entry.839337160"
                    required
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent resize-none ${
                      isDarkMode
                        ? "bg-gray-900 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-gray-800"
                    }`}
                    placeholder="Looking for a referral, collaboration, or just saying hi..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/80 text-white py-3 rounded-lg font-medium"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Chat Bot */}
      <div ref={chatBotRef} className="fixed bottom-6 right-6 z-50">
        <ChatBot />
      </div>
    </div>
  );
};

export default Index;
