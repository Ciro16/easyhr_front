const moneyFormatter = (style, currency) => {
  return new Intl.NumberFormat('en-US', {
    style,
    currency,
    maximumFractionDigits: 2
  })
}

export { moneyFormatter }
