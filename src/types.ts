export interface Animal {
    id: string,
    pesoInicial: number,
    pesoFinal: number,
    dia: number
}

export interface Area {
    id: string,
    capacidade: number,
    gmd: number
}

export interface Movimentacao {
    idAnimal: string,
    idArea: string,
    dias: number
}

export interface Entrada {
    areas: Area[],
    animais: {
        id: string,
        pesoInicial: number
    }[],
    movimentacoes: Movimentacao[]
}

export type PastejoRotacionado = { [idArea: string]: number[] }