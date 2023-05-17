import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import homem from './homem.png'
import mulher from './mulher.png'
import crianca from './crianca.png'


const ModalContainer = styled.section<{display: string}>`
    width: 70%;
    height: 300px;
    background-color: gray;
    display: ${props => props.display};
    position: absolute;
    top: 100%;
`

const GenerosContainer = styled.section`
    height: 130px;
    ul{
        margin-left: 1rem;
        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            margin: 0.5rem 0;
            border-radius: 1rem;
            color: #000;
            img{
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
        }
    }
`

const CategoriasContainer = styled.section`
    margin-top: 1rem;
        span{
            font-size: 1.5rem;
        }
        ul{
            margin-left: 1rem;
            display: flex;
            flex-direction: column;
            li:hover{
                color: #fff;
            }
        }
`

interface Props {
    modalOpen: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface Categorias {
    item: string
}

export default function ModalMenu({modalOpen, setModalOpen}: Props) {
    const generos = [
        {
            genero: 'Masculino',
            imagem: homem
        },
        {
            genero: 'Feminino',
            imagem: mulher
        },
        {
            genero: 'Infantil',
            imagem: crianca
        }
    ]


    const [generoAtivo, setGeneroAtivo] = useState('')

    const [categorias, setCategorias ] = useState<Categorias[]>([])

    useEffect(() => {
        if(!generoAtivo){
            return
        }
        const Masculino = [
            {
                item: 'Camisa'
            },
            {
                item: 'Camiseta'
            },
            {
                item: 'Shorts'
            },
        ]
    
        const Feminino = [
            {
                item: 'Camisa'
            },
            {
                item: 'Blusa'
            },
            {
                item: 'Shorts'
            }
        ]
        
        switch (generoAtivo){
            case 'Masculino': 
            setCategorias(Masculino);
            break
            case 'Feminino': 
            setCategorias(Feminino);
            break
            default:
            setCategorias([])
        }
    }, [generoAtivo])


    return (
        <ModalContainer display={modalOpen ? 'block' : 'none'} onMouseLeave={() => setModalOpen(false)}>
            <GenerosContainer>
                <ul>
                    {generos.map((item, index) => (
                        <li style={{ border: generoAtivo === item.genero ? '2px solid #fff' : 'none', color:'#000' }} key={index} onMouseEnter={() => setGeneroAtivo(item.genero)}>
                            <Image src={item.imagem} alt={String(item.imagem)} />
                            {item.genero}
                        </li>
                    ))}
                </ul>
            </GenerosContainer>

            <CategoriasContainer>
                <ul>
                    <span>Roupas</span>
                    {categorias.map((item, index) => (
                        <li key={index}>{item.item}</li>
                    ))}
                </ul>
            </CategoriasContainer>
        </ModalContainer>
  )
}
