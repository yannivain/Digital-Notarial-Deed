import PricesTag from "@/data-classes/tags/PricesTag";
import NotaryTag from "@/data-classes/tags/NotaryTag";
import LotTag from "@/data-classes/tags/LotTag";
import PersonTag from "@/data-classes/tags/PersonTag";
import DateTag from "@/data-classes/tags/DateTag";
import SpecialConditionsTag from "@/data-classes/tags/SpecialConditionsTag";

const TAG_NAMES = {
    SELLER: 'seller',
    BUYER: 'buyer',
    LOT: 'lot',
    PRICES: 'prices',
    NOTARY: 'notary',
    DATE_CONTRACT: 'date-contract',
    DATE_CHANGE_OWNERSHIP: 'date-change-ownership',
    SPECIAL_CONDITIONS: 'special-conditions'
}

export default class DocumentDocument {
    seller
    buyer
    lot
    prices
    notary
    dateContract
    dateChangeOwnership
    specialConditions

    constructor({seller, buyer, lot, prices, notary, dateContract, dateChangeOwnership, specialConditions}) {
        this.seller = PersonTag.fromData(seller)
        this.buyer = PersonTag.fromData(buyer)
        this.lot = new LotTag(lot)
        this.prices = new PricesTag(prices)
        this.notary = new NotaryTag(notary)
        this.dateContract = new DateTag(dateContract)
        this.dateChangeOwnership = new DateTag(dateChangeOwnership)
        this.specialConditions = new SpecialConditionsTag(specialConditions)
    }

    toXml(tagName) {
        const tag = document.createElementNS(null, tagName)

        tag.appendChild(this.seller.toXml(TAG_NAMES.SELLER))
        tag.appendChild(this.buyer.toXml(TAG_NAMES.BUYER))
        tag.appendChild(this.lot.toXml(TAG_NAMES.LOT))
        tag.appendChild(this.prices.toXml(TAG_NAMES.PRICES))
        tag.appendChild(this.notary.toXml(TAG_NAMES.NOTARY))
        tag.appendChild(this.dateContract.toXml(TAG_NAMES.DATE_CONTRACT))
        tag.appendChild(this.dateChangeOwnership.toXml(TAG_NAMES.DATE_CHANGE_OWNERSHIP))
        tag.appendChild(this.specialConditions.toXml(TAG_NAMES.SPECIAL_CONDITIONS))

        return tag
    }
}
