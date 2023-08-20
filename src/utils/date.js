const formatDate = (dateToFormat) => {
  const date = new Date(dateToFormat)

  const day = date.getDate()
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export default formatDate
