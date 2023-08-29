function resetCreateRequestForm (form) {
  form.reque.value = ''
  form.motiv.value = ''
  form.begda.value = ''
  form.endda.value = ''
  form.stext.value = ''
  form.priov.value = ''

  sessionStorage.removeItem('requestType')
  sessionStorage.removeItem('motiv')
  sessionStorage.removeItem('begda')
  sessionStorage.removeItem('endda')
  sessionStorage.removeItem('stext')
  sessionStorage.removeItem('priov')
}

export default resetCreateRequestForm
