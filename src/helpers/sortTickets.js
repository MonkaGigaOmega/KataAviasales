export default function sortTickets(tickets, sortType) {
  if (sortType === 'cheapest') {
    return [...tickets].sort((a, b) => a.price - b.price)
  }
  if (sortType === 'fastest') {
    return [...tickets].sort((a, b) => a.segments[0].duration - b.segments[0].duration)
  }
  return [...tickets]
}
