import SpecialConditionTag from "@/data-classes/tags/SpecialConditionTag";

const TAG_NAMES = {
    SPECIAL_CONDITION: 'special-condition'
}

export default class SpecialConditionsTag {
    specialConditions

    constructor(specialConditions) {
        this.specialConditions = specialConditions.map(specialCondition => new SpecialConditionTag(specialCondition))
    }

    toXml(tagName) {
        const tag = document.createElementNS(null, tagName)

        for (const specialCondition of this.specialConditions)
            tag.appendChild(specialCondition.toXml(TAG_NAMES.SPECIAL_CONDITION))

        return tag
    }
}
