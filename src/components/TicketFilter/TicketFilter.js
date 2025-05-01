import styles from './TicketFilter.module.scss'
import { useSelector, useDispatch } from 'react-redux'
export default function TicketFilter() {
  const sortState = useSelector(state => state.sort)
  const dispatch = useDispatch()
  return (
    <div className={styles.buttonWrapper}>
      <button
        onClick={() => dispatch({ type: 'SET_SORT', payload: 'cheapest' })}
        className={`${styles.button} ${sortState === 'cheapest' && styles.active}`}
        type="button"
      >
        Самый дешевый
      </button>
      <button
        onClick={() => dispatch({ type: 'SET_SORT', payload: 'fastest' })}
        className={`${styles.button} ${sortState === 'fastest' && styles.active}`}
        type="button"
      >
        Самый быстрый
      </button>
      <button
        onClick={() => dispatch({ type: 'SET_SORT', payload: 'best' })}
        className={`${styles.button} ${sortState === 'best' && styles.active}`}
        type="button"
      >
        Оптимальный
      </button>
    </div>
  )
}
