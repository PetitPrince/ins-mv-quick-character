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
