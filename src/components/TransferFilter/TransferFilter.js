import styles from './TransferFilter.module.scss'
import { useDispatch, useSelector } from 'react-redux'
export default function TransferFilter() {
  const filterState = useSelector(state => state.filters)
  const dispatch = useDispatch()
  return (
    <form className={styles.transferFilter}>
      <h3 className={styles.title}>Количество пересадок</h3>
      <div className={styles.transferOptionWrapper}>
        <label className={styles.transferOption}>
          <input
            className={styles.checkboxInput}
            type="checkbox"
            id="checkbox1"
            onChange={event =>
              dispatch({
                type: 'TOGGLE_CHECKBOX',
                payload: { key: 'all', value: event.target.checked }
              })
            }
            checked={filterState.all}
          />
          Все
          <span className={styles.checkbox}></span>
        </label>
      </div>
      <div className={styles.transferOptionWrapper}>
        <label className={styles.transferOption}>
          <input
            className={styles.checkboxInput}
            type="checkbox"
            onChange={event =>
              dispatch({
                type: 'TOGGLE_CHECKBOX',
                payload: { key: 'noTransfers', value: event.target.checked }
              })
            }
            checked={filterState.noTransfers}
          />
          Без пересадок
          <span className={styles.checkbox}></span>
        </label>
      </div>
      <div className={styles.transferOptionWrapper}>
        <label className={styles.transferOption}>
          <input
            className={styles.checkboxInput}
            type="checkbox"
            onChange={event =>
              dispatch({
                type: 'TOGGLE_CHECKBOX',
                payload: { key: 'oneTransfer', value: event.target.checked }
              })
            }
            checked={filterState.oneTransfer}
          />
          1 пересадка
          <span className={styles.checkbox}></span>
        </label>
      </div>
      <div className={styles.transferOptionWrapper}>
        <label className={styles.transferOption}>
          <input
            className={styles.checkboxInput}
            type="checkbox"
            onChange={event =>
              dispatch({
                type: 'TOGGLE_CHECKBOX',
                payload: { key: 'twoTransfers', value: event.target.checked }
              })
            }
            checked={filterState.twoTransfers}
          />
          2 пересадка
          <span className={styles.checkbox}></span>
        </label>
      </div>
      <div className={styles.transferOptionWrapper}>
        <label className={styles.transferOption}>
          <input
            className={styles.checkboxInput}
            type="checkbox"
            onChange={event =>
              dispatch({
                type: 'TOGGLE_CHECKBOX',
                payload: { key: 'threeTransfers', value: event.target.checked }
              })
            }
            checked={filterState.threeTransfers}
          />
          3 пересадка
          <span className={styles.checkbox}></span>
        </label>
      </div>
    </form>
  )
}
