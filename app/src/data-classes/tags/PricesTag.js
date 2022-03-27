import PriceTag from "@/data-classes/tags/PriceTag";

const TAG_NAMES = {
    PRICE: 'price'
}

export default class PricesTag {
    prices

    constructor(prices) {
        this.prices = prices.map(price => new PriceTag(price))
    }

    toXml(tagName) {
        const tag = document.createElement(tagName)

        for (const price of this.prices)
            tag.appendChild(price.toXml(TAG_NAMES.PRICE))

        return tag
    }
}
