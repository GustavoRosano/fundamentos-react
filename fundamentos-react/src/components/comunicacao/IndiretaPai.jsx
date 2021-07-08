import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [a, b] = [1, 2]
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [trabalha, setTrabalha] = useState(false)

    function fornecerInformacoes(nome, idade, trabalha) {
        setNome(nome)
        setIdade(idade)
        setTrabalha(trabalha)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{trabalha ? 'Trabalha' : 'Desempregado'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}