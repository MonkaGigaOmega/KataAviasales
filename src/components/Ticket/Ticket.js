import styles from './Ticket.module.scss'
export default function Ticket() {
  return (
    <div className={styles.ticket}>
      <div className={styles.priceLine}>
        <div className={styles.price}>13 400 Р</div>
        <div>S7 Airlines</div>
      </div>
      <div className={styles.infoLineCenter}>
        <div className={styles.timeToFly}>
          <span className={styles.airports}>Влхв-Окйм</span>
          <span>10 45 - 08 00</span>
        </div>
        <div className={styles.travelTime}>
          <span className={styles.way}>В пути</span>
          <span>21 15</span>
        </div>
        <div className={styles.cities}>
          <span className={styles.transfer}>1 майонез</span>
          <span>Волхов</span>
        </div>
      </div>
      <div className={styles.infoLineCenter}>
        <div className={styles.timeToFly}>
          <span className={styles.airports}>Влхв-Окйм</span>
          <span>10 45 - 08 00</span>
        </div>
        <div className={styles.travelTime}>
          <span className={styles.way}>В пути</span>
          <span>21 15</span>
        </div>
        <div className={styles.cities}>
          <span className={styles.transfer}>1 майонез</span>
          <span>Волхов</span>
        </div>
      </div>
    </div>
  )
}
