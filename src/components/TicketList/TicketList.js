import Ticket from '../Ticket/Ticket'

import styles from './TicketList.module.scss'

export default function TicketList() {
  return (
    <div className={styles.ticketList}>
      <Ticket></Ticket>
      <Ticket></Ticket>
      <Ticket></Ticket>
      <button className={styles.buttonMore}>Показать еще 5 билетов!</button>
    </div>
  )
}
