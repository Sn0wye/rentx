import React, { useState } from 'react';
import {
  NavbarContainer,
  NavbarItem,
  NavbarItems,
  NavbarLogoContainer,
} from './style';
import logoIcon from '../../../public/img/logoIcon.svg';
import Image from 'next/image';
import Link from 'next/link';

import HomeIcon from '../Icons/Home';
import CarsIcon from '../Icons/Cars';
import ProfileIcon from '../Icons/Profile';

type Options = 'Home' | 'Cars' | 'Profile' | null;

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState<Options>(null);

  return (
    <NavbarContainer>
      <NavbarLogoContainer>
        <Link href='/'>
          <Image src={logoIcon} alt='rentX logo' />
        </Link>
      </NavbarLogoContainer>
      <NavbarItems>
        <Link href='/cars'>
          <NavbarItem
            selected={selectedItem === 'Home'}
            onClick={() => setSelectedItem('Home')}
          >
            <HomeIcon />
          </NavbarItem>
        </Link>
        <Link href='/cars'>
          <NavbarItem
            selected={selectedItem === 'Cars'}
            onClick={() => setSelectedItem('Cars')}
          >
            <CarsIcon />
          </NavbarItem>
        </Link>
        <Link href='/profile'>
          <NavbarItem
            selected={selectedItem === 'Profile'}
            onClick={() => setSelectedItem('Profile')}
          >
            <ProfileIcon />
          </NavbarItem>
        </Link>
      </NavbarItems>
    </NavbarContainer>
  );
};

export default Navbar;
