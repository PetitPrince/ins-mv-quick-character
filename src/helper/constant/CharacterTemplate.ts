import { Caracs } from "./Caracs";

export interface CharacterTemplate{
    superieur: string;
    caracs: Caracs;
    talents: {[key: string]: number|undefined};
    pouvoirs_vanilla: {[key: string]: number|null|undefined};
    pouvoirs_15pp: {[key: string]: number|null|undefined};
    pouvoirs_20pp: {[key: string]: number|null|undefined};
    pouvoirs_25pp: {[key: string]: number|null|undefined};
    pouvoirs_30pp: {[key: string]: number|null|undefined};
}