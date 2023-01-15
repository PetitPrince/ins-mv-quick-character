import { Stack, Title, Group, Table, Text } from "@mantine/core"
import { Character } from "../helper/constant/Character";
import { evolvedCarac } from "../helper/utils"

export const OneViewedCharacter = (props: {characterSheet:Character}) =>{
    const characterSheet = props.characterSheet;
    const bl = characterSheet.faction==="Ange"?  characterSheet.caracs.Force +3 : characterSheet.caracs.Force +2;
    const caraRows = Object.entries(characterSheet.caracs).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      ));
      const talentRows = Object.entries(characterSheet.talents).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      ));
    const pouvoirRowsVanilla = Object.entries(characterSheet.pouvoirs_vanilla).map(([key, value]) => (
        <>
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
        </>
      ));

      const pouvoirRows15pp = Object.entries(characterSheet.pouvoirs_15pp).map(([key, value]) => {
        if(typeof(value)=="string"){
            return <></>
        }
        
          return (
              <>
                  <tr key={key}>
                      <td>{key}</td>
                      <td>{value}</td>
                  </tr>
              </>
          );
      });
      const pouvoirRows20pp = Object.entries(characterSheet.pouvoirs_15pp).map(([key, value]) => {
        if(typeof(value)=="string"){
            return <></>
        }
        
          return (
              <>
                  <tr key={key}>
                      <td>{key}</td>
                      <td>{value}</td>
                  </tr>
              </>
          );
      });
      const allPouvoirRows = [pouvoirRowsVanilla, pouvoirRows15pp, pouvoirRows20pp
        // , pouvoirRows25pp, pouvoirRows30pp
    ];

    return (
        <Stack>
        <Title>{characterSheet.name}, {characterSheet.faction} de {characterSheet.superieur}</Title>
        <Stack>
        <Group>
          <Text>
            PF: {characterSheet.caracs.Force+characterSheet.caracs.Volonte}
          </Text>
          <Text>
            PP: {characterSheet.pp}
          </Text>
        </Group>
        <Text>
            BL: {bl}, BG: {bl*2}, BF: {bl*3}, MS: {bl*4} 
          </Text>
    
        </Stack>
        <Group>
          <Table sx={{width: "20%"}}>
            <thead>
                <tr>
                <th>Caractéristique</th>
                <th>Rang</th>
                </tr>
            </thead>
            <tbody>{caraRows}</tbody>
          </Table>
          <Table sx={{width: "20%"}}>
            <thead>
                <tr>
                <th>Talent</th>
                <th>Rang</th>
                </tr>
            </thead>
            <tbody>{talentRows}</tbody>
          </Table>
          <Table sx={{width: "20%"}}>
            <thead>
                <tr>
                <th>Pouvoir</th>
                <th>Niveau</th>
                </tr>
            </thead>
            <tbody>{allPouvoirRows}</tbody>
            </Table>
    
        </Group>
      </Stack>
    );

}