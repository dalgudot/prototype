import { Inter } from '@next/font/google';
import Link from 'next/link';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/floating-button">Floating Area</Link>
      {/* <LoadingSpinner hexColor="#F8F9FA" size="24px" /> */}
    </main>
  );
}
