import styles from './Ticket.module.scss'
import PropTypes from 'prop-types'
import formatTime from '../../helpers/formatTime'
export default function Ticket({
  price,
  cityOut,
  cityIn,
  transfersIn,
  transfersOut,
  durationIn,
  durationOut,
  dateIn,
  dateOut,
  carrier
}) {
  const hoursIn = Math.floor(durationIn / 60)
  const minIn = durationIn % 60
  const hoursOut = Math.floor(durationOut / 60)
  const minOut = durationOut % 60

  const toFlyIn = formatTime(dateIn, durationIn)
  const toFlyOut = formatTime(dateOut, durationOut)

  return (
    <div className={styles.ticket}>
      <div className={styles.priceLine}>
        <div className={styles.price}>
          {Math.floor(price / 1000)} {price % 1000} Р
        </div>
        <div className={styles.carrierLogo}>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={`${carrier} logo`} />
        </div>
      </div>
      <div className={styles.infoLineCenter}>
        <div className={styles.timeToFly}>
          <span className={styles.cities}>
            <span className={styles.cityOut}>{cityOut}</span> -
            <span className={styles.cityIn}> {cityIn}</span>
          </span>
          <span>
            {toFlyIn[0].toString().length === 1 ? `0${toFlyIn[0]}` : toFlyIn[0]}:
            {toFlyIn[1].toString().length === 1 ? `0${toFlyIn[1]}` : toFlyIn[1]} -{' '}
            {toFlyIn[2].toString().length === 1 ? `0${toFlyIn[2]}` : toFlyIn[2]}:
            {toFlyIn[3].toString().length === 1 ? `0${toFlyIn[3]}` : toFlyIn[3]}
          </span>
        </div>
        <div className={styles.travelTime}>
          <span className={styles.way}>В пути</span>
          <span>
            {hoursIn.toString().length === 1 ? `0${hoursIn}` : hoursIn}
            {'ч '}
            {minIn.toString().length === 1 ? `0${minIn}` : minIn}
            {'м'}
          </span>
        </div>
        <div className={styles.transfers}>
          <span className={styles.transfer}>
            {transfersIn.length === 0
              ? `нет пересадок`
              : transfersIn.length === 1
                ? '1 пересадка'
                : `${transfersIn.length} пересадки`}
          </span>
          <span>{transfersIn.join(', ') || 'Прямой рейс'}</span>
        </div>
      </div>
      <div className={styles.infoLineCenter}>
        <div className={styles.timeToFly}>
          <span className={styles.cities}>
            <span className={styles.cityOut}>{cityIn}</span> -
            <span className={styles.cityIn}> {cityOut}</span>
          </span>
          <span>
            {toFlyOut[0].toString().length === 1 ? `0${toFlyOut[0]}` : toFlyOut[0]}:
            {toFlyOut[1].toString().length === 1 ? `0${toFlyOut[1]}` : toFlyOut[1]} -{' '}
            {toFlyOut[2].toString().length === 1 ? `0${toFlyOut[2]}` : toFlyOut[2]}:
            {toFlyOut[3].toString().length === 1 ? `0${toFlyOut[3]}` : toFlyOut[3]}
          </span>
        </div>
        <div className={styles.travelTime}>
          <span className={styles.way}>В пути</span>
          <span>
            {hoursOut.toString().length === 1 ? `0${hoursOut}` : hoursOut}
            {'ч '}
            {minOut.toString().length === 1 ? `0${minOut}` : minOut}
            {'м'}
          </span>
        </div>
        <div className={styles.transfers}>
          <span className={styles.transfer}>
            {transfersOut.length === 0
              ? `нет пересадок`
              : transfersOut.length === 1
                ? '1 пересадка'
                : `${transfersOut.length} пересадки`}
          </span>
          <span>{transfersOut.join(', ') || 'Прямой рейс'}</span>
        </div>
      </div>
    </div>
  )
}
Ticket.propTypes = {
  price: PropTypes.number.isRequired,
  durationIn: PropTypes.number.isRequired,
  durationOut: PropTypes.number.isRequired,
  cityOut: PropTypes.string.isRequired,
  cityIn: PropTypes.string.isRequired,
  dateIn: PropTypes.string.isRequired,
  dateOut: PropTypes.string.isRequired,
  carrier: PropTypes.string.isRequired,
  transfersIn: PropTypes.arrayOf(PropTypes.string).isRequired,
  transfersOut: PropTypes.arrayOf(PropTypes.string).isRequired
}
