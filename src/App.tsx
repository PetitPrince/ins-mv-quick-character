import { useState } from 'react';
import './App.css';
import { AppShell, Group, Header, SegmentedControl, Tabs, Title } from '@mantine/core';

import { CharacterCreator } from './component/CharacterCreator';
import { IconPhoto, IconMessageCircle, IconSettings, IconList, IconUserPlus, IconX, IconCheck } from '@tabler/icons';
import { CharacterTemplate } from './helper/constant/CharacterTemplate';
import { Character } from "./helper/constant/Character";
import { calcCaraValues, calcTalentValues, calcPouvoirVanillaValues, calcPouvoir15ppValues, calcPouvoir20ppValues, calcPouvoir25ppValues, calacPouvoir30ppValues } from './helper/utils';
import { CharactersViewer } from './component/CharactersViewer';
import { showNotification } from '@mantine/notifications';


function App() {
  const [generatedNpcs,setGeneratedNpcs] = useState<Character[]>([]);
  const [appMode, setAppMode] = useState("create");

  
  const addNpc = (pp:number, template:CharacterTemplate | null | undefined, name:string, faction:string|null) =>{
    if(template === null || template === undefined){
      showNotification({
        color: 'red',
        icon: <IconX />,
        message: "Superieur manquant"
      })
      return

    }

      if(name ===""){
        showNotification({
          color: 'red',
          icon: <IconX />,
          message: "Nom Manquant"
        })
        return
      }
      if(template !== null && template !== undefined){

      const caraValues: { [key: string]: number; } = calcCaraValues(template.caracs, pp);
      const talentValues: { [key: string]: number | undefined; } = calcTalentValues(template.talents, pp);
      const pouvoirVanillaValues: { [key: string]: number | undefined | null; } = calcPouvoirVanillaValues(template.pouvoirs_vanilla, pp);
      const pouvoir15ppValues: { [key: string]: number | undefined | null | string; } = calcPouvoir15ppValues(template.pouvoirs_15pp, pp);
      const pouvoir20ppValues: { [key: string]: number | undefined | null | string; } = calcPouvoir20ppValues(template.pouvoirs_20pp, pp);
      const pouvoir25ppValues: { [key: string]: number | undefined | null | string; } = calcPouvoir25ppValues(template.pouvoirs_25pp, pp);
      const pouvoir30ppValues: { [key: string]: number | undefined | null | string; } = calacPouvoir30ppValues(template.pouvoirs_30pp, pp); 
  
      const myNewPerso : Character ={
          name: name,
          pp: pp,
          faction: faction,
          superieur: template.superieur,
          caracs : {Force: caraValues.Force, Agilite: caraValues.Agilite, Perception: caraValues.Perception, Volonte: caraValues.Volonte, Presence: caraValues.Presence, Foi: caraValues.Foi},
          talents: talentValues,
          pouvoirs_vanilla : pouvoirVanillaValues,
          pouvoirs_15pp: pouvoir15ppValues,
          pouvoirs_20pp: pouvoir20ppValues,
          pouvoirs_25pp: pouvoir25ppValues,
          pouvoirs_30pp: pouvoir30ppValues
      }
      generatedNpcs.push(myNewPerso)
      setGeneratedNpcs(generatedNpcs);
      showNotification({
        color: 'Green',
        icon: <IconCheck />,
        message: "Personnage crée"
      })

    }
  };

  let mainPanel;

  if(appMode==="create"){
    mainPanel= <CharacterCreator addNpc={addNpc} />
  }else{
    mainPanel= <CharactersViewer npcs={generatedNpcs} />
  }

  return (

    
    <AppShell
      padding="md"
      // aside={aside}
      header={
        <Header height={60} p="xs">
            <Title>Générateur de personnage INS/MV "kleenex" </Title>
            <SegmentedControl
              onChange={setAppMode}
              data={[
                { label: "Créer", value: "create" },
                { label: "Voir", value: "see" }
              ]}
            />
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
      {mainPanel}
      

    </AppShell>
  );
}

export default App;
