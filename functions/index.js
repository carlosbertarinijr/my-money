const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp()

exports.soma = functions.database.ref('/movimentacoes/{dia}')
    .onWrite(async(change, context) => {
        const mesesRef = admin.database.ref('/meses/'+context.params.dia)
        const movimentacoesRef = change.after.ref
        const movimentacoesSS = await movimentacoesRef.once('value')
        const movimentacoes = movimentacoesSS.val()

        let entradas = 0
        let saida = 0

        Object.keys(movimentacoes).forEach(m => {
            if(movimentacoes[m].valor > 0) {
                entradas += movimentacoes[m].valor
            }else {
                saida += movimentacoes[m].valor
            }
        })

        return mesesRef.transaction(current => {
            if(current === null) {
                return {
                    entradas,
                    saida,
                    previsao_entrada: 0,
                    previsao_saida: 0
                }
            }
            return {
                ...current,
                entradas,
                saida
            }
        })
    })