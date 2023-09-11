import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivros = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%
    justify-content: center;
    cursor: pointer;

`


function UltimosLancamentos() {

    return (
        <UltimosLancamentosContainer>
            <Titulo cor={"#EB9B00"}
            tamanhoFonte={'36px'}
            > 
            ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivros>{ livros.map (livro => (
                <img src={livro.src} alt='Imagem do livro' />


            ))} </NovosLivros>
        </UltimosLancamentosContainer>
    )



}

export default UltimosLancamentos;