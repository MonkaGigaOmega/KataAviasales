import styles from './TicketFilter.module.scss'

export default function TicketFilter() {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.button} type="button">
        Самый дешевый
      </button>
      <button className={styles.button} type="button">
        Самый быстрый
      </button>
      <button className={`${styles.button} ${styles.active}`} type="button">
        Оптимальный
      </button>
    </div>
  )
}
