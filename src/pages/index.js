import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const modules = [
  {
    title: 'The Robotic Nervous System (ROS 2)',
    description: 'Nodes, topics, URDF',
    icon: '🧠',
  },
  {
    title: 'The Digital Twin (Gazebo & Unity)',
    description: 'Isaac Sim + Nav2',
    icon: '🤖',
  },
  {
    title: 'Vision-Language-Action (VLA)',
    description: 'Whisper + LLM planning',
    icon: '👁️',
  },
  {
    title: 'Control Systems & Dynamics',
    description: 'PID, MPC, trajectory planning',
    icon: '⚙️',
  },
  {
    title: 'Embodied Intelligence',
    description: 'Learning, adaptation, autonomy',
    icon: '🦾',
  },
];

const hardwareRequirements = [
    'Digital Twin Workstation',
    'Physical AI Edge Kit',
    'Robot Lab Options',
];

const learningOutcomes = [
    'Physical AI fundamentals',
    'ROS 2 mastery',
    'Simulation workflows',
    'Humanoid robotics',
    'VLA systems',
    'Sim-to-real',
];

const gettingStartedSteps = [
    {
        title: 'Set up Development Environment',
        description: 'Install ROS 2, Gazebo, and required dependencies',
        icon: '💻',
    },
    {
        title: 'Configure Hardware',
        description: 'Connect and configure your humanoid robot platform',
        icon: '⚙️',
    },
    {
        title: 'Run First Simulation',
        description: 'Launch your first robot simulation in Gazebo',
        icon: '🧪',
    },
    {
        title: 'Deploy to Hardware',
        description: 'Connect your code to the physical robot',
        icon: '🤖',
    },
];

const weeklyBreakdown = [
    {
        week: 'Week 1-3',
        title: 'Foundation & Setup',
        topics: ['ROS 2 basics', 'Environment setup', 'Simulation fundamentals'],
    },
    {
        week: 'Week 4-6',
        title: 'Navigation & Control',
        topics: ['Path planning', 'Motion control', 'Sensor integration'],
    },
    {
        week: 'Week 7-9',
        title: 'Perception & AI',
        topics: ['Computer vision', 'Machine learning', 'VLA systems'],
    },
    {
        week: 'Week 10-12',
        title: 'Integration & Deployment',
        topics: ['Hardware integration', 'Real-world testing', 'Project development'],
    },
];

const assessments = [
    {
        title: 'Quizzes',
        description: 'Weekly knowledge checks',
        icon: '📝',
        type: 'formative',
    },
    {
        title: 'Projects',
        description: 'Hands-on implementation tasks',
        icon: '⚙️',
        type: 'summative',
    },
    {
        title: 'Simulations',
        description: 'Virtual environment tests',
        icon: '🎮',
        type: 'practical',
    },
    {
        title: 'Peer Reviews',
        description: 'Collaborative evaluation',
        icon: '👥',
        type: 'collaborative',
    },
];

const additionalResources = [
    {
        title: 'Documentation',
        description: 'Complete API reference and guides',
        icon: '📚',
        link: '/docs/intro',
    },
    {
        title: 'Community Forum',
        description: 'Connect with other learners',
        icon: '💬',
        link: '#',
    },
    {
        title: 'GitHub Repo',
        description: 'Access source code and contribute',
        icon: '🐙',
        link: 'https://github.com/Mariya1255/my-docusaurus-book',
    },
    {
        title: 'Video Tutorials',
        description: 'Step-by-step visual guides',
        icon: '🎥',
        link: '#',
    },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, 'hero-container')}>
      <div className="container">
        <div className="hero-content">
            <div>
                <Heading as="h1" className="hero__title">
                Physical AI & Humanoid Robotics
                </Heading>
                <p className="hero__subtitle">{`"Where Intelligence Becomes Physical."`}</p>
                <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                    Get Started
                </Link>
                <Link
                    className="button button--secondary button--lg"
                    to="#modules">
                    Explore Modules
                </Link>
                <Link
                    className="button button--secondary button--lg"
                    to="https://github.com/Mariya1255/my-docusaurus-book">
                    View on GitHub
                </Link>
                </div>
            </div>
            <div className="hero-stats">
                <div className="stat-item">
                    <span>13 weeks</span>
                </div>
                <div className="stat-item">
                    <span>4 Modules</span>
                </div>
                <div className="stat-item">
                    <span>ROS2. Gazebo.Isaac</span>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}

function ModulesSection() {
    return (
        <section id="modules" className={styles.modules}>
            <div className="container">
                <div className="row">
                    <div className="col col--12">
                        <Heading as="h2" className="text--center modules-title">Modules</Heading>
                    </div>
                </div>
                <div className="modules-grid">
                    {modules.map((module, idx) => (
                        <div key={idx} className="card-demo">
                            <div className="card">
                                <div className="card__header">
                                    <h3>
                                        <span className="card-icon">{module.icon}</span>
                                        {module.title}
                                    </h3>
                                </div>
                                <div className="card__body">
                                    <p>{module.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function HardwareSection() {
    return(
        <section id="hardware" className={styles.hardware}>
            <div className="container">
                <div className="row">
                    <div className="col col--12">
                        <Heading as="h2" className="text--center hardware-title">Hardware Requirements</Heading>
                    </div>
                </div>
                <div className="hardware-grid">
                    <div className="hardware-column">
                        <h3>Essential Hardware</h3>
                        {hardwareRequirements.slice(0, 2).map((item, idx) => (
                            <div key={idx} className="hardware-item">
                                <span className="hardware-icon">🔧</span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="hardware-column">
                        <h3>Optional Components</h3>
                        {hardwareRequirements.slice(2).map((item, idx) => (
                            <div key={idx} className="hardware-item">
                                <span className="hardware-icon">⚙️</span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function AssessmentsSection() {
    return(
        <section id="assessments" className={styles.assessments}>
            <div className="container">
                <div className="row">
                    <div className="col col--12">
                        <Heading as="h2" className="text--center assessments-title">Assessments</Heading>
                    </div>
                </div>
                <div className="assessments-grid">
                    {assessments.map((assessment, idx) => (
                        <div key={idx} className="assessment-card">
                            <div className="assessment-header">
                                <span className="assessment-icon">{assessment.icon}</span>
                                <h3>{assessment.title}</h3>
                            </div>
                            <p className="assessment-description">{assessment.description}</p>
                            <span className="assessment-type">{assessment.type}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function WeeklyBreakdownSection() {
    return(
        <section id="weekly-breakdown" className={styles.weeklyBreakdown}>
            <div className="container">
                <div className="row">
                    <div className="col col--12">
                        <Heading as="h2" className="text--center weekly-breakdown-title">Weekly Breakdown</Heading>
                    </div>
                </div>
                <div className="timeline-container">
                    {weeklyBreakdown.map((week, idx) => (
                        <div key={idx} className="timeline-item">
                            <div className="timeline-step">
                                <div className="timeline-week">{week.week}</div>
                                <div className="timeline-content">
                                    <h3>{week.title}</h3>
                                    <ul className="week-topics">
                                        {week.topics.map((topic, topicIdx) => (
                                            <li key={topicIdx}>{topic}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {idx < weeklyBreakdown.length - 1 && (
                                <div className="timeline-connector"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function GettingStartedSection() {
    return(
        <section id="getting-started" className={styles.gettingStarted}>
            <div className="container">
                <div className="row">
                    <div className="col col--12">
                        <Heading as="h2" className="text--center getting-started-title">Getting Started</Heading>
                    </div>
                </div>
                <div className="timeline-container">
                    {gettingStartedSteps.map((step, idx) => (
                        <div key={idx} className="timeline-item">
                            <div className="timeline-step">
                                <div className="timeline-icon">{step.icon}</div>
                                <div className="timeline-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                            {idx < gettingStartedSteps.length - 1 && (
                                <div className="timeline-connector"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AdditionalResourcesSection() {
    return(
        <section id="additional-resources" className={styles.additionalResources}>
            <div className="container">
                <div className="row">
                    <div className="col col--12">
                        <Heading as="h2" className="text--center resources-title">Additional Resources</Heading>
                    </div>
                </div>
                <div className="resources-grid">
                    {additionalResources.map((resource, idx) => (
                        <Link key={idx} to={resource.link} className="resource-card">
                            <div className="resource-header">
                                <span className="resource-icon">{resource.icon}</span>
                                <h3>{resource.title}</h3>
                            </div>
                            <p className="resource-description">{resource.description}</p>
                            <span className="resource-link">Explore →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

function LearningOutcomesSection() {
    return(
        <section id="learning-outcomes" className={styles.learningOutcomes}>
            <div className="container">
                <div className="row">
                    <div className="col col--12">
                        <Heading as="h2" className="text--center learning-outcomes-title">Learning Outcomes</Heading>
                    </div>
                </div>
                <div className="learning-outcomes-grid">
                     {learningOutcomes.map((item, idx) => (
                        <div key={idx} className="learning-outcome-item">
                            <div className="learning-outcome-content">
                                <span className="outcome-icon">✓</span>
                                <p>{item}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Physical AI & Humanoid Robotics`}
      description="An Open Source Book on Physical AI & Humanoid Robotics">
      <HomepageHeader />
      <main>
        <ModulesSection />
        <GettingStartedSection />
        <WeeklyBreakdownSection />
        <AssessmentsSection />
        <LearningOutcomesSection />
        <HardwareSection />
        <AdditionalResourcesSection />
      </main>
    </Layout>
  );
}
