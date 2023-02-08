import { Inter } from '@next/font/google';
import Link from 'next/link';
import styles from './page.module.css';
import LoadingSpinner from '../components/Loading/LoadingSpinner';
import FloatingButton from '../components/FloatingButton/FloatingButton';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/floating-button">플로팅 버튼</Link>
      {/* <LoadingSpinner hexColor="#F8F9FA" size="24px" /> */}
    </main>
  );
}
