'use client';
import styled from '@emotion/styled';
import { FC } from 'react';

type LoadingSpinnerProps = {
  hexColor: '#F8F9FA' | '#343A40';
  size: '24px' | '36px' | '48px';
};

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ hexColor, size }) => {
  return <Spinner hexColor={hexColor} size={size} />;
};

export default LoadingSpinner;

const Spinner = styled.div<LoadingSpinnerProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: 2px solid ${({ hexColor }) => hexColor};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 0.85s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
