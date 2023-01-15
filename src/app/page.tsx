import { Inter } from '@next/font/google';
import styles from './page.module.css';
import LoadingSpinner from './components/Loading/LoadingSpinner';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <LoadingSpinner hexColor='#F8F9FA' size='24px' />
    </main>
  );
}
