import React from 'react';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';
import Recurso7 from '../../assets/Recurso 3.png';



const Header = () => {
  return (
    <>
      <Container>
        <div>
          <a href="/">
            <Imagen src={Recurso7} width="20%" alt="Tutu-online" />
          </a>
          <Form>
            <ContainerBuscar>
              <Input type="search" placeholder="Search" aria-label="Search" />
              <LinkBuscar href="/" alt="">
                <Icon>
                  <BsSearch />
                </Icon>
              </LinkBuscar>
            </ContainerBuscar>
          </Form>
          
        </div>
      </Container>
    </>
  );
};

export default Header;
const Container = styled.header`
  background: linear-gradient(
    to right,
    #1bbf89,
    #a9bfcf,
    #4cd5de,
    #7cc2f7,
    #1bbf89
  );
  min-height: 100px;
`;
const Imagen = styled.img`
  position: absolute;
  left: 30px;
  top: 15px;
`;
const Form = styled.form`
  width: 25rem;
  position: absolute;
  left: 35%;
  top: 25px;
`;
const ContainerBuscar = styled.div`
  display: inline-block;
  position: absolute;
  right: 7px;
`;
const Input = styled.input`
  border: 1px solid #003459;

  border-radius: 22px;
  padding: 9px 75px;
`;


const Icon = styled.i`
  width: 50px;
  height: 50px;
`;
const LinkBuscar = styled.a`
  position: absolute;
  right: 1px;
  top: 2px;
  background-color: #003459;
  border-radius: 25px;
  color: white;
  text-transform: uppercase;
  padding: 9px 12px;
`;
