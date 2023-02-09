import s from './FloatingArea.module.css';
import classNames from 'classnames';
import { useMountedForAnimation } from '@/hooks/useMountedForAnimation';

interface FloatingAreaProps {
  appear: boolean;
}

export default function FloatingArea({
  appear,
}: FloatingAreaProps): JSX.Element {
  // 0.5는 Typescript & CSS 함께 쓸 수 있도록 상수화 필요
  const isMountedForAnimation = useMountedForAnimation(appear, 0.5);

  return (
    <>
      {isMountedForAnimation && (
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
