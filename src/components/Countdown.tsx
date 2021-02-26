import { CountdownContext } from 'contexts/CountdownContext';
import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    time,
    totalTime,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext);


  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const progressBarPercentage = 100 - (time / totalTime * 100);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          className={`${styles.countdownButton}`}
        >
          Ciclo encerrado
          <img src="icons/check_circle.svg" alt="Finalizado" />
        </button>
      ) : isActive ? (
        <button
          type="button"
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
          onClick={resetCountdown}
        >
          <div>
            Abandonar ciclo
            <img src="/icons/close_x.svg" alt="Abandonar ciclo" />
          </div>
          <div className={styles.countdownButtonProgressBar}>
            <div style={{
              width: `${progressBarPercentage}%`
            }}></div>
          </div>
        </button>
      ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img src="/icons/play_arrow.svg" alt="Iniciar um ciclo"/>
            </button>
          )}
    </div>
  )
}