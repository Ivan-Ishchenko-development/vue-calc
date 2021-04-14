(function ({ widgetUrl, iframeUrl }) {
  const calculators = document.querySelectorAll(`[src="${widgetUrl}"]`)

  calculators.forEach(function (calculator) {
    const iframe = document.createElement('iframe')

    iframe.src = iframeUrl
    iframe.setAttribute('style', 'width: 100%; height: 100%; border: none; float: left')
    iframe.setAttribute('frameborder', '0')

    calculator.parentNode.insertBefore(iframe, calculator)
  })
})({
  widgetUrl: 'https://lhp-cdn.s3.us-east-2.amazonaws.com/calculator-widget/widget.js',
  iframeUrl: 'https://lhp-cdn.s3.us-east-2.amazonaws.com/calculator-widget/index.html'
})
