'use client';
import FloatingArea from '@/components/FloatingArea/FloatingArea';
import { useState } from 'react';
import LargeButton from '../../../components/Buttons/LargeButton';
import { MainLayout } from '../../../components/Layout/MainLayout';

export default function FloatingAreaPrototypePage(): JSX.Element {
  const [appear, setAppear] = useState<boolean>(true);

  function toggleAppear() {
    setAppear(!appear);
  }

  return (
    <MainLayout>
      <LargeButton
        label={appear ? 'Unmount!' : 'Mount!'}
        onClick={toggleAppear}
      />
      <FloatingArea
        appear={appear}
        content={<p>I&apos;m a Floating Area 🤚</p>}
      />
    </MainLayout>
  );
}
