import styled from '@emotion/styled';

interface LargeButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function LargeButton({
  label,
  onClick,
  className,
}: LargeButtonProps): JSX.Element {
  return (
    <Button onClick={onClick} className={className && className}>
      {label}
    </Button>
  );
}

const Button = styled.button`
  font-size: 16px;
  padding: 14px 12px;
  border-radius: 8px;

  background-color: #fff;
  color: #000000;

  :hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  :active {
    background-color: rgba(255, 255, 255, 0.85);
    transform: scale(0.95);
  }
`;
