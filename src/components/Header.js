import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { selectNavItems } from '../features/navItem/navItemSlice';
import { useSelector } from 'react-redux';

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  const navItems = useSelector(selectNavItems);

  const handleBurgerStatusChange = () => {
    setBurgerStatus(!burgerStatus);
  }

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="Logo image" />
      </a>
      <Menu>
        {cars && cars.map(car => (
          <a key={car} href="#">{ car }</a>
        ))}
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={handleBurgerStatusChange} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={handleBurgerStatusChange} />
        </CloseWrapper>
        {cars && cars.map(car => (
          <li key={car}><a href="#">{ car }</a></li>
        ))}
        {navItems && navItems.map(item => (
          <li key={item}><a href="#">{ item }</a></li>
        ))}
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  
  @media(max-width: 768px) {
    display: none;
  }
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;

    @media(max-width: 768px) {
      display: none;
    }
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  overflow-y: auto;
  
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    
    a {
      font-weight: 600;
    }
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`