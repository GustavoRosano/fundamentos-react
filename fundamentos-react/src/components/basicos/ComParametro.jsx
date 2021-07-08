import React from 'react'

export default function ComParemetro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2> {props.titulo} </h2>
            <p><strong> {props.aluno} </strong>
            tem nota
            <strong> {notaInt} </strong></p>
            e está
            <strong> {status} </strong>
        </div>
    )
}