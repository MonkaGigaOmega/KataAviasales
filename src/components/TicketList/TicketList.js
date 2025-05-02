import Ticket from '../Ticket/Ticket'
import { useSelector } from 'react-redux'
import styles from './TicketList.module.scss'

export default function TicketList() {
  const tickets = useSelector(state => state.tickets.tickets)
  return (
    <div className={styles.ticketList}>
      {tickets.map((ticket, index) => (
        <Ticket
          key={index}
          price={ticket.price}
          cityOut={ticket.segments[0].origin}
          cityIn={ticket.segments[0].destination}
          transfersIn={ticket.segments[0].stops}
          transfersOut={ticket.segments[1].stops}
          durationIn={ticket.segments[0].duration}
          durationOut={ticket.segments[1].duration}
          dateIn={ticket.segments[0].date}
          dateOut={ticket.segments[1].date}
        />
      ))}
      <button className={styles.buttonMore}>Показать еще 5 билетов!</button>
    </div>
  )
}
