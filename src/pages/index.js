import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroOverlay}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={clsx("hero__title", styles.heroTitle)}>
              {siteConfig.title}
            </Heading>
            <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
              {siteConfig.tagline}
            </p>
            <div className={styles.heroDescription}>
              <p>Enter a world where ancient bloodlines carry extraordinary power, where passion and danger intertwine, and where one woman's awakening will change everything.</p>
            </div>
            <div className={styles.buttons}>
              <Link
                className={clsx("button button--secondary button--lg", styles.primaryButton)}
                to="/prologue">
                Begin the Story ✨
              </Link>
              <Link
                className={clsx("button button--outline button--lg", styles.secondaryButton)}
                to="/characters">
                Meet the Characters
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.mysticalOrb}></div>
            <div className={styles.floatingElements}>
              <div className={styles.raven}></div>
              <div className={styles.rose}></div>
              <div className={styles.shadow}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function StoryStats() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <h3>15 Chapters</h3>
            <p>Complete Story Arc</p>
          </div>
          <div className={styles.statItem}>
            <h3>15,000+ Words</h3>
            <p>Full-Length Narrative</p>
          </div>
          <div className={styles.statItem}>
            <h3>3 Parts</h3>
            <p>Epic Journey</p>
          </div>
          <div className={styles.statItem}>
            <h3>1 Hour</h3>
            <p>Total Reading Time</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2>Ready to Discover Your Power?</h2>
          <p>
            Join Evelyn Blackthorne as she uncovers family secrets, masters extraordinary abilities, 
            and faces an ancient organization that has hunted women like her for centuries.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className={clsx("button button--primary button--lg", styles.ctaButton)}
              to="/prologue">
              Start Reading Now
            </Link>
            <Link
              className={clsx("button button--outline button--lg", styles.ctaButtonSecondary)}
              to="/timeline">
              Explore the Timeline
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - An Epic Tale`}
      description="Enter the world of Crimson Shadows - a tale of passion, mystery, and forbidden desires">
      <HomepageHeader />
      <main>
        <StoryStats />
        <HomepageFeatures />
        <CallToAction />
      </main>
    </Layout>
  );
}
