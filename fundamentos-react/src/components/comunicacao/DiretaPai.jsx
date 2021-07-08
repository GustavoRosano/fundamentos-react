import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} trabalha={true}></DiretaFilho>
            <DiretaFilho nome="Gabriel" idade={17} trabalha={false}></DiretaFilho>
        </div>
    )
}