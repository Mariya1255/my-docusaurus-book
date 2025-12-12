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

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, 'hero-container')}>
      <div className="container">
        <div className="hero-content">
            <div>
                <Heading as="h1" className="hero__title">
                Physical AI & Humanoid R0botics
                </Heading>
                <p className="hero__subtitle">{`"Where Intelligence Becomes Physical."`}</p>
                <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                    Start the Course
                </Link>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                    Read the Textbook
                </Link>
                <Link
                    className="button button--secondary button--lg"
                    to="#modules">
                    Explore Modules
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
                        <Heading as="h2" className="text--center">Modules</Heading>
                    </div>
                </div>
                <div className="row">
                    {modules.map((module, idx) => (
                        <div key={idx} className="col col--4">
                            <div className="card-demo">
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
                        <Heading as="h2" className="text--center">Hardware Requirements</Heading>
                    </div>
                </div>
                <div className="row">
                    {hardwareRequirements.map((item, idx) => (
                        <div key={idx} className="col col--4">
                            <div className="info-card">
                                <p>{item}</p>
                            </div>
                        </div>
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
                        <Heading as="h2" className="text--center">Learning Outcomes</Heading>
                    </div>
                </div>
                <div className="row">
                     {learningOutcomes.map((item, idx) => (
                        <div key={idx} className="col col--4">
                            <div className="info-card">
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
        <HardwareSection />
        <LearningOutcomesSection />
      </main>
    </Layout>
  );
}