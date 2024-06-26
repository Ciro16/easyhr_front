export function debounce (fn, delay) {
  let timer

  return function () {
    const self = this
    const args = arguments

    clearTimeout(timer)

    timer = setTimeout(function () {
      fn.apply(self, args)
    }, delay)
  }
}
