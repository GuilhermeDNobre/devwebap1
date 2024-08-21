const Questao01 = () => {
    //lista de Objeto JSON em formato de array
    const lista = [
        {a:10, b:3, c: 7},
        {a:5, b:-3, c: 9},
        {a:1, b:9, c: 40}
        ]        

    //Inicio do componente A e inicialização do comp B através do comp A
    return(
        <div>
            <h1>Componente A: </h1>
            <Questao01B lista={lista}/>
            
        </div>
        
    )
}

function Questao01B({lista}) {
    
    function isBigger(a) {
        if(lista.a > lista.b && lista.a>a.c){
            return(
                <div>
                    A com o valor {lista[0].a}
                </div>
            )
        } else{
            if(lista.b > lista.c){
                <div>
                    getElementById com o valor {lista[0].b}
                </div>
            }else {
                <div>
                    C com o valor {lista[0].c}
                </div>
            }
        }
        
        
        
    }


    return (
        <div>
            <h2>Componente B: </h2>
            <h4>Na primeira posicao do array objeto JSON, o maior elemento é: {isBigger(lista[0])}</h4>
            <h4>Na segunda posicao do array objeto JSON, o maior elemento é: {isBigger(lista[1])}</h4>
            <h4>Na terceira posicao do array objeto JSON, o maior elemento é: {isBigger(lista[2])}</h4>           
        </div>
        
    )
}

export default Questao01