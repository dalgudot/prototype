'use client';
import styled from '@emotion/styled';
import { Inter } from '@next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function FloatingButton(): JSX.Element {
  const [disappear, setDisappear] = useState<boolean>(false);

  function toggleDisappear() {
    setDisappear(!disappear);
  }

  return (
    <>
      <button onClick={toggleDisappear}>Disappear Trigger</button>
      <BottomBox disappear={disappear} className={inter.className}>
        FloatingButton
      </BottomBox>
    </>
  );
}

const BottomBox = styled.div<{ disappear: boolean }>`
  position: fixed;
  bottom: 36px;
  padding: 16px 24px;
  background: #252a2f;
  border-radius: 4px;
  font-size: 16px;

  animation: 0.5s cubic-bezier(0.2, 0.6, 0.35, 1)
    ${({ disappear }) => (disappear ? 'down' : 'up')};

  @keyframes up {
    0% {
      bottom: -96px;
    }
    100% {
      bottom: 36px;
    }
  }
  @keyframes down {
    0% {
      bottom: 36px;
    }
    100% {
      bottom: -96px;
    }
  }
`;
