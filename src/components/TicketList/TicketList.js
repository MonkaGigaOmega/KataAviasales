import Ticket from '../Ticket/Ticket'
import { useSelector } from 'react-redux'
import styles from './TicketList.module.scss'
import { useState, useMemo } from 'react'
import sortTickets from '../../helpers/sortTickets'
export default function TicketList() {
  const filters = useSelector(state => state.filters)
  const sortType = useSelector(state => state.sort)
  const tickets = useSelector(state => state.tickets?.tickets || [])

  const [count, setCount] = useState(5)
  const activeTransferCounts = []
  if (filters.noTransfers) activeTransferCounts.push(0)
  if (filters.oneTransfer) activeTransferCounts.push(1)
  if (filters.twoTransfers) activeTransferCounts.push(2)
  if (filters.threeTransfers) activeTransferCounts.push(3)
  const filteredTickets = tickets.filter(ticket => {
    const stops1 = ticket.segments[0].stops.length
    const stops2 = ticket.segments[1].stops.length
    return activeTransferCounts.includes(stops1) || activeTransferCounts.includes(stops2)
  })

  const sortedTickets = useMemo(
    () => sortTickets(filteredTickets, sortType),
    [filteredTickets, sortType]
  )
  return (
    <div className={styles.ticketList}>
      {sortedTickets.length > 0 ? (
        sortedTickets
          .slice(0, count)
          .map((ticket, index) => (
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
              carrier={ticket.carrier}
            />
          ))
      ) : (
        <div className={styles.noFlights}>Рейсов, подходящих под заданные фильтры, не найдено</div>
      )}
      {sortedTickets.length > 0 && (
        <button
          type="button"
          onClick={() => setCount(prev => (prev += 5))}
          className={styles.buttonMore}
        >
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  )
}
