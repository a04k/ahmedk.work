import Image from "next/image";
import { Container } from "@/components/ui/Container";
import DownloadBtn from "@/components/ui/DownloadBtn";

export const metadata = {
  title: "Resume",
  description:
    "Ahmed Khaled - Computer Science Student & Software Engineer Resume",
  keywords: [
    "Ahmed Khaled, resume, computer science, software engineer, developer, Cairo, Egypt",
  ],
};

export default function Resume() {
  return (
    <Container className="mt-16">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div className="flex-1">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-fustat font-extrabold title-primary">
              Ahmed Khaled
            </h1>
            <h2 className="text-base font-mono body-secondary">
              Computer Science Student & Software Engineer
            </h2>
          </div>
          <div className="mt-4 lg:mt-12">
            <DownloadBtn />
          </div>
        </div>

        {/* Education Section */}
        <div className="resumeSection">
          <h2 className="text-3xl font-bold mb-4 title-primary font-fustat">
            Education
          </h2>
          <hr className="border-zinc-200 dark:border-zinc-800 mb-8" />
          <div className="resumeItem box-gen p-6 rounded-lg">
            <div className="flex items-center gap-6 ">
              <Image
                src="/images/companies/asu.png"
                alt="Ain Shams University"
                width={64}
                height={64}
                className="rounded-lg bg-white p-2 border border-zinc-200 dark:border-zinc-700 flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-zinc-800 dark:text-zinc-200 flex flex-col lg:flex-row lg:justify-between">
                  <span>Ain Shams University</span>
                  <span className="text-lg body-secondary lg:text-xl">
                    Cairo, Egypt
                  </span>
                </h3>
                <p className="text-base md:text-base text-zinc-700 dark:text-zinc-300">
                  Pursuing a Bachelor's Degree in Computer Science
                </p>
                <p className="text-base md:text-base text-zinc-700 dark:text-zinc-300">
                  Expected Graduation: 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="resumeSection">
          <h2 className="text-3xl font-bold mb-4 title-primary font-fustat">
            Experience
          </h2>
          <hr className="border-zinc-200 dark:border-zinc-800 mb-8" />

          <div className="resumeItem box-gen p-6 rounded-lg mb-6">
            <div className="flex items-center gap-6 mb-6">
              <Image
                src="/images/companies/bm.png"
                alt="Banque Misr"
                width={64}
                height={64}
                className="rounded-lg bg-white p-2 border border-zinc-200 dark:border-zinc-700 flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-zinc-800 dark:text-zinc-200 flex flex-col lg:flex-row lg:justify-between lg:items-center">
                  <span>Banque Misr | Intern Software QA/QC Engineer</span>
                  <span className="text-lg body-secondary lg:text-xl mt-1 lg:mt-0">
                    Summer '24
                  </span>
                </h3>
              </div>
            </div>
            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
              Developed strong skills in automated & manual testing, learned
              about Agile methodologies, and various testing techniques.
              Contributed to ensuring software quality and efficiency through
              hands-on experience with industry-standard tools and processes.
            </p>
            <ul className="space-y-2">
              <li className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                • Collaborated within an Agile framework to enhance software
                quality
              </li>
              <li className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                • Automated testing processes using Cypress
              </li>
              <li className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                • Managed testing workflows using Jira and Zephyr Scale
              </li>
              <li className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                • Learned about both manual testing & automation
              </li>
            </ul>
          </div>

          <div className="resumeItem box-gen p-6 rounded-lg mb-6">
            <div className="flex items-center gap-6 mb-6">
              <Image
                src="/images/companies/cib.png"
                alt="CIB"
                width={64}
                height={64}
                className="rounded-lg bg-white p-2 border border-zinc-200 dark:border-zinc-700 flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-zinc-800 dark:text-zinc-200 flex flex-col lg:flex-row lg:justify-between lg:items-center">
                  <span>CIB | Internship Trainee</span>
                  <span className="text-lg body-secondary lg:text-xl mt-1 lg:mt-0">
                    Summer '24
                  </span>
                </h3>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                • Explored Topics such as Data Literacy, Data Analytics &
                Cybersecurity
              </li>
              <li className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                • Learned About the Digital Transformation at CIB
              </li>
              <li className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                • Gained knowledge around fintech and banking sector operations
              </li>
            </ul>
          </div>

          <div className="resumeItem box-gen p-6 rounded-lg mb-6">
            <div className="flex items-center gap-6 mb-6">
              <Image
                src="/images/companies/osc.png"
                alt="Open Source Community"
                width={64}
                height={64}
                className="rounded-lg bg-white p-2 border border-zinc-200 dark:border-zinc-700 flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
                  Open Source Community FCIS | Web Dev. Team Member
                </h3>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                • Delivered multiple sessions and lectures on various web
                development topics
              </li>
              <li className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                • Contributed to the development of a community web app using
                the MERN Stack
              </li>
              <li className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                • Worked closely with developers from various teams to ensure
                project success
              </li>
            </ul>
          </div>

          <div className="resumeItem box-gen p-6 rounded-lg">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                F
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
                  Freelance Graphic Design
                </h3>
              </div>
            </div>
            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
              Worked on creating many designs for multiple clients (Mostly
              gaming community-related)
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="resumeSection">
          <h2 className="text-3xl font-bold mb-4 title-primary font-fustat">
            Projects
          </h2>
          <hr className="border-zinc-200 dark:border-zinc-800 mb-8" />

          <div className="resumeItem box-gen p-6 rounded-lg mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-zinc-800 dark:text-zinc-200 flex flex-col lg:flex-row lg:justify-between lg:items-center">
              <span>Repai</span>
              <span className="text-lg body-secondary lg:text-xl mt-1 lg:mt-0">
                Finalist @ Google GDG Finance AI Hackathon
              </span>
            </h3>
            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
              An AI-powered recycling platform that incentivizes eco-friendly
              behavior through cashback rewards on a digital wallet. The app
              uses real-time object detection to identify recyclables, calculate
              value, and facilitate convenient collection or redemption.
            </p>
            <ul className="space-y-2">
              <li className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                • Used Image Detection & Google Gemini for object detection of
                recyclable materials
              </li>
              <li className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                • Assigned real-time, market-based value to scanned items based
                on materials, size & more
              </li>
              <li className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                • Enabled cashback accumulation and redemption through
                eco-partner locations or collector pickups
              </li>
              <li className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                • Promoted sustainable habits through AI-driven automation and
                user rewards
              </li>
            </ul>
          </div>

          <div className="resumeItem box-gen p-6 rounded-lg mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-zinc-800 dark:text-zinc-200 flex flex-col lg:flex-row lg:justify-between lg:items-center">
              <span>Orbit</span>
              <span className="text-lg body-secondary lg:text-xl mt-1 lg:mt-0">
                NASA SPACE APPS 2024
              </span>
            </h3>
            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
              A NASA Space Apps 2024 3D Web App (Built using Next.js + The
              powerful Three.js library) which brings space exploration to the
              masses, made with the classroom in mind, Orbit provides a unique
              interactive experience for students and hobbyists to explore the
              solar system with its planets, moons and asteroids while also
              having quests, achievements and medals for users to unlock and an
              AI powered chat buddy to interact with and answer questions to
              boost and enhance the learning experience.
            </p>
            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-3 leading-relaxed">
              Built an AI chatbot app using Gemini 2.0 Flash, Contributed to
              mapping the planets & their orbits using complex equations,
              rendering them using Three.JS, adding description screens and
              labels to the celestial bodies and scene controls.
            </p>
            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
              Received a Galactic Problem Solver certificate as recognition for
              the effort.
            </p>
          </div>

          <div className="resumeItem box-gen p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-zinc-800 dark:text-zinc-200 flex flex-col lg:flex-row lg:justify-between lg:items-center">
              <span>NAVERIS</span>
              <span className="text-lg body-secondary lg:text-xl mt-1 lg:mt-0">
                NASA SPACE APPS 2023
              </span>
            </h3>
            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-3 leading-relaxed">
              A NASA Space Apps 2023 AI project that predicts natural disasters
              intensity and possible path using the latest satellite data and
              gives early warnings to potentially affected regions.
            </p>
            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-3 leading-relaxed">
              Contributed to designing the interface, gathering and mapping data
              obtained from the model's output.
            </p>
            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
              Received a Galactic Problem Solver certificate as recognition for
              the effort.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="resumeSection">
          <h2 className="text-3xl font-bold mb-4 title-primary font-fustat">
            Skills & Abilities
          </h2>
          <hr className="border-zinc-200 dark:border-zinc-800 mb-8" />
          <div className="resumeItem box-gen p-6 rounded-lg">
            <div className="space-y-4">
              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Programming:
                </span>{" "}
                Proficient in JavaScript, TypeScript, React.js, Next.js,
                Angular, Tailwind CSS, Bootstrap, Node.js, MongoDB, SQL, Python,
                C, C++, PHP, Go, Java
              </p>
              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Software Testing:
                </span>{" "}
                Cypress, Selenium (basics), Manual (HLS, Test Cases..), Zephyr
              </p>
              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Version Control:
                </span>{" "}
                Git, GitHub, GitLab
              </p>
              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Agile Methodology:
                </span>{" "}
                Knowledgeable in Agile practices and work environments
              </p>
              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Graphic Design/UI:
                </span>{" "}
                Adobe Photoshop, Adobe Illustrator & Figma
              </p>
              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Soft Skills:
                </span>{" "}
                Quick learner with strong adaptability, problem-solving
                abilities, and effective communication skills
              </p>
            </div>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="resumeSection">
          <h2 className="text-3xl font-bold mb-4 title-primary font-fustat">
            Hobbies
          </h2>
          <hr className="border-zinc-200 dark:border-zinc-800 mb-8" />
          <div className="resumeItem box-gen p-6 rounded-lg">
            <div className="space-y-4">
              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Programming:
                </span>{" "}
                I mostly do fun projects to challenge myself and learn.
              </p>
              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Motorsport:
                </span>{" "}
                Passionate about everything motorsports, especially Formula 1.
              </p>
              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Gaming:
                </span>{" "}
                A bit of competitive fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
