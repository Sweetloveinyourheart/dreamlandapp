import {
    Direction,
    LandType,
    LegalDocuments,
    OwnerType,
    PostStatus,
    RealEstateCategory
} from "../enums/realEstate"
import { ProjectInterface } from "./project"
import { RealEstateFilter } from "./realEstate"

interface LandAddress {
    houseNumber?: string
    showHouseNumber?: boolean
    province: string
    district: string
    ward: string
    street: string
}

interface LandPosition {
    blockName?:  string
    code?: {
        value: string
        showCode?: boolean
    }
}

export interface LandInterface {
    title: string
    description: string
    category: RealEstateCategory

    media: {
        images: string[]
        videos: string[]
    }

    detail: {
        position: LandPosition
        address: LandAddress
        acreage: {
            totalAcreage: number
            height?: number
            width?: number
        }
        pricing: {
            total: number
            deposit?: number
        }
    }

    overview: {
        type: LandType
        doorDirection?: Direction
        legalDocuments?: LegalDocuments
        frontispiece?: boolean
        carAlley?: boolean
        noHau?: boolean
    }

    owner: {
        name: string
        phone: string
    }

    timeStamp: Date
    postStatus: PostStatus
    googleMapsLink: string
    directLink: string
    index: number

}

export type LandFilter = RealEstateFilter & {
    type?: LandType
    doorDirection?: Direction
    legalDocuments?: LegalDocuments
    frontispiece?: boolean
    carAlley?: boolean
    noHau?: boolean
}