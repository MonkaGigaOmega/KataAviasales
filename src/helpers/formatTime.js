export default function formatTime(durationDate, flightDurationMinutes) {
  const date = new Date(durationDate)
  let hours = date.getHours()
  let minutes = date.getMinutes()

  let arrivalMinutes = minutes + (flightDurationMinutes % 60)
  let arrivalHours = hours + Math.floor(flightDurationMinutes / 60)

  if (arrivalMinutes >= 60) {
    arrivalMinutes -= 60
    arrivalHours += 1
  }
  if (arrivalHours >= 24) {
    arrivalHours -= 24
  }

  return [hours, minutes, arrivalHours, arrivalMinutes]
}
