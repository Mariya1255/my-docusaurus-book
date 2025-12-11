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
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Reading
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