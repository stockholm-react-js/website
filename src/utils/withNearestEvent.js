import parseISO from 'date-fns/parseISO'

export function withNearestEvent(doc) {
  let currentDate = new Date().getTime()
  let nearest = Infinity
  let winner = -1

  doc.forEach(function (data, index) {
    /* let eventDates = new Date(Date.parse(data.node.date)).getTime() */
    let eventDates = parseISO(data.node.date)
    let distance = Math.abs(eventDates - currentDate)

    if (eventDates >= currentDate && (eventDates < new Date(nearest) || distance < nearest)) {
      nearest = distance
      winner = index
    }
  })
  return winner
}