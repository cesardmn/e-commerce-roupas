import React, { useState } from 'react'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { BsHandbag } from 'react-icons/bs'
import { styled } from 'styled-components'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import ModalMenu from './ModalMenu'

const Section1 = styled.section`
  background-color: #000;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  padding: 1rem 0;
  .input{
    position: relative;
    input{
      width: 300px;
      padding: 0.5rem;
    }
    .search{
      position: absolute;
      color: #000;
      z-index: 5;
      right: 0;
      margin-right: 0.5rem;
      font-size: 20px;
    }
  }
  div{
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;

const Section2 = styled.section`
  background-color: #cecece;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem 0;
  position: relative;
  div{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  div:hover{
    cursor: pointer;
  }
  ul{
    display: flex;
    gap: 1rem;
    li:hover{
      cursor: pointer;
      color: gray;
    }
  }
`

export default function Menu() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header>
      <Section1>
        <span>LOGO</span>
        <div className='input'>
          <input type="text" placeholder='O que voce procura hoje?'/>< AiOutlineSearch className='search'/>
        </div>
        <div>
          <MdOutlineFavoriteBorder size={25}/>
          <span>Lista de Desejos</span>
        </div>
        <BsHandbag size={25}/>
      </Section1>

      <Section2>
        <div onMouseEnter={() => setModalOpen(true)}>
          <AiOutlineMenu />
          <span>Todas as categorias</span>
        </div>
        <ModalMenu modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        <ul>
          <li>Masculino</li>
          <li>Feminino</li>
          <li>Infantil</li>
        </ul>
      </Section2>
    </header>
  )
}
