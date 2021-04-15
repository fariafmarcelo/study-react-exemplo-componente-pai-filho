import React from 'react'

//componente do tipo função que pode ser utilizada em outro arquivo
//a função retornando html é preciso ter o componente REACT na linha 1 para fazer o transpile
export default props => <li>{props.nome} {props.sobrenome}</li>