'use client';
import styles from '../page.module.css';
import FloatingArea from '@/components/FloatingArea/FloatingArea';
import { useState } from 'react';
import LargeButton from '../../components/Buttons/LargeButton';

export default function FloatingAreaPage(): JSX.Element {
  const [appear, setAppear] = useState<boolean>(true);

  function toggleAppear() {
    setAppear(!appear);
  }

  return (
    <main className={styles.main}>
      <LargeButton
        label={appear ? '사라져라' : '나타나라'}
        onClick={toggleAppear}
      />
      <FloatingArea
        appear={appear}
        content={
          <LargeButton
            label="I'm a button in Floating Area 🤚"
            onClick={() => {}}
          />
        }
      />
    </main>
  );
}
