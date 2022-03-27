export default class DateTag {
    value

    constructor(value) {
        this.value = value
    }

    toXml(tagName) {
        const tag = document.createElement(tagName)

        // TODO: Format date ?
        tag.textContent = this.value

        return tag
    }
}
