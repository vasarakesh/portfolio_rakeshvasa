import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skillsData = [
    {
        delay: "100",
        icon: (
            <svg role="img" aria-label="Team Leadership" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-4xl text-[#127BFF]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
        ),
        title: "Team Leadership",
        description: "Experience leading development teams and coordinating cross-functional efforts to achieve project goals."
    },
    {
        delay: "200",
        icon: (
            <svg role="img" aria-label="Project Management" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-4xl text-[#127BFF]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
        ),
        title: "Project Management",
        description: "Skilled in planning, tracking, and delivering projects on time and within budget using agile methodologies."
    },
    {
        delay: "300",
        icon: (
            <svg role="img" aria-label="Communication" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-4xl text-[#127BFF]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
            </svg>
        ),
        title: "Communication",
        description: "Strong written and verbal communication skills, able to convey complex technical concepts to non-technical stakeholders."
    },
    {
        delay: "400",
        icon: (
            <svg role="img" aria-label="Problem Solving" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-4xl text-[#127BFF]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 001.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
        ),
        title: "Problem Solving",
        description: "Analytical thinker with a knack for breaking down complex problems and finding innovative solutions."
    },
    {
        delay: "500",
        icon: (
            <svg role="img" aria-label="Adaptability" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-4xl text-[#127BFF]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
        ),
        title: "Adaptability",
        description: "Quick to learn new technologies and adapt to changing requirements and environments."
    },
    {
        delay: "600",
        icon: (
            <svg role="img" aria-label="Time Management" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-4xl text-[#127BFF]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
        ),
        title: "Time Management",
        description: "Excellent organizational and prioritization skills, ensuring efficient workflow and timely delivery."
    }
];

const ProfessionalSkills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const radialGradientStyle = {
        backgroundImage: 'radial-gradient(circle, #2C2432, #352C3D)',
    };

    return (
        <section className="bg-[#0E1A25] py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold">Professional Skills</h2>
                    <div className="w-12 h-1 bg-rose-400 mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={skill.delay}
                            className="h-64 rounded-2xl bg-[#1C2838] shadow-[rgba(0,0,0,0.35)_0_6px_12px] flex flex-col items-center justify-center text-center px-6"
                        >
                            <div
                                className="w-20 h-20 flex items-center justify-center rounded-full mb-5"
                                style={radialGradientStyle}
                            >
                                {skill.icon}
                            </div>
                            <h3 className="text-white text-xl font-semibold mt-5 mb-2">{skill.title}</h3>
                            <p className="text-slate-300 text-sm leading-6">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfessionalSkills; 