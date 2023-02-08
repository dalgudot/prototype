'use client';
import styled from '@emotion/styled';

interface LoadingSpinnerProps {
  hexColor: '#F8F9FA' | '#343A40';
  size: '24px' | '36px' | '48px';
}

export default function LoadingSpinner({
  hexColor,
  size,
}: LoadingSpinnerProps): JSX.Element {
  return <Spinner hexColor={hexColor} size={size} />;
}

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
