import React from 'react'

export default props =>
    <div>
        <h1> {props.nome} {props.sobrenome} </h1>
        <h2> Filhos </h2>
        <ul>
            {
                // para cada filho de Pai2
                React.Children.map(props.children, child => {
                    // o clone cria o elemento a partir de uma cópia contendo nome e sobrenome do pai
                    return React.cloneElement(child, {
                        ...props, ...child.props // usa o nome do filho
                    })
                })
            }
        </ul>
    </div>