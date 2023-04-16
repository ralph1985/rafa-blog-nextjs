import styles from './hamburger.module.scss';

type HamburgerProps = {
  className: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Hamburger(props: HamburgerProps) {
  const { className, onChange } = props;

  return (
    <div className={`${className} ${styles.cross} ${styles.menu2}`}>
      <label className={styles.base} htmlFor="checkbox-hamburger">
        <input type="checkbox" id="checkbox-hamburger" className={styles.checkbox} onChange={onChange} />
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle className={styles.circle} cx="50" cy="50" r="30" />
          <path className={`${styles.path} ${styles.line1}`} d="M0 70l28-28c2-2 2-2 7-2h64" />
          <path className={`${styles.path} ${styles.line2}`} d="M0 50h99" />
          <path className={`${styles.path} ${styles.line3}`} d="M0 30l28 28c2 2 2 2 7 2h64" />
        </svg>
      </label>
    </div>
  );
}
