import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header'
import TicketFilter from './components/TicketFilter/TicketFilter'
import TransferFilter from './components/TransferFilter/TransferFilter'
import './normalize.scss'
import './style.scss'
import TicketList from './components/TicketList/TicketList'
import { Provider } from 'react-redux'
import store from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Header></Header>
    <div className="Interface">
      <TransferFilter></TransferFilter>
      <div className="Tickets">
        <TicketFilter></TicketFilter>
        <TicketList></TicketList>
      </div>
    </div>
  </Provider>
)
