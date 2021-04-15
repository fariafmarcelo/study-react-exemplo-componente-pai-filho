import React from 'react'
import Filho from './Filho'

// componente orientado a função
export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/*Filho tem o mesmo sobrenome do pai*/}
            <Filho nome="Mariana" sobrenome={props.sobrenome}/>
            {/* As propriedades do pai são propagadas para o filho */}
            {/* ... Spread é propagação */}
            <Filho {...props} nome="Ana" />
            <Filho {...props}/>
        </ul>
    </div>