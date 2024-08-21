import { useState } from "react"


const Questao02 = () => {

    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    let urlCostas = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"

    const [face, setFace] = useState(url)

    const trocarFace = () => {
        if(face === url){
            setFace(urlCostas)
        }else{
            setFace(url)
        }
    }



    return (
        <div>
            <img
                src={face}
                alt="pokemon"
                width={200}
            />

            
            <button
                onClick={() => trocarFace()}
            > Virar </button>
        </div>
    )
}

export default Questao02