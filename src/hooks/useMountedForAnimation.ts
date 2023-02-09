import { useEffect, useState } from 'react';

export function useMountedForAnimation(
  appear: boolean,
  duration: TAnimationDuration
): boolean {
  const [isMountedForAnimation, setIsMountedForAnimation] =
    useState<boolean>(true);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (appear) {
      // clearTimeout(timeoutId) -> 빠르게 눌렀을 때 setTimeout 시간이 남아있어서 나타났다가 사라지는 상황 방지
      clearTimeout(timeoutId);
      setIsMountedForAnimation(true);
      console.log('Mount For Animation');
    } else {
      setTimeoutId(
        setTimeout(() => {
          setIsMountedForAnimation(false);
          console.log('UnMount After Animation');
        }, duration * 1000)
      );
    }
  }, [appear]);

  return isMountedForAnimation;
}
