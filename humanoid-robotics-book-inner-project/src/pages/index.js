import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

// Import DocSidebar and related components
import DocSidebar from '@theme/DocSidebar';
import { useLocation } from '@docusaurus/router';
import sidebarItems from '../../sidebars'; // Path relative to index.js

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Welcome to the "Physical AI & Humanoid Robotics Book"! This open-source guide delves into the fascinating convergence of physical artificial intelligence and humanoid robotics. Designed for a 13-week comprehensive course, it covers fundamental concepts like ROS 2 and digital twins, and progresses to advanced topics such as NVIDIA Isaac Sim and cutting-edge Vision-Language-Action (VLA) models. Embark on a journey to understand how robots perceive, reason, and interact with the real world, paving the way for the next generation of intelligent machines.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Reading
          </Link>
        </div>
        <div className="row margin-top--md">
          <div className="col col--6 text--center">
            <img src="/humanoid-robotics-book/img/undraw_docusaurus_mountain.svg" alt="Docusaurus Mountain" width="200" />
          </div>
          <div className="col col--6 text--center">
            <img src="/humanoid-robotics-book/img/undraw_docusaurus_react.svg" alt="Docusaurus React" width="200" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Layout
      title={`Welcome to the ${siteConfig.title}`}
      description="An Open Source Book on Physical AI & Humanoid Robotics">
      <div className="container margin-top--lg">
        <div className="row">
          <aside className="col col--3"> {/* Sidebar Column */}
            <DocSidebar
              sidebar={sidebarItems.bookSidebar} // Pass the bookSidebar data
              path={currentPath}
              onCollapse={() => {}} // No collapse functionality for now
            />
          </aside>
          <main className="col col--9"> {/* Content Column */}
            <HomepageHeader />
            <div className="padding-vert--lg">
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
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}