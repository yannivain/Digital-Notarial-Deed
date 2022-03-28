import {PERSON_TYPES} from "@/util/const";
import LegalPersonTag from "@/data-classes/tags/LegalPersonTag";
import NaturalPersonTag from "@/data-classes/tags/NaturalPersonTag";

export default class PersonTag {
    static fromData(data) {
        switch (data.type_) {
            case PERSON_TYPES.LEGAL:
                return new LegalPersonTag(data)
            case PERSON_TYPES.NATURAL:
                return new NaturalPersonTag(data)
        }
    }
}
