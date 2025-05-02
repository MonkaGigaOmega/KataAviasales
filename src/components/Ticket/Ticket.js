import styles from './Ticket.module.scss'
import PropTypes from 'prop-types'
export default function Ticket({
  price,
  cityOut,
  cityIn,
  transfersIn,
  transfersOut,
  durationIn,
  durationOut,
  dateIn,
  dateOut
}) {
  const hoursIn = Math.floor(durationIn / 60)
  const minIn = durationIn % 60
  const hoursOut = Math.floor(durationOut / 60)
  const minOut = durationIn % 60

  function formatTime(duration) {
    const date = new Date(duration)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    return [hours, minutes, hours + hoursIn, minutes + minIn]
  }
  const toFlyIn = formatTime(dateIn)
  const toFlyOut = formatTime(dateOut)
  if (toFlyIn[3] >= 60) {
    toFlyIn[3] -= 60
    toFlyIn[2] += 1
  }
  if (toFlyIn[2] >= 24) {
    toFlyIn[2] -= 24
  }
  if (toFlyOut[3] >= 60) {
    toFlyOut[3] -= 60
    toFlyOut[2] += 1
  }
  if (toFlyOut[2] >= 24) {
    toFlyOut[2] -= 24
  }

  return (
    <div className={styles.ticket}>
      <div className={styles.priceLine}>
        <div className={styles.price}>{price} Р</div>
        <div>S7 Airlines</div>
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
          <span>{transfersIn.join(', ')}</span>
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
          <span>{transfersOut.join(', ')}</span>
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
  transfersIn: PropTypes.arrayOf(PropTypes.string).isRequired,
  transfersOut: PropTypes.arrayOf(PropTypes.string).isRequired
}
