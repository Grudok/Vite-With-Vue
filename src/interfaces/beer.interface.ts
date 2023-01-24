export interface punkapiResponse {
    price_ingredients: number
    id: number
    name: string
    tagline: string
    first_brewed: Date
    description: string
    image_url: string
    abv: number
    ebc: number
    price: number
    deposit: number
    volume: {
        value: number
        unit: string
    }
    boil_volume: {
        value: number
        unit: string
    }
    method: Method[]
    yeast: string
    food_pairing: string
    brewers_tips: string
    ingredients: {
        malt: { length: number }
        hops: { length: number }
    }
}

export interface Method {
    fermentation: {
        temp: {
            unit: string
            value: number
        }
        duration: number
    }
}
