import { useMountedForDisappearMotion } from '@/hooks/useMountedForDisappearMotion';
import styled from '@emotion/styled';

interface FloatingContainerProps {
  appear: boolean;
}

interface FloatingAreaProps extends FloatingContainerProps {
  content: JSX.Element;
}

let FLOATING_AREA_MOTION_TIME: TAnimationDuration = 0.45;

export default function FloatingArea({
  appear,
  content,
}: FloatingAreaProps): JSX.Element {
  const isMountedForDisappearMotion = useMountedForDisappearMotion(
    appear,
    FLOATING_AREA_MOTION_TIME
  );

  return (
    <>
      {isMountedForDisappearMotion && (
        <FloatingContainer appear={appear}>{content}</FloatingContainer>
      )}
    </>
  );
}

const FloatingContainer = styled.div<FloatingContainerProps>`
  position: fixed;
  padding: 16px 24px;
  background: #252a2f;
  border-radius: 8px;

  ${({ appear }) =>
    appear
      ? `animation: slide__in__with__scaleEffect ${FLOATING_AREA_MOTION_TIME}s var(--ease-out-0);
         bottom: 36px;`
      : `animation: slide__out__with__scaleEffect ${FLOATING_AREA_MOTION_TIME}s var(--ease-out-0);
         bottom: -96px;`}

  @keyframes slide__in__with__scaleEffect {
    from {
      bottom: -96px;
      transform: scale(0.75);
    }

    to {
      bottom: 36px;
      transform: scale(1);
    }
  }

  @keyframes slide__out__with__scaleEffect {
    from {
      bottom: 36px;
      transform: scale(1);
    }

    to {
      bottom: -96px;
      transform: scale(0.8);
    }
  }
`;
