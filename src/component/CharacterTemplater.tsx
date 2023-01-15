import { Group, Stack, Table, Title, Text } from "@mantine/core"
import { CharacterTemplate } from "../helper/constant/CharacterTemplate";
import { evolvedCarac, evolvedTalent, evolvedPouvoirVanilla, evolvedPouvoir15pp, evolvedPouvoir20pp, evolvedPouvoir25pp, evolvedPouvoir30pp } from "../helper/utils";

export const CharacterTemplater = (props: {pp:number, characterTemplate: CharacterTemplate, isAnge: boolean, setTemplate:(s:CharacterTemplate)=>void}) => {
  const {pp, characterTemplate, isAnge, setTemplate} = props

    const caraRows = Object.entries(characterTemplate.caracs).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{evolvedCarac(value, pp)}</td>
        </tr>
      ));
      const talentRows = Object.entries(characterTemplate.talents).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{evolvedTalent(value, pp)}</td>
        </tr>
      ));
      const pouvoirRowsVanilla = Object.entries(characterTemplate.pouvoirs_vanilla).map(([key, value]) => (
        <>
        <tr key={key}>
          <td>{key}</td>
          <td>{evolvedPouvoirVanilla(value, pp)}</td>
        </tr>
        </>
      ));

      const pouvoirRows15pp = pp>=15 ? Object.entries(characterTemplate.pouvoirs_15pp).map(([key, value]) => (
        <>
        <tr key={key}>
          <td>{key}</td>
          <td>{evolvedPouvoir15pp(pp)}</td>
        </tr>
        </>
      )) : Object.entries(characterTemplate.pouvoirs_15pp).map(([key, value]) => (
        <>
        <tr key={key} style={{opacity: "30%"}}>
          <td>{key}</td>
          <td>0 (15pp mini)</td>
        </tr>
        </>
      ));
      
      const pouvoirRows20pp = pp>=20 ? Object.entries(characterTemplate.pouvoirs_20pp).map(([key, value]) => (
        <>
        <tr key={key}>
          <td>{key}</td>
          <td>{evolvedPouvoir20pp(pp)}</td>
        </tr>
        </>
      )) : Object.entries(characterTemplate.pouvoirs_20pp).map(([key, value]) => (
        <>
        <tr key={key} style={{opacity: "27%"}}>
          <td>{key}</td>
          <td>0 (20pp mini)</td>
        </tr>
        </>
      ));
      
      const pouvoirRows25pp = pp>=25? Object.entries(characterTemplate.pouvoirs_25pp).map(([key, value]) => (
        <>
        <tr key={key}>
          <td>{key}</td>
          <td>{evolvedPouvoir25pp(pp)}</td>
        </tr>
        </>
      )) : Object.entries(characterTemplate.pouvoirs_25pp).map(([key, value]) => (
        <>
        <tr key={key} style={{opacity: "25%"}}>
          <td>{key}</td>
          <td>0 (25pp mini)</td>
        </tr>
        </>
      ));
      
      const pouvoirRows30pp = pp>=30 ? Object.entries(characterTemplate.pouvoirs_30pp).map(([key, value]) => (
        <>
        <tr key={key}>
          <td>{key}</td>
          <td>{evolvedPouvoir30pp(pp)}</td>
        </tr>
        </>
      )) : Object.entries(characterTemplate.pouvoirs_30pp).map(([key, value]) => (
        <>
        <tr key={key} style={{opacity: "22%"}}>
          <td>{key}</td>
          <td>0 (30pp mini)</td>
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