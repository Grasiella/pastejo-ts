import { Entrada } from "./types";

export const entrada: Entrada = {
    areas: [
        { id: 'Area 1', capacidade: 3, gmd: 1.2 },
        { id: 'Area 2', capacidade: 2, gmd: 2 },
    ],
    animais: [
        { id: 'V1', pesoInicial: 150 },
        { id: 'V2', pesoInicial: 150 },
        { id: 'V3', pesoInicial: 150 }
    ],
    movimentacoes: [
        { idAnimal: 'V1', idArea: 'Area 1', dias: 5 },
        { idAnimal: 'V2', idArea: 'Area 1', dias: 5 },
        { idAnimal: 'V2', idArea: 'Area 1', dias: 5 },
        { idAnimal: 'V3', idArea: 'Area 2', dias: 2 },
        { idAnimal: 'V3', idArea: 'Area 1', dias: 3 },
    ]
}