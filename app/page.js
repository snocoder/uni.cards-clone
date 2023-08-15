import styles from "./page.module.css";
import BackgroundVideoSection from "@/components/BackgroundVideoSection/BackgroundVideoSection";
import Features from "@/components/Features/Features";

export default function Home() {
  return (
    <main className={styles.main}>
      <BackgroundVideoSection />
      <Features />
    </main>
  );
}
