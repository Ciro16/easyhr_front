function resetCreateRequestForm (form) {
  form.retyp.value = ''
  form.motiv.value = ''
  form.begda.value = ''
  form.stext.value = ''
  form.priov.value = ''

  if (form.endda) {
    form.endda.value = ''
  }

  sessionStorage.removeItem('requestType')
  sessionStorage.removeItem('motiv')
  sessionStorage.removeItem('begda')
  sessionStorage.removeItem('endda')
  sessionStorage.removeItem('stext')
  sessionStorage.removeItem('priov')
}

export default resetCreateRequestForm
