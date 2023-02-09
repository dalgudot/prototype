import { Inter } from '@next/font/google';
import Link from 'next/link';
import { MainLayout } from '../components/Layout/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <MainLayout>
      <Link href="/prototype/floating-area">Floating Area</Link>
      {/* <LoadingSpinner hexColor="#F8F9FA" size="24px" /> */}
    </MainLayout>
  );
}
