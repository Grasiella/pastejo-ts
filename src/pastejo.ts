import { Animal, Area, Entrada, Movimentacao, PastejoRotacionado } from "./types"

export const pastejo: PastejoRotacionado = {}
export const animais: Map<string, Animal> = new Map()
const areas: Map<string, Area> = new Map()
let movimentacoes: Movimentacao[] = []

const prePastejo = (entrada: Entrada) => {
    movimentacoes = entrada.movimentacoes
    for (const area of entrada.areas) {
        pastejo[area.id] = []
        areas.set(area.id, area)
    }
    for (const animal of entrada.animais) {
        animais.set(animal.id, {
            id: animal.id,
            pesoInicial: animal.pesoInicial,
            pesoFinal: animal.pesoInicial,
            dia: 0
        })
    }
}

export const calcularPastejo = (entrada: Entrada) => {
    prePastejo(entrada)

    const verifica = (area: Area, inicio: number, fim: number)  => {
        for (let i = inicio; i <= fim; i++) {
            if (pastejo[area.id][i] == undefined)
                return
            if (pastejo[area.id][i] + 1 > area.capacidade)
                throw new Error(`Área "${area.id}" está com sua capacidade máxima no dia ${i}`)
        }
    }

    const alocaAnimal = (movimentacao: Movimentacao, inicio: number, fim: number) => {
        const animal = animais.get(movimentacao.idAnimal) as Animal
        const area   = areas.get(movimentacao.idArea) as Area
        var aux: number = 0
        verifica(area, inicio, fim)
        for (let i = inicio; i <= fim; i++) {
            pastejo[movimentacao.idArea][i] = pastejo[movimentacao.idArea][i] ?? 0
            pastejo[movimentacao.idArea][i]++
            aux = animal.pesoFinal + area.gmd
            animal.pesoFinal = Number((aux).toFixed(2))
        }
    }

    for (const movimentacao of movimentacoes) {
        const animal = animais.get(movimentacao.idAnimal) as Animal
        const inicio = animal.dia
        const fim = inicio + movimentacao.dias - 1
        animal.dia = fim + 1
        alocaAnimal(movimentacao, inicio, fim)
    }
}