import styled from 'styled-components'

export const HeroSection = styled.section`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }
`
export const Container = styled.div`
  position: relative;
  left: 35px;
  color: var(--cor-secundaria);

  @media (max-width: 768px) {
    left: auto;
  }
`
export const Titulo = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }
`
