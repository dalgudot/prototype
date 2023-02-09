import s from './FloatingArea.module.css';
import classNames from 'classnames';
import { useMountedForDisappearAnimation } from '@/hooks/useMountedForDisappearAnimation';

interface FloatingAreaProps {
  appear: boolean;
}

let FLOATING_AREA_MOTION_TIME: TAnimationDuration = 0.5;

export default function FloatingAreaCSS({
  appear,
}: FloatingAreaProps): JSX.Element {
  // [How?] 0.5는 Typescript & CSS 함께 쓸 수 있도록 상수화 필요
  const isMountedForDisappearAnimation = useMountedForDisappearAnimation(
    appear,
    FLOATING_AREA_MOTION_TIME
  );

  return (
    <>
      {isMountedForDisappearAnimation && (
        // ❌ classNames & CSS를 활용한 방식 -> 변수 상수화에 문제!
        <div
          className={classNames(
            s.floating__area,
            appear ? s.appear__motion : s.disappear__motion
          )}
        >
          FloatingArea
        </div>
      )}
    </>
  );
}
