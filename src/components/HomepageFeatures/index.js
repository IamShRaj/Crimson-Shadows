import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The Awakening',
    icon: '🌙',
    description: (
      <>
        Evelyn Sterling discovers her mysterious inheritance and the dark secrets
        of the Blackthorne bloodline. Ancient powers stir as she meets the 
        enigmatic Alexander Ravenshollow.
      </>
    ),
    chapters: '5 Chapters',
    link: '/part1/chapter1'
  },
  {
    title: 'Temptation',
    icon: '🔥',
    description: (
      <>
        Power awakens and danger follows. As Evelyn learns to control her abilities,
        she faces enemies who would use her gifts for their own dark purposes.
        Trust becomes a luxury she cannot afford.
      </>
    ),
    chapters: '5 Chapters',
    link: '/part2/chapter6'
  },
  {
    title: 'Shadows Unveiled',
    icon: '⚔️',
    description: (
      <>
        The final confrontation approaches. Evelyn must infiltrate the heart of
        an ancient conspiracy and emerge victorious, or risk becoming the very
        weapon her enemies desire.
      </>
    ),
    chapters: '5 Chapters',
    link: '/part3/chapter11'
  },
];

const CharacterHighlights = [
  {
    name: 'Evelyn Blackthorne',
    role: 'The Protagonist',
    description: 'An art historian who discovers she\'s heir to extraordinary power',
    image: '👑'
  },
  {
    name: 'Alexander Ravenshollow',
    role: 'The Enigma',
    description: 'A man with secrets that could save or destroy her',
    image: '🖤'
  },
  {
    name: 'Lady Morgana',
    role: 'The Mentor',
    description: 'Guardian of ancient knowledge and protector of the gifted',
    image: '🌟'
  }
];

function StoryPart({icon, title, description, chapters, link}) {
  return (
    <div className={styles.storyPart}>
      <div className={styles.partIcon}>{icon}</div>
      <div className={styles.partContent}>
        <Heading as="h3" className={styles.partTitle}>{title}</Heading>
        <p className={styles.partDescription}>{description}</p>
        <div className={styles.partMeta}>
          <span className={styles.chapterCount}>{chapters}</span>
          <Link to={link} className={styles.partLink}>
            Start Reading →
          </Link>
        </div>
      </div>
    </div>
  );
}

function CharacterCard({name, role, description, image}) {
  return (
    <div className={styles.characterCard}>
      <div className={styles.characterImage}>{image}</div>
      <h4 className={styles.characterName}>{name}</h4>
      <p className={styles.characterRole}>{role}</p>
      <p className={styles.characterDescription}>{description}</p>
    </div>
  );
}
export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.storyPartsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Heading as="h2" className={styles.sectionTitle}>
              Your Journey Awaits
            </Heading>
            <p className={styles.sectionSubtitle}>
              Follow Evelyn through three acts of discovery, danger, and triumph
            </p>
          </div>
          <div className={styles.storyPartsGrid}>
            {FeatureList.map((props, idx) => (
              <StoryPart key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.charactersSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Heading as="h2" className={styles.sectionTitle}>
              Meet the Players
            </Heading>
            <p className={styles.sectionSubtitle}>
              Complex characters with secrets that could change everything
            </p>
          </div>
          <div className={styles.charactersGrid}>
            {CharacterHighlights.map((props, idx) => (
              <CharacterCard key={idx} {...props} />
            ))}
          </div>
          <div className={styles.charactersLink}>
            <Link to="/characters" className={styles.viewAllCharacters}>
              View All Characters →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
