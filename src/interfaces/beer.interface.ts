export interface punkAPIResponse {
    id: number
    name: string
    tagline: string
    first_brewed: string
    description: string
    image_url: string | null
    abv: number
    ibu: number
    target_fg: number
    target_og: number
    ebc: number
    srm: number
    ph: number
    attenuation_level: number
    volume: ValueUnit
    boil_volume: ValueUnit
    method: Method
    food_pairing: string[]
    brewers_tips: string
    contributed_by: string
    price: PriceTag[]
}

export interface PriceTag {
    amount: number
    tax?: number
    currency: '€' | '$' | '¥' | '₤'
}

export type CraftBeerWithPrice =
punkAPIResponse & { price: PriceTag }

const agsdf = {} as CraftBeerWithPrice


export interface Ingredients {
    malt: Malt[]
    hops: Hops[]
    yeast: string
}

export interface Malt {
    name: string
    amount: ValueUnit
}

export interface Hops {
    name: string
    amount: ValueUnit
    add: string
    attribute: string
}

export interface Method {
    fermentation: {
        temp: ValueUnit
    }
    mesh_temp: MeshTemp[]
    twist: string | null
}

export interface MeshTemp {
    temp: ValueUnit
    duration: number | null
}

export interface ValueUnit {
    value: number
    unit: string
}
