import { ChallengesContext } from 'contexts/ChallengesContext';
import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lucascampelo.png" alt="Lucas Campelo" />
      <div>
        <strong>Lucas Campelo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}