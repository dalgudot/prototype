import { useEffect, useState } from 'react';

export function useMountedForDisappearMotion(
  appear: boolean,
  duration: TAnimationDuration
): boolean {
  const [isMountedForDisappearMotion, setIsMountedForDisappearMotion] =
    useState<boolean>(true);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (appear) {
      // clearTimeout(timeoutId) -> 빠르게 눌렀을 때 setTimeout 시간이 남아있어서 나타났다가 사라지는 상황 등 방지
      clearTimeout(timeoutId);
      setIsMountedForDisappearMotion(true);
      console.log('Mounted for appearing animation');
    } else {
      setTimeoutId(
        setTimeout(() => {
          setIsMountedForDisappearMotion(false);
          console.log('UnMounted after disappearing animation');
        }, duration * 1000)
      );
    }
  }, [appear]);

  return isMountedForDisappearMotion;
}
