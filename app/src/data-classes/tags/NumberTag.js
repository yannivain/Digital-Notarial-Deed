export default class NumberTag {
    value

    constructor(value) {
        this.value = value
    }

    toXml(tagName) {
        const tag = document.createElementNS(null, tagName)

        // TODO: Format the value ?
        tag.textContent = this.value

        return tag
    }
}
