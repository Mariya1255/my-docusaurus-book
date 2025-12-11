import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Humanoid Robotics: A Comprehensive Guide</h1>
        <p className="hero__subtitle">
          This book provides an in-depth exploration of humanoid robotics, covering foundational concepts,
          core technologies like ROS2 and digital twins, advanced AI applications such as VLA,
          and practical simulation techniques. Dive into the world of physical AI and
          discover the future of robotics with detailed insights and practical guidance.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Reading 📖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to the ${siteConfig.title}`}
      description="An Open Source Book on Physical AI & Humanoid Robotics">
      <HomepageHeader />
      <main>
        <div className="container">
          <div className="row">
            <div className={clsx('col col--12')}>
              <div className="text--center padding-horiz--md">
                <Heading as="h2">Welcome</Heading>
                <p>This book is an open-source guide to the exciting world of physical AI and humanoid robotics. It's designed for a 13-week course, covering everything from the basics of ROS 2 to advanced topics like Isaac Sim and Vision-Language-Action models. We hope you enjoy it!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}