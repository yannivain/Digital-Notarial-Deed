export const downloadXml = (document, filename) => {
    const blob = new Blob([document], {type: 'application/xml'})
    const url = URL.createObjectURL(blob)
    const element = document.createElement('a')

    document.body.appendChild(element)
    element.style = 'display:none'
    element.href = url
    element.download = filename
    element.click()
    element.remove()
}
