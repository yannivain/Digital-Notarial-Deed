import StringTag from "@/data-classes/tags/StringTag";

const TAG_NAMES = {
    TITLE_CONDITION: 'titleCondition',
    TEXT_CONDITION: 'textCondition'
}

export default class SpecialConditionTag {
    titleCondition
    textCondition

    constructor({titleCondition, textCondition}) {
        this.titleCondition = new StringTag(titleCondition)
        this.textCondition = new StringTag(textCondition)
    }

    toXml(tagName) {
        const tag = document.createElement(tagName)

        tag.appendChild(this.titleCondition.toXml(TAG_NAMES.TITLE_CONDITION))
        tag.appendChild(this.textCondition.toXml(TAG_NAMES.TEXT_CONDITION))

        return tag
    }
}
