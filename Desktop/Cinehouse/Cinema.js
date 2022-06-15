const filmes = [
    {
    codigo: 1,
    titulo: "Homem de Ferro",
    duracao: 2.5,
    atores: ["fuano1", "fulano2", "fulano3"],
    anoLancamento: 2019,
    emCartaz: true

},
{
    codigo: 2,
    titulo: "Vingadores",
    duracao: 2,
    atores: ["fulano4", "fulano5", "fulano6"],
    anoLancamento: 2023,
    emCartaz: false

}
]
console.log (filmes)

 function adicionarFilme(novofilmes){  //Funcao p/ add novo filme
     filmes.push(novofilmes);          // metodo .push para add o novo filme
 }
     const filmeParaAdicionar = {     // objeto "novo filme"
        codigo: 3,  
        titulo: "Vingadores 3",
        duracao: 3,
        atores: ["fulano7", "fulano8", "fulano9"],
        anoLancamento: 2021,
        emCartaz: false
    
 }

 adicionarFilme(filmeParaAdicionar) // passando o parametro filmeParaAdicionar, para passar o novo filme 
 
console.log (filmes)
