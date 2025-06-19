'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Material-UI', 'Bootstrap'],
    icon: '🎨'
  },
  {
    name: 'Backend Development',
    skills: ['Python', 'Rust', 'Java', 'Node.js', 'Express.js', 'Flask', 'Django', 'RESTful APIs', 'GraphQL'],
    icon: '⚙️'
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Ansible'],
    icon: '☁️'
  },
  {
    name: 'Security Tools',
    skills: ['Nessus', 'Splunk', 'Wireshark', 'Metasploit', 'Burp Suite', 'OWASP ZAP', 'Nmap', 'Snort', 'Kali Linux'],
    icon: '🔒'
  },
  {
    name: 'Data & Analytics',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
    icon: '📊'
  },
  {
    name: 'Security Domains',
    skills: ['Network Security', 'Application Security', 'Cloud Security', 'Identity & Access Management', 'Threat Modeling', 'Incident Response', 'Vulnerability Assessment', 'Security Architecture', 'Risk Management'],
    icon: '🛡️'
  },
  {
    name: 'Compliance & Standards',
    skills: ['NIST', 'HIPAA', 'ISO 27001', 'SOC 2', 'PCI DSS', 'GDPR', 'CCPA', 'CIS Controls', 'Zero Trust'],
    icon: '📜'
  },
  {
    name: 'Soft Skills',
    skills: ['Technical Leadership', 'Project Management', 'Team Collaboration', 'Problem Solving', 'Communication', 'Documentation', 'Training & Mentoring', 'Research', 'Strategic Planning'],
    icon: '🤝'
  }
];

const certifications = [
  {
    name: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-SAP-123456',
    badge: '🏆',
    description: 'Advanced expertise in designing distributed systems and architecting AWS solutions.'
  },
  {
    name: 'CISSP (Certified Information Systems Security Professional)',
    issuer: 'ISC²',
    date: '2024',
    credentialId: 'CISSP-789012',
    badge: '🔐',
    description: 'Comprehensive knowledge of information security concepts and best practices.'
  },
  {
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: '2023',
    credentialId: 'CEH-345678',
    badge: '🛡️',
    description: 'Expertise in ethical hacking methodologies and security assessment techniques.'
  },
  {
    name: 'Google Cloud Professional Security Engineer',
    issuer: 'Google Cloud',
    date: '2024',
    credentialId: 'GCP-901234',
    badge: '☁️',
    description: 'Specialized in designing and implementing secure GCP infrastructure.'
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2023',
    credentialId: 'COMP-567890',
    badge: '🔒',
    description: 'Foundation in cybersecurity concepts, tools, and procedures.'
  },
  {
    name: 'OSCP (Offensive Security Certified Professional)',
    issuer: 'Offensive Security',
    date: '2024',
    credentialId: 'OSCP-234567',
    badge: '⚔️',
    description: 'Advanced penetration testing skills and hands-on security expertise.'
  }
];

const technicalExperience = [
  {
    title: 'Cloud Security Architecture',
    description: 'Designed and implemented secure cloud infrastructure on AWS and GCP, including IAM policies, VPC configurations, and security monitoring solutions.',
    technologies: ['AWS IAM', 'GCP Security', 'CloudTrail', 'CloudWatch', 'Security Groups', 'WAF', 'KMS', 'CloudHSM']
  },
  {
    title: 'Application Security',
    description: 'Led security assessments of web and mobile applications, implemented secure SDLC practices, and conducted code reviews for security vulnerabilities.',
    technologies: ['OWASP Top 10', 'Static Analysis', 'Dynamic Analysis', 'Secure Coding', 'API Security', 'Authentication/Authorization']
  },
  {
    title: 'Security Operations',
    description: 'Managed SOC operations, implemented SIEM solutions, and developed incident response procedures for enterprise environments.',
    technologies: ['Splunk', 'QRadar', 'ELK Stack', 'SOAR', 'Threat Intelligence', 'Log Analysis', 'Security Metrics']
  },
  {
    title: 'DevSecOps Implementation',
    description: 'Integrated security into CI/CD pipelines, automated security testing, and established secure container orchestration practices.',
    technologies: ['Jenkins', 'GitLab CI', 'Docker Security', 'Kubernetes Security', 'Infrastructure as Code', 'Compliance as Code']
  },
  {
    title: 'Identity & Access Management',
    description: 'Implemented Zero Trust architecture, managed IAM solutions, and designed authentication systems for enterprise applications.',
    technologies: ['OAuth 2.0', 'OIDC', 'SAML', 'MFA', 'SSO', 'Privileged Access Management', 'Directory Services']
  },
  {
    title: 'Network Security',
    description: 'Designed secure network architectures, implemented security controls, and conducted network security assessments.',
    technologies: ['Firewalls', 'IDS/IPS', 'VPN', 'Network Segmentation', 'DLP', 'SSL/TLS', 'Zero Trust Network']
  }
];

export default function Skills() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Skills & Expertise</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Specialized in cybersecurity, cloud architecture, and secure software development with a focus on implementing robust security solutions across modern technology stacks.
          </p>

          {/* Skills Categories */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Technical Skills</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Professional Certifications</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">{cert.badge}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                      <p className="text-gray-600 mb-1">{cert.issuer}</p>
                      <p className="text-sm text-gray-500 mb-2">Issued: {cert.date}</p>
                      <p className="text-sm text-gray-600 mb-2">{cert.description}</p>
                      <p className="text-xs text-gray-400">Credential ID: {cert.credentialId}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Technical Experience */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Technical Expertise</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {technicalExperience.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{exp.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-green-50 text-green-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
} 