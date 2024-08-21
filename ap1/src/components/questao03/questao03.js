import { useEffect, useState } from "react";
import axios from "axios";

const Questao03 = () => {

    // getdados com o link da api e const useState com os dados da maior capital e o da menor que serao alterados no decorrer do codigo
    const getDados = "https://restcountries.com/v3.1/region/europe?fields=capital,population";
    const [maior, setMaior] = useState("")
    const [menor, setMenor] = useState("")

    async function apiGetDados(){
        let maiorCapital
        let maiorPopulacaoCapital
        
        try{
            const response = await axios.get(getDados);
            //for para busca da maior capital
            for(let i = 0; i < 53; i++){
                if(response.data[i].population > response.data[i+1].population){
                    maiorCapital = response.data[i].capital
                    maiorPopulacaoCapital = response.data[i].population
                }else{
                    maiorCapital = response.data[i++].capital
                    maiorPopulacaoCapital = response.data[i++].population
                }
            }

            // seta o valor da maior capital na useState atraves do setMaior
            let maiorDados = {maiorCapital, maiorPopulacaoCapital}
            setMaior(maiorDados)

            let menorCapital
            let menorPopulacaoCapital

            //for para menor capital e set do valor da menor capital 
            for(let i = 0; i < 52; i++){
                if(response.data[i].population < response.data[i+1].population){
                    menorCapital = response.data[i].capital
                    menorPopulacaoCapital = response.data[i].population
                }else{
                    menorCapital = response.data[i++].capital
                    menorPopulacaoCapital = response.data[i++].population
                }
            }

            let menorDados = {menorCapital, menorPopulacaoCapital}
            setMenor(menorDados)
            
        } catch(error) {
            console.log(error);
        }
    }

    //chamada do useEffect com a apigetdados dentro
    useEffect(() => {
        apiGetDados();
    }, []);

    return(
        <div>
            <h2>A maior cidade é: {maior.maiorCapital}</h2>
            <h2>Com a populaçaõ de: {maior.maiorPopulacaoCapital}</h2>
            <p></p>
            <h2>A menor cidade é: {menor.menorCapital}</h2>
            <h2>Com a populaçaõ de: {menor.menorPopulacaoCapital}</h2>
        </div>
    )
}

export default Questao03;
