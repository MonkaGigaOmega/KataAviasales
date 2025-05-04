import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getSearchId from './redux/thunks/getSearchId'
import Header from './components/Header/Header'
import TicketFilter from './components/TicketFilter/TicketFilter'
import TransferFilter from './components/TransferFilter/TransferFilter'
import TicketList from './components/TicketList/TicketList'
import fetchTickets from './redux/thunks/fetchTickets'
export default function App() {
  const dispatch = useDispatch()
  const searchId = useSelector(state => state.search.searchId)

  useEffect(() => {
    dispatch(getSearchId())
  }, [dispatch])

  useEffect(() => {
    if (searchId) {
      dispatch(fetchTickets())
    }
  }, [dispatch, searchId])

  return (
    <>
      <Header className="Header" />
      <div className="Interface">
        <TransferFilter />
        <div className="Tickets">
          <TicketFilter />
          <TicketList />
        </div>
      </div>
    </>
  )
}
