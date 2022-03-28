import StringTag from "@/data-classes/tags/StringTag";

const TAG_NAMES = {
    STREET_NAME: 'street-name',
    STREET_NR: 'street-nr',
    PO_BOX: 'po-box',
    ZIP: 'zip',
    CITY: 'city',
    COUNTRY: 'country'
}


export default class AddressTag {
    streetName
    streetNr
    poBox
    zip
    city
    country

    constructor({streetName, streetNr, poBox, zip, city, country}) {
        this.streetName = new StringTag(streetName)
        this.streetNr = new StringTag(streetNr)
        this.poBox = new StringTag(poBox)
        this.zip = new StringTag(zip)
        this.city = new StringTag(city)
        this.country = new StringTag(country)
    }

    toXml(tagName) {
        const tag = document.createElementNS(null, tagName)

        tag.appendChild(this.streetName.toXml(TAG_NAMES.STREET_NAME))
        tag.appendChild(this.streetNr.toXml(TAG_NAMES.STREET_NR))
        tag.appendChild(this.poBox.toXml(TAG_NAMES.PO_BOX))
        tag.appendChild(this.zip.toXml(TAG_NAMES.ZIP))
        tag.appendChild(this.city.toXml(TAG_NAMES.CITY))
        tag.appendChild(this.country.toXml(TAG_NAMES.COUNTRY))

        return tag
    }
}
