import NotaryOfficeTag from "@/data-classes/tags/NotaryOfficeTag";
import StringTag from "@/data-classes/tags/StringTag";

const TAG_NAMES = {
    NAME: 'name',
    FIRST_NAME: 'firstname',
    OFFICE: 'office'
}

export default class NotaryTag {
    name
    firstName
    office

    constructor({name, firstName, office}) {
        this.name = new StringTag(name)
        this.firstName = new StringTag(firstName)
        this.office = new NotaryOfficeTag(office)
    }

    toXml(tagName) {
        const tag = document.createElementNS(null, tagName)

        tag.appendChild(this.name.toXml(TAG_NAMES.NAME))
        tag.appendChild(this.firstName.toXml(TAG_NAMES.FIRST_NAME))
        tag.appendChild(this.office.toXml(TAG_NAMES.OFFICE))

        return tag
    }
}
