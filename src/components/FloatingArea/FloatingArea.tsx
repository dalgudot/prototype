import { useMountedForAnimation } from '@/hooks/useMountedForAnimation';
import styled from '@emotion/styled';

interface FloatingAreaProps {
  appear: boolean;
  content: JSX.Element;
}

let FLOATING_AREA_MOTION_TIME: TAnimationDuration = 0.5;

export default function FloatingArea({
  appear,
  content,
}: FloatingAreaProps): JSX.Element {
  const isMountedForAnimation = useMountedForAnimation(
    appear,
    FLOATING_AREA_MOTION_TIME
  );

  return (
    <>
      {isMountedForAnimation && (
        <BottomBox appear={appear}>{content}</BottomBox>
      )}
    </>
  );
}

const BottomBox = styled.div<{ appear: boolean }>`
  position: fixed;
  padding: 16px 24px;
  background: #252a2f;
  border-radius: 8px;

  ${({ appear }) =>
    appear
      ? `animation: ${FLOATING_AREA_MOTION_TIME}s var(--bezier-1) up;
         bottom: 36px;`
      : `animation: ${FLOATING_AREA_MOTION_TIME}s var(--bezier-1) down;
         bottom: -96px;`}

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
