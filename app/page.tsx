import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'; // Import icons

export default function Home() {
  const resumeData = {
    // Your resume data
    name: 'Your Name',
    title: 'Your Title',
    email: 'your.email@example.com',
    phone: '123-456-7890',
    location: 'Your City, State',
    github: 'yourusername',
    linkedin: 'yourprofile',
    summary: 'A brief summary about you...',
    experience: [
      {
        title: 'Job Title',
        company: 'Company Name',
        dates: '2020 - Present',
        description: 'Responsibilities and achievements...',
      },
      // ... more experiences
    ],
    education: [
      {
        degree: 'Degree Name',
        university: 'University Name',
        dates: '2016 - 2020',
      },
      // ... more education
    ],
    skills: ['JavaScript', 'React', 'Next.js' /* ... */],
  };

  return (
    <div className="container mx-auto p-8">
      {' '}
      {/* Tailwind classes for centering and padding */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">{resumeData.name}</h1>
        <h2 className="text-xl">{resumeData.title}</h2>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        {' '}
        {/* Contact Info */}
        <a href={`mailto:${resumeData.email}`}>
          <FaEnvelope /> {resumeData.email}
        </a>
        <a href={`tel:${resumeData.phone}`}>
          <FaPhone /> {resumeData.phone}
        </a>
        <span>
          <FaMapMarkerAlt /> {resumeData.location}
        </span>
        <a
          href={`https://github.com/${resumeData.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={`https://www.linkedin.com/in/${resumeData.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
      {/* Summary */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Summary</h2>
        <p>{resumeData.summary}</p>
      </div>
      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">
              {exp.company} | {exp.dates}
            </p>
            <ul className="list-disc ml-6">
              {exp.description.split('\n').map(
                (
                  point,
                  i, // Handle multi-line descriptions
                ) => (
                  <li key={i}>{point}</li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
      {/* Education */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">
              {edu.university} | {edu.dates}
            </p>
          </div>
        ))}
      </div>
      {/* Skills */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <ul className="list-disc ml-6">
          {resumeData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{' '}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
