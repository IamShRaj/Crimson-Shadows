import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Immersive Storytelling',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Dive into a world where passion meets mystery. Each chapter unfolds
        like a carefully orchestrated seduction, drawing you deeper into
        the shadows of desire and intrigue.
      </>
    ),
  },
  {
    title: 'Rich Character Development',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Meet unforgettable characters with complex motivations and hidden depths.
        Explore their relationships as they navigate the dangerous territory
        between love and obsession.
      </>
    ),
  },
  {
    title: 'Interactive Experience',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Track character relationships, explore family histories, and uncover
        secrets through our interactive timeline and character guides.
        The story adapts to your curiosity.
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
