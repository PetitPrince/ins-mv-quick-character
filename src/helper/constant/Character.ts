import { CharacterTemplate } from "./CharacterTemplate";


export interface Character extends CharacterTemplate {
    name: string;
    faction: string |null;
    pp: number;

}
