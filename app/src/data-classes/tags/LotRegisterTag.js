import StringTag from "@/data-classes/tags/StringTag";

const TAG_NAMES = {
    NAME: 'name',
    LOT_ID: 'lot-id'
}

export default class LotRegisterTag {
    name
    lotId

    constructor({name, lotId}) {
        this.name = new StringTag(name)
        this.lotId = new StringTag(lotId)
    }

    toXml(tagName) {
        const tag = document.createElementNS(null, tagName)

        tag.appendChild(this.name.toXml(TAG_NAMES.NAME))
        tag.appendChild(this.lotId.toXml(TAG_NAMES.LOT_ID))

        return tag
    }
}
