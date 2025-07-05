"use client";
import React, { useState, useEffect } from "react";

<<<<<<< HEAD
// --- Ikon SVG ---
const Github = (props: any) => (
=======
const Github = (props) => (
>>>>>>> 657c835f7ca9e6018f453782fe7fcc88444f0a7d
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const Mail = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const ExternalLink = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const ArrowUp = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </svg>
);
const Menu = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const X = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
<<<<<<< HEAD
// --- Ikon Baru untuk Bagian "Tentang Saya" ---
const CodeIcon = (props: any) => (
=======
const CodeIcon = (props) => (
>>>>>>> 657c835f7ca9e6018f453782fe7fcc88444f0a7d
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const PuzzleIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 7V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4a2 2 0 0 1-2-2z" />
  </svg>
);
const HandshakeIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14.5 16.5 12 14l-2.5 2.5" />
    <path d="m2 14 3-3 3 3" />
    <path d="M13 22V14l-2.5-2.5-3 3-2-2-3-3-3 3 3 3 2 2 3-3" />
    <path d="M19 14V8l-3-3-3 3" />
    <path d="m22 12-3-3-3 3" />
  </svg>
);

// --- Hook & Komponen Tambahan ---

// Hook untuk Efek Ketik
const useTypingEffect = (text, speed = 100) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);
    return () => clearInterval(typingInterval);
  }, [text, speed]);
  return displayedText;
};

const AnimatedSection = ({ children, className = "" }) => {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`${className} transition-opacity duration-1000 ease-in ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-5"
      }`}
    >
      {children}
    </section>
  );
};

// --- Komponen Utama ---
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolioData = {
    name: "Asgar Fatwahyudi",
    headline: "JJunior Web Developer",
    photoPlaceholder: "AF",
    about: {
      bio: "Saya adalah seorang Full-Stack Web Developer dari Kendari, Indonesia, dengan fokus pada pembuatan aplikasi web yang modern dan responsif. Menggabungkan keahlian mendalam pada ekosistem JavaScript dan PHP, saya mampu membangun solusi digital end-to-end yang solid dan efisien.",
      highlights: [
        {
          icon: "CodeIcon",
          title: "Pengembangan End-to-End",
          description:
            "Mengubah ide menjadi produk jadi, dari desain antarmuka hingga logika backend yang kompleks.",
        },
        {
          icon: "PuzzleIcon",
          title: "Pemecah Masalah",
          description:
            "Menikmati tantangan untuk menemukan solusi yang bersih dan efisien untuk masalah teknis yang rumit.",
        },
        {
          icon: "HandshakeIcon",
          title: "Terbuka untuk Kolaborasi",
          description:
            "Aktif mencari peluang freelance, posisi full-time, dan kolaborasi dalam proyek open source.",
        },
      ],
    },
    contact: {
      email: "afatwahyudi@gmail.com",
      github: "https://github.com/Asgarnet11",
    },
    skills: [
      {
        category: "Bahasa Pemrograman",
        items: ["JavaScript", "PHP"],
      },
      {
        category: "Frontend",
        items: ["Next.js", "React", "Tailwind CSS", "HTML5", "CSS3"],
      },
      { category: "Backend", items: ["Laravel 12", "Express.js", "Node.js"] },
      { category: "Database", items: ["PostgreSQL", "MySQL"] },
      {
        category: "Tools & Deployment",
        items: ["Cpanel", "GitHub", "Docker", "Vercel"],
      },
    ],
    projects: [
      {
        title: "Galeri Kenangan KKP",
        description:
          "Sebuah aplikasi web galeri foto interaktif yang memungkinkan pengguna untuk mengunggah, melihat, dan berinteraksi dengan album kenangan. Proyek ini dibuat untuk mendokumentasikan momen-momen selama kegiatan Kuliah Kerja Profesi (KKP).",
        challenge:
          "Tantangannya adalah membangun antarmuka yang responsif dan cepat untuk menampilkan banyak gambar tanpa mengorbankan performa",
        technologies: ["Next.js", "Tailwind CSS", "React"],
        liveDemo: "https://galery-kenangan-kkp1.vercel.app/",
        sourceCode: "https://github.com/Asgarnet11/galery-kenangan-kkp.git",
        imageUrl: "/photo/project1.png",
      },
      {
        title: "Sistem Informasi Pelaporan Narkoba",
        description:
          "Sebuh Portal Masyarakat Untuk Pengaduan Masyarakat Yang aman dengan pengelolaan klasfikasi laporan yang tersusun rapih dan membuat petugas mampu mengelola laporan dengan mudah, cepat, dan tepat",
        challenge:
          "Tantangannya adalah membangun antarmuka yang responsif dan cepat untuk menampilkan banyak gambar tanpa mengorbankan performa",
        technologies: ["Laravel", "Tailwind CSS"],
        liveDemo: "https://si-lapor.project-site.my.id/",
        sourceCode: "https://github.com/Asgarnet11/Pengaduan-narkoba.git",
        imageUrl: "/photo/project2.png",
      },
      {
        title: "Sistem Informasi Pelaporan Narkoba",
        description:
          "Sistem Informasi Pertanian Untuk Masyarakat Kelurahan Unaasi yang bergerak di bidang pertanian yang kedepanya mungkin akan lebih banyak fitur yang dapat di kembangkan",
        challenge:
          "Tantangannya adalah membangun antarmuka yang responsif dan cepat Serta mengembangkan beberapa fitur yang di tampilkan dengan SEO",
        technologies: ["Laravel", "Tailwind CSS"],
        liveDemo: "https://agriunaasi.project-site.my.id/",
        sourceCode: "https://github.com/Asgarnet11/Sistem-Pertanian.git",
        imageUrl: "/photo/project3.png",
      },
    ],
  };

  const navLinks = [
    { href: "#about", label: "Tentang" },
    { href: "#skills", label: "Keahlian" },
    { href: "#projects", label: "Proyek" },
    { href: "#contact", label: "Kontak" },
  ];

  const highlightIcons = {
    CodeIcon,
    PuzzleIcon,
    HandshakeIcon,
  };

  const animatedHeadline = useTypingEffect(portfolioData.headline, 50);

  return (
    <>
      {/* CSS & Style Global */}
      <style>{`
                html { scroll-behavior: smooth; }
                @keyframes typing-cursor {
                    from { border-right-color: rgba(192, 132, 252, 1); }
                    to { border-right-color: transparent; }
                }
                .typing-cursor {
                    border-right: 3px solid rgba(192, 132, 252, 1);
                    animation: typing-cursor 0.8s infinite;
                }
                .staggered-fade-in {
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeIn 0.8s forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

      <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed">
        {/* --- Navbar --- */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-gray-900/80 backdrop-blur-sm shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a
              href="#hero"
              className="text-xl font-bold text-white hover:text-purple-400 transition-colors"
            >
              RA.
            </a>
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </header>

        {/* --- Mobile Menu --- */}
        <div
          className={`fixed inset-0 bg-gray-900 z-50 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:hidden`}
        >
          <div className="flex justify-end p-6">
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <X size={30} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl text-gray-300 hover:text-purple-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <main className="container mx-auto px-6 py-12 pt-24 md:py-20 md:pt-32">
          {/* --- Hero Section --- */}
          <section
            id="hero"
            className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[70vh]"
          >
            <div className="md:w-3/5 text-center md:text-left mt-10 md:mt-0">
              <h1 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">
                {portfolioData.name}
              </h1>
              <h2 className="text-2xl md:text-2xl font-light text-purple-300 mb-3 h-16 md:h-16">
                <span className="typing-cursor">{animatedHeadline}</span>
              </h2>
              <p className="max-w-xl text-gray-400 mb-5 text-base md:text-lg">
                Membangun aplikasi web yang fungsional dan modern dari ide
                hingga ke tahap deployment.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Hubungi Saya
                </a>
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Github className="h-8 w-8" />
                </a>
              </div>
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gray-800 border-4 border-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="text-6xl md:text-7xl font-bold text-gray-500">
                {portfolioData.photoPlaceholder}
              </span>
            </div>
          </section>

          <div className="space-y-24 md:space-y-32 mt-24 md:mt-16">
            {/* --- Bagian "Tentang Saya" yang Diperbarui --- */}
            <AnimatedSection className="pt-20" id="about">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Tentang Saya
              </h3>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center mb-16">
                {portfolioData.about.bio}
              </p>

              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {portfolioData.about.highlights.map((highlight, index) => {
                  const Icon = highlightIcons[highlight.icon];
                  return (
                    <div
                      key={index}
                      className="bg-gray-800/80 p-6 rounded-lg border border-gray-700/50 text-center transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-2 staggered-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex justify-center mb-4">
                        <div className="bg-purple-600/20 p-4 rounded-full">
                          <Icon className="text-purple-400 h-8 w-8" />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>

            <AnimatedSection className="pt-20" id="skills">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Keahlian & Teknologi
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {portfolioData.skills.map((skillCategory) => (
                  <div
                    key={skillCategory.category}
                    className="bg-gray-800 p-6 rounded-lg border border-gray-700/50 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1"
                  >
                    <h4 className="text-lg font-bold text-purple-400 mb-4">
                      {skillCategory.category}
                    </h4>
                    <ul className="space-y-2">
                      {skillCategory.items.map((item) => (
                        <li key={item} className="text-gray-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="pt-20" id="projects">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Proyek Unggulan
              </h3>
              <div className="space-y-16">
                {portfolioData.projects.map((project, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center bg-gray-800/40 p-6 md:p-8 rounded-lg border border-gray-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 hover:-translate-y-2"
                  >
                    <div
                      className={`md:col-span-2 ${
                        index % 2 === 0 ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={project.imageUrl}
                          alt={`Screenshot dari proyek ${project.title}`}
                          className="rounded-lg shadow-lg w-full h-auto object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://placehold.co/600x400/1a202c/9f7aea?text=Image+Not+Found";
                          }}
                        />
                      </a>
                    </div>
                    <div
                      className={`md:col-span-3 ${
                        index % 2 === 0 ? "md:order-2" : "md:order-1"
                      }`}
                    >
                      <h4 className="text-2xl font-bold text-purple-400 mb-2">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <p className="text-gray-400 mb-4">
                        <strong className="text-gray-200">Tantangan:</strong>{" "}
                        {project.challenge}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-700 text-purple-300 text-sm font-medium px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 duration-300"
                        >
                          Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-400 hover:text-white font-semibold py-2 px-4 border border-gray-600 rounded-lg transition-colors duration-300 hover:bg-gray-700"
                        >
                          Source Code <Github className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </main>

        {/* --- Footer & Kontak --- */}
        <footer className="text-center py-8 mt-16 md:mt-24">
          <AnimatedSection id="contact" className="pt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mari Berkolaborasi
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 px-4">
              Saya tertarik dengan berbagai macam proyek. Jika Anda memiliki ide
              yang ingin diwujudkan, jangan ragu untuk menghubungi saya.
            </p>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-purple-400 hover:text-purple-300 text-xl font-mono transition-colors duration-300 break-all px-4"
            >
              {portfolioData.contact.email}
            </a>
          </AnimatedSection>
          <div className="border-t border-gray-800 pt-6 mt-16">
            <p className="text-gray-500">
              Didesain dan Dibangun oleh Asgar Fatwahyudi&copy;{""}
              {new Date().getFullYear()}
            </p>
          </div>
        </footer>

        {/* --- Tombol Scroll to Top --- */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Kembali ke atas"
        >
          <ArrowUp />
        </button>
      </div>
    </>
  );
}
