export class Pokemon{
    id?: string;
    name?: string;
    supertype?: string;
    subtypes?: string[];
    hp?: string;
    types?: string[];
    evolesFrom?: string;
    evolvesTo?: string[];
    rules?: string[];
    ancientTrait?: IAncientTrait;
    abilities?: IAbility[];
    attacks?: IAttack[];
    weaknesses?: IWeakness[];
    resistances?: IResistance[];
    retreatCost?: string[];
    convertedRetreatCost?: number;
    set?: ISet;
    number?: string;
    artist?: string;
    rarity?: string;
    flavorText?: string;
    nationalPokedexNumbers?: number[];
    legalities?: ILegality;
    images?: ICardImage;
    tcgplayer?: ITCGPlayer;
    cardmarket?: ICardmarket;
}

export class IAncientTrait {
    name?: string;
    text?: string;
}

export class IAbility {
    name?: string;
    text?: string;
    type?: string;
}

export class IAttack {
    cost?: string[];
    name?: string;
    text?: string;
    damage?: string;
    convertedEnergyCost?: string;
}

export class IWeakness {
    type?: string;
    value?: string;
}

export class IResistance {
    type?: string;
    value?: string;
}

export class ISet {
    id?: string;
    images?: ISetImage;
    legalities?: ILegality;
    name?:  string;
    printedTotal?: number;
    ptcgoCode?: string;
    releaseDate?: string;
    series?:  string;
    total?: number;
    updatedAt?: string;
}

export class ILegality {
    standard?: string;
    expanded?: string;
    unlimited?: string;
}

export class ICardImage {
    small?: string;
    large?: string;
}

export class ITCGPlayer {
    url?: string;
    updatedAt?: string;
    prices?: IpriceTcg[];	
}

export class IpriceTcg {
    normal?: PriceTcg;
    reverseHolofoil?: PriceTcg;
}

export class PriceTcg {
    low?: number;
    mid?: number;
    high?: number;
    market?: number;
    directLow?: number;
}

export class ICardmarket {
    rl?: string;
    updatedAt?: string;
    prices?: IpriceMarket[];
}

export class IpriceMarket {
    averageSellPrice?: number;
    lowPrice?: number;
    trendPrice?: number;
    germanProLow?: number;
    suggestedPrice?: number;
    reverseHoloSell?: number;
    reverseHoloLow?: number;
    reverseHoloTrend?: number;
    lowPriceExPlus?: number;
    avg1?: number;
    avg7?: number;
    avg30?: number;
    reverseHoloAvg1?: number;
    reverseHoloAvg7?: number;
    reverseHoloAvg30?: number;
}

export class ISetImage{
    id?: string;
    name?: string;
    series?: string;
    printedTotal?: number;
    total?: number;
    legalities?: ILegality;
    ptcgoCode?: string;
    releaseDate?: string;
    updatedAt?: string;
    images?: Iimages
        
}

export class Iimages {
    symbol?: string;
    logo?: string;
}