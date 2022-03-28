export default class DateTag {
    value

    constructor(value) {
        this.value = value
    }

    toXml(tagName) {
        const tag = document.createElementNS(null, tagName)

        // TODO: Format date ?
        tag.textContent = this.value

        return tag
    }
}
