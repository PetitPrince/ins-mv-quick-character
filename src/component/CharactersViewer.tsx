import { Character } from "../helper/constant/Character";
import { OneViewedCharacter } from "./OneViewedCharacter";

export const CharactersViewer = (props: {npcs:Character[]}) =>{

    const characters = props.npcs.map((sheet) => <OneViewedCharacter characterSheet={sheet} />)

    return (
        <>
        {characters}
        </>
    );
}
