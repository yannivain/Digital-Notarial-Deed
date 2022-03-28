import StringTag from "@/data-classes/tags/StringTag";
import DateTag from "@/data-classes/tags/DateTag";
import AddressTag from "@/data-classes/tags/AddressTag";

const TAG_NAMES = {
    NAME: 'name',
    FIRST_NAME: 'first-name',
    BIRTHDAY: 'birthday',
    SEX: 'sex',
    PLACE_RESIDENCY: 'place-residency',
    PLACE_ORIGIN: 'place-origin'
}

export default class NaturalPersonTag {
    name
    firstName
    birthday
    sex
    placeResidency
    placeOrigin

    constructor({name, firstName, birthday, sex, placeResidency, placeOrigin}) {
        this.name = new StringTag(name)
        this.firstName = new StringTag(firstName)
        this.birthday = new DateTag(birthday)
        this.sex = new StringTag(sex)
        this.placeResidency = new AddressTag(placeResidency)
        this.placeOrigin = new StringTag(placeOrigin)
    }

    toXml(tagName) {
        const tag = document.createElementNS(null, tagName)

        tag.appendChild(this.name.toXml(TAG_NAMES.NAME))
        tag.appendChild(this.firstName.toXml(TAG_NAMES.FIRST_NAME))
        tag.appendChild(this.birthday.toXml(TAG_NAMES.BIRTHDAY))
        tag.appendChild(this.sex.toXml(TAG_NAMES.SEX))
        tag.appendChild(this.placeResidency.toXml(TAG_NAMES.PLACE_RESIDENCY))
        tag.appendChild(this.placeOrigin.toXml(TAG_NAMES.PLACE_ORIGIN))

        return tag
    }
}
