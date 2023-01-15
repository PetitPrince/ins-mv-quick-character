import { Group, Stack, Table, Title, Text } from "@mantine/core"
import { CharacterTemplate } from "../helper/constant/CharacterTemplate";
import { calacPouvoir30ppValues, calcCaraValues, calcPouvoir15ppValues, calcPouvoir20ppValues, calcPouvoir25ppValues, calcPouvoirVanillaValues, calcTalentValues, evolvedCarac } from "../helper/utils";

export const CharacterTemplater = (props: {pp:number, characterTemplate: CharacterTemplate, isAnge: boolean, setTemplate:(s:CharacterTemplate)=>void}) => {
  const {pp, characterTemplate, isAnge, setTemplate} = props;

    const caraValues: { [key: string]: number; } = calcCaraValues(characterTemplate.caracs, pp);
    const talentValues: { [key: string]: number | undefined; } = calcTalentValues(characterTemplate.talents, pp);
    const pouvoirVanillaValues: { [key: string]: number | undefined | null; } = calcPouvoirVanillaValues(characterTemplate.pouvoirs_vanilla, pp);
    const pouvoir15ppValues: { [key: string]: number | undefined | null | string; } = calcPouvoir15ppValues(characterTemplate.pouvoirs_15pp, pp);
    const pouvoir20ppValues: { [key: string]: number | undefined | null | string; } = calcPouvoir20ppValues(characterTemplate.pouvoirs_20pp, pp);
    const pouvoir25ppValues: { [key: string]: number | undefined | null | string; } = calcPouvoir25ppValues(characterTemplate.pouvoirs_25pp, pp);
    const pouvoir30ppValues: { [key: string]: number | undefined | null | string; } = calacPouvoir30ppValues(characterTemplate.pouvoirs_30pp, pp); 

    const caraRows = Object.entries(caraValues).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      ));
      const talentRows = Object.entries(talentValues).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      ));
      const pouvoirRowsVanilla = Object.entries(pouvoirVanillaValues).map(([key, value]) => (
        <>
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
        </>
      ));


      const style15pp = pp>=15 ? {} : {opacity: "27%"};
      const pouvoirRows15pp = Object.entries(pouvoir15ppValues).map(([key, value]) => (
        <>
        <tr key={key} style={style15pp}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
        </>
      ));

      const style20pp = pp>=20 ? {} : {opacity: "23%"};
      const pouvoirRows20pp = Object.entries(pouvoir20ppValues).map(([key, value]) => (
        <>
        <tr key={key} style={style20pp}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
        </>
      ));      
      const style25pp = pp>=25 ? {} : {opacity: "19%"};
      const pouvoirRows25pp = Object.entries(pouvoir25ppValues).map(([key, value]) => (
        <>
        <tr key={key} style={style25pp}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
        </>
      ));

      const style30pp = pp>=30 ? {} : {opacity: "15%"};
      const pouvoirRows30pp = Object.entries(pouvoir30ppValues).map(([key, value]) => (
        <>
        <tr key={key} style={style30pp}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
        </>
      ));  
      

      const allPouvoirRows = [pouvoirRowsVanilla, pouvoirRows15pp, pouvoirRows20pp, pouvoirRows25pp, pouvoirRows30pp];
      
      const bl = isAnge? evolvedCarac(characterTemplate.caracs.Force, pp)+3 : evolvedCarac(characterTemplate.caracs.Force, pp)+2 

      return (
        <Stack onClick={()=>setTemplate(characterTemplate)}>
          <Title>{characterTemplate.superieur}</Title>
          <Stack>
          <Group>
            <Text>
              PF: {evolvedCarac(characterTemplate.caracs.Force, pp)+evolvedCarac(characterTemplate.caracs.Volonte, pp)}
            </Text>
            <Text>
              PP: {pp}
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


