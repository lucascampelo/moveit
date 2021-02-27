import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengesProvider } from 'contexts/ChallengesContext';
import { ThemeProvider } from 'contexts/ThemeContext';

import { CompletedChallenges } from "../components/CompletedChallenges";

import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "components/ChallengeBox";
import { CountdownProvider } from 'contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css';
import { Sidebar } from 'components/Sidebar';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  isDark: boolean;
}

export default function Home({
  level,
  currentExperience,
  challengesCompleted,
  isDark
}: HomeProps) {
  return (
    <ThemeProvider isDark={isDark}>
      <ChallengesProvider
        level={level}
        currentExperience={currentExperience}
        challengesCompleted={challengesCompleted}
      >
        <Sidebar />

        <div className={styles.container}>
          <Head>
            <title>Início | move.it</title>
          </Head>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </ChallengesProvider>
    </ThemeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted, isDark } = ctx.req.cookies;
  const props = {
    level: Number(level),
    currentExperience: Number(currentExperience),
    challengesCompleted: Number(challengesCompleted),
    isDark: Boolean(Number(isDark))
  }

  return { props }
}