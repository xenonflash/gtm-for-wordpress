(function(window) {
  function registerGTM(sel, eventType, payload) {
    if (!sel) return
    const elem = document.querySelector(sel)
    if (!elem) return
    elem.addEventListener(eventType, function() {
      if (!window.dataLayer) {
        return console.log('gtm not loaded')
      }
      if (typeof payload === 'function') {
        eventData()
      } else {
        dataLayer.push(payload)
      }
    })
  }


  window.lbGtmEvents.forEach(function(e) {
    registerGTM.apply(window, e)
  })
})(window)
