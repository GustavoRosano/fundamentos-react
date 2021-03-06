import React from 'react'

export default props => {
    const cb = props.quandoClicar
    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarTrabalha = () => Math.random() > 0.5 
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => cb('João', gerarIdade, gerarTrabalha)}>
                Fornecer Informações
            </button>
        </div>
    )
}