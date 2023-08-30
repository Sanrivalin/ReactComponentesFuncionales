import { useState } from "react"


function FuncComponent () {
    // console.log(useState('Hola papampanacho'))
    const [value,setValue] = useState(0)
    // const value = state[0]
    // const updateValue = state[1]


    return ( <div>
        Componente funcional
        <p>
            <button
             onClick={() =>
              setValue(value -1)} >-</button>
            {value}
            <button onClick={() =>
              setValue(value +1)}>+</button>
            
            </p>


    </div>
    )
}
export default FuncComponent
