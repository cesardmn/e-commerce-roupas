import { styled } from "styled-components"
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useState } from "react"

interface Props {
    display : string
}

const ArticleContainer = styled.article`
    width: 90%;
    margin: 0 auto;
    background-color: gray;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 0.5rem;
    position: relative;
    `

const Filtro = styled.section<Props>`
    background-color: gray;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    section{
        background-color: #bababa;
        display: ${props => props.display};
        flex-direction: column;
        gap: 0.2rem;
        padding: 0.5rem;
    }
    section legend{
        margin-bottom: 0.5rem;
    }
    section div{
        display: flex;
        align-items: center;
    }
`

export default function Filtrar(){
    const [ filtrar, setFiltrar ] = useState(false)

    const genero = ['Masculino','Feminino','Infantil']
    const categoria = ['camisa','camiseta','shorts']

    return(
        <ArticleContainer>
            <h2 onClick={() => setFiltrar(!filtrar)}>Filtrar por: <AiOutlineArrowDown /></h2>
            <Filtro display={filtrar ? 'flex' : 'none'}>
                <section>
                    <legend>Gênero</legend>
                    <div>
                        <input type="checkbox" name="generoMasculino" id="" />
                        <label htmlFor="generoMasculino">Masculino</label>
                    </div>
                    <div>
                        <input type="checkbox" name="generoFeminino" id="" />
                        <label htmlFor="generoFeminino">Feminina</label>
                    </div>
                    <div>
                        <input type="checkbox" name="generoInfantil" id="" />
                        <label htmlFor="generoInfantil">Infantil</label>
                    </div>
                </section>
                <section>
                    <legend>Tipo de produto</legend>
                    <div>
                        <input type="checkbox" name="produtoMasculino" id="" />
                        <label htmlFor="produtoMasculino">Camisa</label>
                    </div>
                    <div>
                        <input type="checkbox" name="produtoFeminino" id="" />
                        <label htmlFor="produtoFeminino">Camiseta</label>
                    </div>
                    <div>
                        <input type="checkbox" name="produtoInfantil" id="" />
                        <label htmlFor="produtoInfantil">Shorts</label>
                    </div>
                </section>
            </Filtro>
        </ArticleContainer>
    )
}