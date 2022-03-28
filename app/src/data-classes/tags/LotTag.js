import StringTag from "@/data-classes/tags/StringTag";

const TAG_NAMES = {
    EGRID: 'egrid',
    REGISTER: 'register'
}

export default class LotTag {
    egrid
    register

    constructor({egrid, register}) {
        this.egrid = new StringTag(egrid)
        this.register = new StringTag(register)
    }

    toXml(tagName) {
        const tag = document.createElement(tagName)

        tag.appendChild(this.egrid.toXml(TAG_NAMES.EGRID))
        tag.appendChild(this.register.toXml(TAG_NAMES.REGISTER))

        return tag
    }
}
