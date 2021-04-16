import React from 'react'
import ReactDom from 'react-dom'

import Pai from './Pai'

import Pai2 from './Pai2'
import Filho from './Filho'

import Bike from './Bike'
import Car from './Car'
import Owner from './Owner'

ReactDom.render(
    <div>
        <Pai nome="Marcelo" sobrenome="Faria"/>
        <Pai nome="Joaquim" sobrenome="Pereira"/>

        <Pai2 nome="Anastacio" sobrenome="Pereira">
            <Filho nome="Daniel"/>
        </Pai2>
        <Pai2 nome="Dionísio" sobrenome="Costa">
            <Filho nome="Filho1"/>
            <Filho nome="Filho2"/>
        </Pai2>
        <Pai2 nome="Epaminondas" sobrenome="Souza">
            <Filho nome="Filho3"/>
            <Filho nome="Filho4"/>
            <Filho nome="Filho5"/>
        </Pai2>

        <Owner dono="Carlos" ano="2019" marca="Ferrari">
            <Car motor="1.8" bateria="Moura"/>
            <Bike aro="29" quadro="19"/>
        </Owner>
    </div>
    , document.getElementById("root")
)