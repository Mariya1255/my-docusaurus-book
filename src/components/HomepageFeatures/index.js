import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Explore Core Foundations',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Dive deep into the foundational concepts of Physical AI and Humanoid Robotics.
        Understand the principles that drive intelligent robotic systems.
      </>
    ),
  },
  {
    title: 'Master Advanced AI & Robotics',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Learn about cutting-edge AI techniques applied to humanoid robots,
        including visual language models and advanced control systems.
      </>
    ),
  },
  {
    title: 'Practical Simulation & Development',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Gain hands-on experience with ROS2, digital twins, and simulation environments
        to build and test your own humanoid robotic solutions.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
