import React, { useEffect, useRef, useState } from 'react';
import styles from './collapse.module.css';

export interface CollapseProps {
  isOpen: boolean;
  startingHeight: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export function Collapse({
  isOpen,
  startingHeight,
  children,
  style,
  className,
}: CollapseProps) {
  const [height, setHeight] = useState(startingHeight);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(ref.current?.scrollHeight || 0);
    } else {
      setHeight(startingHeight);
    }
  }, [isOpen, startingHeight]);

  return (
    <div
      style={{ ...style, height: `${height}px`, overflow: 'hidden' }}
      className={className}
      ref={ref}
    >
      {children}
    </div>
  );
}

export default Collapse;