import {cloneDeep} from "lodash"

export const PERSON_TYPES = {
    NATURAL: "NATURAL",
    LEGAL: "LEGAL"
}

export const DEFAULT_ADDRESS = {
    streetName: "",
    streetNr: "",
    poBox: "",
    zip: "",
    city: "",
    country: "",
}
export const DEFAULT_IDENTITY = {
    name: "",
    firstname: "",
    birthday: "",
    sex: "",
    placeResidency: cloneDeep(DEFAULT_ADDRESS),
    placeOrigin: ""
}
export const DEFAULT_LEGAL_PERSON = {
    name: "",
    seat: "",
    uid: "",
    representative: cloneDeep(DEFAULT_IDENTITY)
}
export const DEFAULT_PERSON = {
    type_: undefined
}

export const DEFAULT_NATURAL = {
    type_: PERSON_TYPES.NATURAL,
    ...cloneDeep(DEFAULT_IDENTITY)
}

export const DEFAULT_LEGAL = {
    type_: PERSON_TYPES.LEGAL,
    ...cloneDeep(DEFAULT_LEGAL_PERSON)
}


