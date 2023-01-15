import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppShell, Dialog, Group, Header, NumberInput, SegmentedControl, Stack, Title, Text, Button, Select } from '@mantine/core';
import { CharacterTemplater } from './component/CharacterTemplater';

import quick_ange from "./helper/constant/quick_ange.json"
import quick_demon from "./helper/constant/quick_demon.json"
import { CharacterTemplate } from './helper/constant/CharacterTemplate';


export enum APPMODE {
  CREATE = "create",
  UPDATE = "update",
  PLAY = "play",
}
const oneTemplate ={
  superieur: 'William',
  caracs: {
    Force: 4,
    Agilite: 2,
    Perception: 3,
    Volonte: 5,
    Presence: 2,
    Foi: 2
  },
  talents: {Combat: 4, Resistance: 3},
  pouvoirs_vanilla: {idkfa:3, iddqd:null},
  pouvoir_15pp: {},
  pouvoir_20pp: {comegetsome:1},
  pouvoir_25pp: {},
  pouvoir_30pp: {}
};



function App() {
  const [pp, setPp] = useState(10);
  const [faction, setFaction] = useState<string | null>("Ange");
  const [template, setTemplate] = useState<CharacterTemplate|null>();
  const all_ange = quick_ange.map((ange:CharacterTemplate)=> <CharacterTemplater pp={pp} characterTemplate={ange} isAnge={true} setTemplate={setTemplate}/>)
  const all_demon = quick_demon.map((demon:CharacterTemplate)=> <CharacterTemplater pp={pp} characterTemplate={demon} isAnge={false} setTemplate={setTemplate}/>)

  let allCara = faction==="Ange" ? all_ange : all_demon;


  return (

    
    <AppShell
      padding="md"
      // aside={aside}
      header={
        <Header height={60} p="xs">
          <Group>
            <Title>Générateur de personnage INS/MV "kleenex" </Title>
            {/* <SegmentedControl
              // onChange={setAppMode}
              data={[
                { label: "Créer", value: APPMODE.CREATE },
                { label: "Voir", value: APPMODE.UPDATE },
              ]}
            /> */}
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      
      <Stack>
      <Title>Collection</Title>

      </Stack>

      <Stack>
        <Title>Créateur</Title>
        <Dialog
        opened={true}
        size="lg"
        radius="md"
        >
        <Stack>
          <Select label="Faction" value={faction} onChange={setFaction} data={['Ange','Demon']} />

          <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
            PP
          </Text>

          <NumberInput value={pp} onChange={(val:number) => setPp(val)} min={10} />

          <Text>
            Superieur: {template?.superieur}
          </Text>
          {/* <Button onClick={() => console.log("meh")}>Ajouter</Button> */}

        </Stack>
        </Dialog>
  
        {allCara}
          
      </Stack>

    </AppShell>
  );
}

export default App;
