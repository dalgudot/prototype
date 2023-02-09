import { Inter } from '@next/font/google';
import styles from '../page.module.css';
import FloatingButton from '@/components/Buttons/FloatingButton';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <FloatingButton />
    </main>
  );
}
