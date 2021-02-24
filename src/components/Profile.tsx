import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lucascampelo.png" alt="Lucas Campelo" />
      <div>
        <strong>Lucas Campelo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}