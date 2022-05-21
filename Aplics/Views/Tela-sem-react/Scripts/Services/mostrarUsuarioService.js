import { informacoesUsuario } from '../../Templates/MostraUsuarioTemplate.js'
import { MainServices } from "./MainServices.js";
import * as Controller from '../Controller/mostrarUsuarioController.js'

let idEncontrado = MainServices.buscaID('#'); 

const mostrarTodosDados = async ( desmonstrador ) => {

    const GET = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'authorization-token':MainServices.pegarToken()
           }
       };
    

    const respostaUsuario = await MainServices.simplesRequisicao( MainServices.rotaPrincipalAPI() + '/usuario/lista/', idEncontrado , GET );
    informacoesUsuario( respostaUsuario, desmonstrador );
}


const mostrarUsuarioLogado = ( nomeDoUsuario ) => {
    MainServices.exibeDado('#nomeDoUsuario', nomeDoUsuario );
}


export { mostrarTodosDados, mostrarUsuarioLogado }