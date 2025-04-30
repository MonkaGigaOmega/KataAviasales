import styles from './TransferFilter.module.scss'
export default function TransferFilter() {
  return (
    <div className={styles.transferFilter}>
      <h3 className={styles.title}>Количество пересадок</h3>
      <div className={styles.transferOptionWrapper}>
        <label className={styles.transferOption}>
          <input className={styles.checkboxInput} type="checkbox" id="checkbox1" />
          Все
          <span className={styles.checkbox}></span>
        </label>
      </div>
      <div className={styles.transferOptionWrapper}>
        <label className={styles.transferOption}>
          <input className={styles.checkboxInput} type="checkbox" />
          Без пересадок
          <span className={styles.checkbox}></span>
        </label>
      </div>
      <div className={styles.transferOptionWrapper}>
        <label className={styles.transferOption}>
          <input className={styles.checkboxInput} type="checkbox" />1 пересадка
          <span className={styles.checkbox}></span>
        </label>
      </div>
      <div className={styles.transferOptionWrapper}>
        <label className={styles.transferOption}>
          <input className={styles.checkboxInput} type="checkbox" />2 пересадка
          <span className={styles.checkbox}></span>
        </label>
      </div>
      <div className={styles.transferOptionWrapper}>
        <label className={styles.transferOption}>
          <input className={styles.checkboxInput} type="checkbox" />3 пересадка
          <span className={styles.checkbox}></span>
        </label>
      </div>
    </div>
  )
}
