"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import BentoCard from "./components/BentoCard";
import ReflectionCard from "./components/ReflectionCard";
import CareerTimeline from "./components/CareerTimeline";
import CVSection from "./components/CVSection";
import CertificateEvidence from "./components/CertificateEvidence";
import ProjectsGrid from "./components/ProjectsGrid";
import PPWOutcomes from "./components/PPWOutcomes";
import PrintButton from "./components/PrintButton";
import Footer from "./components/Footer";

const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "reflection", label: "Reflection", href: "#reflection" },
  { id: "career", label: "Career Plan", href: "#career" },
  { id: "cv", label: "CV", href: "#cv" },
  { id: "certificate", label: "Certificate", href: "#certificate" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "print", label: "Print/PDF", href: "#print" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const aboutFacts = [
  {
    title: "Full Name",
    value: "Athsara BimalkA Weththasinghe",
  },
  { title: "Institution", value: "Sri Lanka Institute of Information Technology" },
  { title: "Field", value: "Software Engineering / Information Technology" },
  { title: "Focus", value: "Full-Stack Web Development" },
  {
    title: "Strengths",
    value: "Problem Solving, Teamwork, Communication, Continuous Learning",
  },
  {
    title: "Career Interest",
    value: "Full-Stack / MERN Stack / Software Engineering",
  },
];

const reflections = [
  {
    title: "Journal Entry 01 - Business Writing and Professional Communication",
    description:
      "In PPW, I learned that professional writing must be concise, formal, and action-oriented, with clear structure and purposeful wording. I applied this when drafting a project status memo where I removed contractions, used formal vocabulary, and ended each section with a specific call-to-action. I also practiced careful proofreading to eliminate ambiguity and tone issues. This discipline improved my professional readiness by making my communication clearer and more credible to supervisors and clients.",
  },
  {
    title: "Journal Entry 02 - Formal Email Writing and Netiquette",
    description:
      "I learned how to structure professional emails with precise subject lines, proper salutations, and organized body paragraphs that state purpose, request, and next steps. I practiced this by emailing a lecturer to request feedback, using polite phrasing, an attachment note, and a complete signature. I also focused on concise wording and timely replies as part of netiquette. This improved my readiness by preparing me to communicate effectively in internships and team environments.",
  },
  {
    title: "Journal Entry 03 - Presentation Skills",
    description:
      "PPW helped me understand how to structure presentations using signposting, clear transitions, and confident delivery. I applied this in a short class presentation by outlining a strong introduction, three main points, and a concise conclusion. I practiced managing nervousness by controlling breathing and maintaining steady pacing. These skills improved my professional readiness by helping me explain technical ideas with clarity and confidence.",
  },
  {
    title: "Journal Entry 04 - Interview Preparation",
    description:
      "I learned about different interview formats and what employers assess, including technical ability, communication, and cultural fit. I practiced the STAR method by preparing responses to behavioral questions about teamwork and problem solving. This helped me structure my answers with clear outcomes rather than vague descriptions. As a result, I feel more prepared to present myself professionally and respond confidently in real interviews.",
  },
  {
    title: "Journal Entry 05 - Non-Verbal Communication",
    description:
      "I learned that non-verbal cues such as posture, eye contact, gestures, and voice modulation strongly influence how messages are received. I practiced this during mock interviews by maintaining upright posture, steady eye contact, and controlled tone and pace. I also paid attention to professional appearance to align with the expectations of a formal setting. This improved my readiness by making my communication more persuasive and professional beyond words alone.",
  },
  {
    title: "Journal Entry 06 - Career Readiness",
    description:
      "I learned that career development requires deliberate goal setting, continuous skill growth, and portfolio building rather than short-term thinking. I applied this by outlining short-, mid-, and long-term goals and identifying specific skills to improve each month. I also mapped how my projects and certifications can evidence my progress. This improved my professional readiness by giving me a clearer direction and a structured plan to reach industry expectations.",
  },
];

const careerTimeline = [
  {
    range: "0-6 Months",
    title: "Short-Term Goals",
    points: [
      "Improve advanced React, TypeScript, and Tailwind CSS skills",
      "Strengthen backend development using Node.js, Express.js, Spring Boot, and databases",
      "Complete at least one recognized certificate in web development, cloud, UI/UX, or software engineering",
      "Improve professional communication and interview readiness",
      "Refine my CV, LinkedIn, GitHub, and portfolio website",
    ],
  },
  {
    range: "6-18 Months",
    title: "Mid-Term Goals",
    points: [
      "Secure an internship or junior developer opportunity",
      "Contribute to real-world software projects",
      "Build and deploy production-level MERN stack applications",
      "Improve testing, API security, performance optimization, and DevOps basics",
      "Participate in hackathons, open-source projects, or freelance work",
    ],
  },
  {
    range: "2-5 Years",
    title: "Long-Term Goals",
    points: [
      "Become a professional full-stack engineer",
      "Gain experience in scalable system design and cloud deployment",
      "Lead or contribute to larger engineering teams",
      "Build products that solve real user problems",
      "Continue lifelong learning in AI-assisted development, cloud, security, and modern software architecture",
    ],
  },
];

const skillsProgress = [
  { label: "React + TypeScript", value: 86 },
  { label: "Node.js + Express", value: 80 },
  { label: "MongoDB + Data Modeling", value: 78 },
  { label: "Spring Boot + Java", value: 70 },
  { label: "Professional Communication", value: 84 },
  { label: "Presentation + Interview Skills", value: 82 },
];

const technicalSkills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Spring Boot",
  "Java",
  "REST APIs",
  "Git",
  "Tailwind CSS",
];

const softSkills = [
  "Communication",
  "Presentation",
  "Teamwork",
  "Leadership",
  "Time Management",
  "Professional Writing",
  "Interview Confidence",
];

const actionPlan = [
  "Update GitHub weekly",
  "Complete one certificate and upload proof",
  "Practice five common interview questions using the STAR method",
  "Build two polished portfolio projects",
  "Improve LinkedIn with project and certificate evidence",
  "Request feedback from peers and lecturers",
];

const evidenceItems = [
  {
    id: "cert-genai-essentials",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    date: "[Add completion date]",
    skill: "Generative AI fundamentals and responsible use",
    linkLabel: "Open PDF",
    linkHref:
      "/evidence/CertificateOfCompletion_Career%20Essentials%20in%20Generative%20AI%20by%20Microsoft%20and%20LinkedIn.pdf",
    reflection:
      "This course improved my understanding of how generative AI supports modern workflows and reinforced responsible use in professional settings.",
  },
  {
    id: "cert-genai-ethics",
    title: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn Learning",
    date: "[Add completion date]",
    skill: "AI ethics and responsible decision-making",
    linkLabel: "Open PDF",
    linkHref:
      "/evidence/CertificateOfCompletion_Ethics%20in%20the%20Age%20of%20Generative%20AI.pdf",
    reflection:
      "The content strengthened my awareness of ethical risk, bias, and compliance when building AI-informed solutions.",
  },
  {
    id: "cert-python-beginners",
    title: "Python for Beginners",
    issuer: "[Add issuing organization]",
    date: "[Add completion date]",
    skill: "Python fundamentals and problem solving",
    linkLabel: "Open PDF",
    linkHref: "/evidence/Python_for_Beginners_E-Certificate.pdf",
    reflection:
      "This course reinforced core Python concepts that I now apply in data handling, scripting, and ML experimentation.",
  },
  {
    id: "cert-placeholder-01",
    title: "[Add Certificate Title]",
    issuer: "[Add issuing organization]",
    date: "[Add completion date]",
    skill: "[Technical or soft skill]",
    reflection:
      "Replace this reflection with how the course improved your skills and professional readiness.",
  },
  {
    id: "cert-placeholder-02",
    title: "[Add Certificate Title]",
    issuer: "[Add issuing organization]",
    date: "[Add completion date]",
    skill: "[Technical or soft skill]",
    reflection:
      "Replace this reflection with how the course improved your skills and professional readiness.",
  },
];

const projects = [
  {
    title: "Papaya Pulse - AI-Driven Smart Farming",
    description:
      "AI-powered decision-support system for papaya farmers with integrated recommendation and prediction modules.",
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "Scikit-Learn",
      "OpenCV",
      "Flask",
      "React",
    ],
    outcome:
      "Built the fertilizer recommendation module to optimize dosage and reduce over-fertilization risk.",
    link: "GitHub: [Add link]",
  },
  {
    title: "Skill Hive",
    description:
      "Online skill sharing community platform with an easy booking workflow.",
    stack: ["Spring Boot", "React", "Tailwind CSS"],
    outcome: "Improved community flows and booking UX patterns.",
    link: "GitHub: [Add link]",
  },
  {
    title: "Dream Destination Travels",
    description:
      "Travel agency system with AI chatbot, weather API, and admin logins.",
    stack: ["MERN", "Vite", "Tailwind CSS", "API"],
    outcome: "Integrated AI chatbot and external API experiences.",
    link: "GitHub: [Add link]",
  },
  {
    title: "Trust Workers",
    description:
      "Mobile app for finding nannies, messengers, and on-demand workers.",
    stack: ["Flutter", "Dart", "Android Studio", "MySQL", "PHP"],
    outcome: "Built multi-role mobile workflows for service matching.",
    link: "GitHub: [Add link]",
  },
  {
    title: "Online Seat Booking System",
    description:
      "Web-based highway bus ticket booking platform.",
    stack: ["MERN", "Vite", "Tailwind CSS"],
    outcome: "Delivered booking and seat selection flows.",
    link: "GitHub: [Add link]",
  },
  {
    title: "Time Table Management",
    description: "Compact timetable manager for simplified scheduling.",
    stack: ["MERN", "Vite", "Tailwind CSS"],
    outcome: "Practiced productivity tooling and CRUD planning.",
    link: "GitHub: [Add link]",
  },
  {
    title: "Food Catcher Mobile Game",
    description: "Simple Android mobile game focused on timing mechanics.",
    stack: ["Kotlin", "XML", "Android Studio"],
    outcome: "Strengthened game loop and mobile UX basics.",
    link: "GitHub: [Add link]",
  },
  {
    title: "Space App Interface",
    description: "Mobile UI concept for Android and iOS interfaces.",
    stack: ["Flutter", "Dart", "Android Studio", "XML"],
    outcome: "Improved cross-platform UI prototyping.",
    link: "GitHub: [Add link]",
  },
  {
    title: "Vehicle Rental System",
    description: "Vehicle rental and management system.",
    stack: ["Java", "HTML", "SQL", "XML", "CSS"],
    outcome: "Designed rental workflows and admin reporting.",
    link: "GitHub: [Add link]",
  },
  {
    title: "Online Fashion Store Website",
    description: "Web-based fashion store with admin dashboard.",
    stack: ["PHP", "SQL", "CSS", "Java"],
    outcome: "Implemented product and order management logic.",
    link: "GitHub: [Add link]",
  },
  {
    title: "Online Recipes Website",
    description: "Recipe platform featuring chefs and curated food content.",
    stack: ["PHP", "SQL", "CSS", "HTML"],
    outcome: "Built content listings and navigation workflows.",
    link: "GitHub: [Add link]",
  },
  {
    title: "Task List Management System",
    description: "Hospital task list management web system.",
    stack: ["Spring Boot", "SQL", "Java", "JavaScript", "CSS", "XML"],
    outcome: "Delivered operational task tracking features.",
    link: "GitHub: [Add link]",
  },
];

const outcomes = [
  {
    title: "Business Writing",
    description: "In PPW, I learned that professional writing must be concise, formal, and action-oriented, with clear structure and purposeful wording. I applied this when drafting a project status memo where I removed contractions, used formal vocabulary, and ended each section with a specific call-to-action. I also practiced careful proofreading to eliminate ambiguity and tone issues. This discipline improved my professional readiness by making my communication clearer and more credible to supervisors and clients.",
  },
  {
    title: "Email and Netiquette",
    description: "I learned how to structure professional emails with precise subject lines, proper salutations, and organized body paragraphs that state purpose, request, and next steps. I practiced this by emailing a lecturer to request feedback, using polite phrasing, an attachment note, and a complete signature. I also focused on concise wording and timely replies as part of netiquette. This improved my readiness by preparing me to communicate effectively in internships and team environments.",
  },
  {
    title: "Presentation Skills",
    description: "PPW helped me understand how to structure presentations using signposting, clear transitions, and confident delivery. I applied this in a short class presentation by outlining a strong introduction, three main points, and a concise conclusion. I practiced managing nervousness by controlling breathing and maintaining steady pacing. These skills improved my professional readiness by helping me explain technical ideas with clarity and confidence",
  },
  {
    title: "Interview Skills",
    description: "I learned about different interview formats and what employers assess, including technical ability, communication, and cultural fit. I practiced the STAR method by preparing responses to behavioral questions about teamwork and problem solving. This helped me structure my answers with clear outcomes rather than vague descriptions. As a result, I feel more prepared to present myself professionally and respond confidently in real interviews.",
  },
  {
    title: "Non-Verbal Communication",
    description: "I learned that non-verbal cues such as posture, eye contact, gestures, and voice modulation strongly influence how messages are received. I practiced this during mock interviews by maintaining upright posture, steady eye contact, and controlled tone and pace. I also paid attention to professional appearance to align with the expectations of a formal setting. This improved my readiness by making my communication more persuasive and professional beyond words alone.",
  },
  {
    title: "Career Planning",
    description: "I learned that career development requires deliberate goal setting, continuous skill growth, and portfolio building rather than short-term thinking. I applied this by outlining short-, mid-, and long-term goals and identifying specific skills to improve each month. I also mapped how my projects and certifications can evidence my progress. This improved my professional readiness by giving me a clearer direction and a structured plan to reach industry expectations.",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-section]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isPrint = window.matchMedia("print").matches;

    if (prefersReducedMotion || isPrint) {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".nav-animate", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".hero-word", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
            },
          }
        );
      });

      gsap.from(".bento-card", {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 80%",
        },
      });

      gsap.from(".timeline-item", {
        opacity: 0,
        x: -20,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".timeline-stack",
          start: "top 80%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".skill-bar").forEach((bar) => {
        const target = bar.style.getPropertyValue("--progress");
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: target,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
            },
          }
        );
      });

      gsap.from(".certificate-card", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".certificate-card",
          start: "top 85%",
        },
      });

      gsap.from(".footer-reveal", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "footer",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-page text-slate-900">
      <Navbar items={navItems} activeId={activeSection} />
      <main className="mx-auto w-[min(1200px,92%)] pb-20">
        <Hero
          name="Athsara BimalkA Weththasinghe"
          role="Full-Stack Developer | MERN Stack Developer | Software Engineering Undergraduate"
          statement="A reflective academic and professional portfolio showcasing my learning journey, career direction, technical skills, CV, and evidence of continuous skill development."
          portfolioUrl="https://athsarab.me/"
          linkedinUrl="https://www.linkedin.com/in/athsara-bimalka"
          assessmentItems={[
            { label: "Portfolio Submission", value: "50%" },
            {
              label: "Course",
              value: "IT4070 Preparation for Professional World",
            },
            { label: "Institution", value: "SLIIT" },
            { label: "Format", value: "Single Page Website + Print-ready PDF" },
          ]}
        />

        <section id="about" data-section className="section-pad print-break">
          <div className="flex flex-col gap-8">
            <SectionTitle
              eyebrow="Introduction"
              title="Introduction to Myself"
              subtitle="A professional summary of my academic background, technical interests, and personal strengths."
            />
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="glass-card reveal p-6">
                <p className="text-sm leading-7 text-slate-600">
                  I am Athsara BimalkA Weththasinghe, a software engineering
                  undergraduate at SLIIT and a passionate full-stack developer
                  based in Sri Lanka. I specialize in building modern, scalable,
                  and user-friendly web applications using the MERN stack and
                  related technologies. My interests include React, Node.js,
                  MongoDB, Express.js, TypeScript, Spring Boot, API development,
                  UI/UX design, and software engineering best practices.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  I enjoy transforming complex problems into simple, functional,
                  and visually appealing digital solutions. Through academic
                  projects, personal projects, and real-world development
                  experience, I have improved both my technical and professional
                  communication skills.
                </p>
              </div>
              <div className="bento-grid grid gap-4 sm:grid-cols-2">
                {aboutFacts.map((fact) => (
                  <BentoCard
                    key={fact.title}
                    title={fact.title}
                    value={fact.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reflection" data-section className="section-pad print-break">
          <div className="flex flex-col gap-6">
            <SectionTitle
              eyebrow="Reflective Journal"
              title="What I Learned in PPW"
              subtitle="Academic reflections on communication, professionalism, and career readiness."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {reflections.map((entry) => (
                <ReflectionCard
                  key={entry.title}
                  title={entry.title}
                  description={entry.description}
                />
              ))}
            </div>
            <div className="glass-card reveal p-6">
              <p className="text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-900">
                  Reflective Summary:
                </span>{" "}
                Overall, PPW helped me connect academic learning with
                professional expectations. It improved my confidence,
                communication ability, career awareness, and readiness for
                internships and industry opportunities.
              </p>
            </div>
          </div>
        </section>

        <section id="career" data-section className="section-pad print-break">
          <div className="flex flex-col gap-6">
            <SectionTitle
              eyebrow="Career Development Plan"
              title="Career Vision and Roadmap"
              subtitle="To become a skilled full-stack software engineer who builds scalable, secure, user-friendly web applications and contributes to impactful digital products."
            />
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="timeline-stack">
                <CareerTimeline items={careerTimeline} />
              </div>
              <div className="flex flex-col gap-6">
                <div className="glass-card reveal p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Skills Improvement Matrix
                  </h3>
                  <div className="mt-4 flex flex-col gap-4 text-sm text-slate-600">
                    <div>
                      <p className="font-semibold text-slate-900">
                        Technical Skills
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {technicalSkills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Soft Skills</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {softSkills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="glass-card reveal p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Skills Progress
                  </h3>
                  <div className="mt-4 flex flex-col gap-4">
                    {skillsProgress.map((skill) => (
                      <div key={skill.label} className="space-y-2">
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                          <span>{skill.label}</span>
                          <span>{skill.value}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-200">
                          <div
                            className="skill-bar h-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                            style={{ "--progress": `${skill.value}%` } as CSSProperties}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass-card reveal p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Measurable Action Plan
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {actionPlan.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CVSection
          name="Athsara BimalkA Weththasinghe"
          role="Full-Stack Developer | MERN Stack Developer | Software Engineering Undergraduate"
          email="athsarab@gmail.com"
          portfolioUrl="https://athsarab.me/"
          linkedinUrl="https://www.linkedin.com/in/athsara-bimalka"
          githubUrl="https://github.com/athsarabimalka"
          location="Sri Lanka"
          summary="Motivated software engineering undergraduate at SLIIT with a strong interest in full-stack web development and modern software engineering. Skilled in React, Node.js, Express.js, MongoDB, TypeScript, Spring Boot, Java, and responsive UI development. Passionate about building scalable applications, solving real-world problems, and continuously improving both technical and professional skills."
          education={[
            "Sri Lanka Institute of Information Technology (SLIIT)",
            "Degree Program: Information Technology / Software Engineering related undergraduate program",
            "Focus Areas: Software Engineering, Web Development, Database Systems, Full-Stack Development",
          ]}
          technicalSkills={[
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "Spring Boot",
            "Java",
            "MongoDB",
            "MongoDB Atlas",
            "MySQL",
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "REST APIs",
            "Responsive Design",
            "UI/UX Principles",
            "Deployment Basics",
          ]}
          professionalSkills={[
            "Communication",
            "Teamwork",
            "Presentation Skills",
            "Formal Writing",
            "Problem Solving",
            "Adaptability",
            "Time Management",
            "Continuous Learning",
          ]}
          projects={[
            {
              title: "Papaya Pulse - AI-Driven Smart Farming",
              description:
                "Research project with an AI decision-support system for papaya cultivation; built the fertilizer recommendation module using ML for optimized dosage.",
            },
            {
              title: "Skill Hive",
              description:
                "Online skill sharing community platform with a streamlined booking flow.",
            },
            {
              title: "Dream Destination Travels",
              description:
                "Travel agency system with AI chatbot, weather API, and admin logins.",
            },
            {
              title: "Trust Workers",
              description:
                "Mobile app for finding nannies, messengers, and on-demand workers.",
            },
            {
              title: "Online Seat Booking System",
              description:
                "Web-based highway bus ticket booking platform.",
            },
            {
              title: "Time Table Management",
              description:
                "Compact timetable manager for simplified scheduling.",
            },
            {
              title: "Food Catcher Mobile Game",
              description:
                "Simple Android game focused on timing and input mechanics.",
            },
            {
              title: "Space App Interface",
              description:
                "Cross-platform mobile interface concept for Android and iOS.",
            },
            {
              title: "Vehicle Rental System",
              description:
                "Vehicle rental and management system with admin workflows.",
            },
            {
              title: "Online Fashion Store Website",
              description:
                "Web-based fashion store with an admin dashboard.",
            },
            {
              title: "Online Recipes Website",
              description:
                "Recipe platform featuring chefs and curated food content.",
            },
            {
              title: "Task List Management System",
              description:
                "Hospital task list management system built for operational tracking.",
            },
          ]}
          achievements={[
            "Built multiple full-stack and portfolio projects",
            "Continuously improving MERN stack and TypeScript development",
            "Developing professional communication and career readiness through PPW",
          ]}
        />

        <CertificateEvidence
          note="Before final PDF submission, replace placeholder items with actual certificate details and links."
          items={evidenceItems}
        />

        <ProjectsGrid projects={projects} />

        <PPWOutcomes outcomes={outcomes} />

        <section id="print" data-section className="section-pad">
          <div className="glass-card reveal p-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900">
              Print / PDF Portfolio
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              This website is designed as both an interactive portfolio and a
              print-ready PDF. Use the Print Portfolio button to save it as a
              PDF for submission.
            </p>
            <div className="mt-6 flex justify-center">
              <PrintButton />
            </div>
          </div>
        </section>

        <section id="contact" data-section className="section-pad">
          <div className="flex flex-col gap-6">
            <SectionTitle
              eyebrow="Contact"
              title="Let's Connect"
              subtitle="Quick access to portfolio, professional profiles, and direct contact details."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="glass-card reveal p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Email
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  athsarab@gmail.com
                </p>
              </div>
              <div className="glass-card reveal p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Location
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Sri Lanka
                </p>
              </div>
              <div className="glass-card reveal p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/athsara-bimalka"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-sm font-semibold text-cyan-700"
                >
                  www.linkedin.com/in/athsara-bimalka
                </a>
              </div>
              <div className="glass-card reveal p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  GitHub
                </p>
                <a
                  href="https://github.com/athsarabimalka"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-sm font-semibold text-cyan-700"
                >
                  github.com/athsarabimalka
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        name="Athsara BimalkA Weththasinghe"
        tagline="Building modern web experiences while preparing for the professional world."
        sections={navItems.map((item) => ({ label: item.label, href: item.href }))}
        links={[
          { label: "Portfolio", url: "https://athsarab.me/" },
          {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/athsara-bimalka",
          },
          { label: "GitHub", url: "https://github.com/athsarabimalka" },
          { label: "Email", url: "mailto:athsarab@gmail.com" },
        ]}
      />
    </div>
  );
}
