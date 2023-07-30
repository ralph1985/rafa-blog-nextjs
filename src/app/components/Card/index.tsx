'use client';

import Image from 'next/image';
import useWindowSize from '@hooks/useWindowSize';
import styles from './index.module.scss';

type CardProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
};

export default function Card(props: CardProps) {
  const { imageSrc, subtitle, title } = props;
  const { width, height } = useWindowSize();

  return (
    <div className={styles.card}>
      <Image className={styles.img} src={imageSrc} alt="" width={width / 4} height={height / 4} />
      <div>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
    </div>
  );
}
