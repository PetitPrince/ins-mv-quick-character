import { Caracs } from "./constant/Caracs";
import { carac_evol_table_starting_from_2, carac_evol_table_starting_from_3, carac_evol_table_starting_from_4, carac_evol_table_starting_from_5, talent_evol_table_starting_from_1, talent_evol_table_starting_from_2, talent_evol_table_starting_from_3, talent_evol_table_starting_from_4, talent_evol_table_starting_from_5, talent_evol_table_starting_from_6, talent_evol_table_starting_from_7, power_evol_table_starting_from_1, power_evol_table_starting_from_2, power_evol_table_starting_from_15pp, power_evol_table_starting_from_20pp, power_evol_table_starting_from_25pp, power_evol_table_starting_from_30pp } from "./constant/evolution_table";

export function idxFromPP(pp: number) {
    let idx = 0;
    if (pp >= 15) {

        idx = 1;
    }
    if (pp >= 20) {
        idx = 2;
    }

    if (pp >= 25) {
        idx = 3;
    }

    if (pp >= 30) {
        idx = 4;
    }

    if (pp >= 35) {
        idx = 5;
    }
    if (pp >= 40) {
        idx = 6;
    }
    return idx;

}

export function evolvedCarac(baseCar: number, pp: number) {
    let evolutionTable;
    if (pp == null) {
        return baseCar;
    }

    if (baseCar === 2) {
        evolutionTable = carac_evol_table_starting_from_2;
    }
    else if (baseCar === 3) {
        evolutionTable = carac_evol_table_starting_from_3;
    }
    else if (baseCar === 4) {
        evolutionTable = carac_evol_table_starting_from_4;
    } else {
        evolutionTable = carac_evol_table_starting_from_5;
    }

    const idx = idxFromPP(pp);
    return evolutionTable[idx];

}

export function evolvedTalent(baseTalent: number | undefined, pp: number) {
    let evolutionTable;
    if (pp === null || baseTalent === undefined) {
        return baseTalent;
    }

    if (baseTalent === 1) {
        evolutionTable = talent_evol_table_starting_from_1;
    }
    else if (baseTalent === 2) {
        evolutionTable = talent_evol_table_starting_from_2;
    }
    else if (baseTalent === 3) {
        evolutionTable = talent_evol_table_starting_from_3;
    }
    else if (baseTalent === 4) {
        evolutionTable = talent_evol_table_starting_from_4;
    }
    else if (baseTalent === 5) {
        evolutionTable = talent_evol_table_starting_from_5;
    }
    else if (baseTalent === 6) {
        evolutionTable = talent_evol_table_starting_from_6;
    } else {
        evolutionTable = talent_evol_table_starting_from_7;
    }

    const idx = idxFromPP(pp);
    return evolutionTable[idx];

}
export function evolvedPouvoirVanilla(basePouvoir: number | null | undefined, pp: number) {
    let evolutionTable;
    if (basePouvoir === null || basePouvoir === undefined) {
        return basePouvoir;
    }
    if (basePouvoir === 1) {
        evolutionTable = power_evol_table_starting_from_1;
    } else {
        evolutionTable = power_evol_table_starting_from_2;
    }

    const idx = idxFromPP(pp);

    return evolutionTable[idx];
}

export function evolvedPouvoir15pp(pp: number) {
    let evolutionTable = power_evol_table_starting_from_15pp;
    const idx = idxFromPP(pp);
    return evolutionTable[idx];
}
export function evolvedPouvoir20pp(pp: number) {
    let evolutionTable = power_evol_table_starting_from_20pp;
    const idx = idxFromPP(pp);
    return evolutionTable[idx];
}
export function evolvedPouvoir25pp(pp: number) {
    let evolutionTable = power_evol_table_starting_from_25pp;
    const idx = idxFromPP(pp);
    return evolutionTable[idx];
}
export function evolvedPouvoir30pp(pp: number) {
    let evolutionTable = power_evol_table_starting_from_30pp;
    const idx = idxFromPP(pp);
    return evolutionTable[idx];
}



export function calacPouvoir30ppValues(pouvoirs_30pp: { [key: string]: number | null | undefined | string; }, pp: number) {
    let pouvoir30ppValues: { [key: string]: number | undefined | null | string; } = {};
    Object.entries(pouvoirs_30pp).forEach(([pouvoirName, pouvoirValue]) => {
      pouvoir30ppValues[pouvoirName] = pp >= 30 ? evolvedPouvoir30pp(pp) : "0 (30pp mini)";
    });
    return pouvoir30ppValues;
  }
  export function calcPouvoir25ppValues(pouvoirs_25pp: { [key: string]: number | null | undefined | string; }, pp: number) {
    let pouvoir25ppValues: { [key: string]: number | undefined | null | string; } = {};
    Object.entries(pouvoirs_25pp).forEach(([pouvoirName, pouvoirValue]) => {
      pouvoir25ppValues[pouvoirName] = pp >= 25 ? evolvedPouvoir25pp(pp) : "0 (25pp mini)";
    });
    return pouvoir25ppValues;
  }
  export function calcPouvoir20ppValues(pouvoirs_20pp: { [key: string]: number | null | undefined | string; }, pp: number) {
    let pouvoir20ppValues: { [key: string]: number | undefined | null | string; } = {};
    Object.entries(pouvoirs_20pp).forEach(([pouvoirName, pouvoirValue]) => {
      pouvoir20ppValues[pouvoirName] = pp >= 20 ? evolvedPouvoir20pp(pp) : "0 (20pp mini)";
    });
    return pouvoir20ppValues;
  }
  export function calcPouvoir15ppValues(pouvoirs_15pp: { [key: string]: number | null | undefined | string; }, pp: number) {
    let pouvoir15ppValues: { [key: string]: number | undefined | null | string; } = {};
    Object.entries(pouvoirs_15pp).forEach(([pouvoirName, pouvoirValue]) => {
      pouvoir15ppValues[pouvoirName] = pp >= 15 ? evolvedPouvoir15pp(pp) : "0 (15pp mini)";
    });
    return pouvoir15ppValues;
  }
  export function calcPouvoirVanillaValues(pouvoirs_vanilla: { [key: string]: number | null | undefined; }, pp: number) {
    let pouvoirVanillaValues: { [key: string]: number | undefined | null; } = {};
    Object.entries(pouvoirs_vanilla).forEach(([pouvoirName, pouvoirValue]) => {
      pouvoirVanillaValues[pouvoirName] = evolvedPouvoirVanilla(pouvoirValue, pp);
    });
    return pouvoirVanillaValues;
  }
  export function calcTalentValues(talents: { [key: string]: number | undefined; }, pp: number) {
    let talentValues: { [key: string]: number | undefined; } = {};
    Object.entries(talents).forEach(([talentName, talentValue]) => {
      talentValues[talentName] = evolvedTalent(talentValue, pp);
    });
    return talentValues;
  }
  export function calcCaraValues(caracs: Caracs, pp: number) {
    let caraValues: { [key: string]: number; } = {};
    Object.entries(caracs).forEach(([caraName, caraValue]) => {
      caraValues[caraName] = evolvedCarac(caraValue, pp);
    });
    return caraValues;
  }
  