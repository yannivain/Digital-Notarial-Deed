import StringTag from "@/data-classes/tags/StringTag";

const TAG_NAMES = {
    TITLE_CONDITION: 'title-condition',
    TEXT_CONDITION: 'text-condition'
}

export default class SpecialConditionTag {
    titleCondition
    textCondition

    constructor({titleCondition, textCondition}) {
        this.titleCondition = new StringTag(titleCondition)
        this.textCondition = new StringTag(textCondition)
    }

    toXml(tagName) {
        const tag = document.createElementNS(null, tagName)

        tag.appendChild(this.titleCondition.toXml(TAG_NAMES.TITLE_CONDITION))
        tag.appendChild(this.textCondition.toXml(TAG_NAMES.TEXT_CONDITION))

        return tag
    }
}
