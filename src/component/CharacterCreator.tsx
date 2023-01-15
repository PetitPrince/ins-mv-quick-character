import { Stack, Title, Dialog, TextInput, Select, NumberInput, Button, Text } from "@mantine/core";
import { useState } from "react";
import { CharacterTemplate } from "../helper/constant/CharacterTemplate";
import { Character } from "../helper/constant/Character";
import quick_ange from "../helper/constant/quick_ange.json"
import quick_demon from "../helper/constant/quick_demon.json"
import { calcCaraValues, calcTalentValues, calcPouvoirVanillaValues, calcPouvoir15ppValues, calcPouvoir20ppValues, calcPouvoir25ppValues, calacPouvoir30ppValues } from "../helper/utils";
import { CharacterTemplater } from "./CharacterTemplater";

export const CharacterCreator = (props: {addNpc:(pp:number, template:CharacterTemplate | null | undefined, name:string, faction:string | null)=> void}) =>{

    const [name, setName] = useState<string>("");
    const [pp, setPp] = useState(10);
    const [faction, setFaction] = useState<string | null>("Ange");
    const [template, setTemplate] = useState<CharacterTemplate|null>();


    
      const all_ange = quick_ange.map((ange:CharacterTemplate)=> <CharacterTemplater pp={pp} characterTemplate={ange} isAnge={true} setTemplate={setTemplate}/>)
      const all_demon = quick_demon.map((demon:CharacterTemplate)=> <CharacterTemplater pp={pp} characterTemplate={demon} isAnge={false} setTemplate={setTemplate}/>)
    

      let allCara = faction==="Ange" ? all_ange : all_demon;

    return (<Stack>
        <Dialog
        opened={true}
        size="lg"
        radius="md"
        >
        <Stack>

        <TextInput       label="Nom" required value={name} onChange={(event) => setName(event.currentTarget.value)} />

          <Select required label="Faction" value={faction} onChange={setFaction} data={['Ange','Demon']} />

          <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
            PP
          </Text>

          <NumberInput value={pp} onChange={(val:number) => setPp(val)} min={10} />

          <Text>
            Superieur: {template?.superieur}
          </Text>
          <Button onClick={() => props.addNpc(pp, template,name, faction)}>Ajouter</Button>

        </Stack>
        </Dialog>
  
        {allCara}
          
      </Stack>);
}
