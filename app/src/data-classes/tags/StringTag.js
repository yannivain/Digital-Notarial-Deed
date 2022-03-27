export default class StringTag {
    value

    constructor(value) {
        this.value = value
    }

    toXml(tagName) {
        const tag = document.createElement(tagName)

        tag.textContent = this.value

        return tag
    }
}
