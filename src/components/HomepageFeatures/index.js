import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Module 1: The Robotic Nervous System (ROS 2)',
    icon: '🧠',
    description: (
      <>
        Learn the fundamentals of the Robot Operating System (ROS 2), including nodes, topics, services, and actions. Master Python (rclpy) integration and build URDF models for humanoid robots.
      </>
    ),
  },
  {
    title: 'Module 2: The Digital Twin (Gazebo & Unity)',
    icon: '🤖',
    description: (
      <>
        Create realistic simulations of your robots and environments. This module covers physics simulation, environment building, and sensor integration for LiDAR, depth cameras, and IMUs.
      </>
    ),
  },
  {
    title: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
    icon: '💡',
    description: (
      <>
        Dive into the NVIDIA Isaac ecosystem for advanced robotics. You'll work with Isaac Sim and Isaac ROS for path planning (Nav2), VSLAM, and navigation.
      </>
    ),
  },
  {
    title: 'Module 4: Vision-Language-Action (VLA)',
    icon: '🗣️',
    description: (
      <>
        Implement cutting-edge AI models for human-robot interaction. This includes voice-to-action with Whisper, LLM-based task planning, and multi-modal interactions.
      </>
    ),
  },
];

function Feature({title, icon, description}) {
  return (
    <div className={clsx('col col--3', styles.feature)}>
      <div className="card">
        <div className="card__header">
          <h3>{icon} {title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}