import { entrada } from "./entrada";
import { animais, calcularPastejo, pastejo } from "./pastejo";

calcularPastejo(entrada)
console.table(pastejo)
console.table(Array.from(animais.values()), ['id', 'pesoInicial', 'pesoFinal'])