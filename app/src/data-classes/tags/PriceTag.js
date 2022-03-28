import StringTag from "@/data-classes/tags/StringTag";

const TAG_NAMES = {
    AMOUNT: 'amount',
    CURRENCY: 'currency',
    FREE_TEXT: 'free-text'
}

export default class PriceTag {
    amount
    currency
    freeText

    constructor({amount, currency, freeText}) {
        this.amount = new StringTag(amount)
        this.currency = new StringTag(currency)
        this.freeText = new StringTag(freeText)
    }

    toXml(tagName) {
        const tag = document.createElementNS(null, tagName)

        tag.appendChild(this.amount.toXml(TAG_NAMES.AMOUNT))
        tag.appendChild(this.currency.toXml(TAG_NAMES.CURRENCY))
        tag.appendChild(this.freeText.toXml(TAG_NAMES.FREE_TEXT))

        return tag
    }
}
