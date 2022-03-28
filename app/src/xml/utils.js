export const downloadXml = (xmlDoc, filename) => {
    const xmlString = new XMLSerializer().serializeToString(xmlDoc)
    const blob = new Blob([xmlString], {type: 'application/xml'})
    const url = URL.createObjectURL(blob)
    const element = document.createElement('a')

    document.body.appendChild(element)
    element.style = 'display:none'
    element.href = url
    element.download = filename
    element.click()
    element.remove()
}
