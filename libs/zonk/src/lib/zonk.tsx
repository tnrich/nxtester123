import styles from './zonk.module.css';

/* eslint-disable-next-line */
export interface ZonkProps {}

export function Zonk(props: ZonkProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Zonk!</h1>
    </div>
  );
}

export default Zonk;
