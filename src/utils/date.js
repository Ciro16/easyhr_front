const dateDMY = (dateToFormat, separator = '/') => {
  const date = new Date(dateToFormat)

  const day = date.getDate()
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const year = date.getFullYear()

  return `${day}${separator}${month}${separator}${year}`
}

const dateYMD = (dateToFormat) => {
  const year = dateToFormat.toLocaleString('default', { year: 'numeric' })
  const month = dateToFormat.toLocaleString('default', { month: '2-digit' })
  const day = dateToFormat.toLocaleString('default', { day: '2-digit' })

  return `${year}-${month}-${day}`
}

export { dateDMY, dateYMD }
