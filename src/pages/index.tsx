import type { NextPage } from 'next';
import {
  HomeAside,
  HomeContainer,
  HomeLogo,
  HomeText,
  HomeTitle,
  HomeWrapper,
} from './style';
import logo from '../../public/img/logo.svg';
import homepageIllustration from '../../public/img/homepageIllustration.svg';
import Image from 'next/image';
import { Button } from '../styles/button';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <HomeContainer>
        <HomeLogo>
          <Image src={logo} alt='rentX logomark' />
        </HomeLogo>
        <HomeTitle>Rent a car in a simple and easy way</HomeTitle>
        <HomeText>
          A lot of models for you to drive safe and comfortably.
        </HomeText>
        <Link href='/cars'>
          <Button color='primary'>Get Started</Button>
        </Link>
      </HomeContainer>
      <HomeAside>
        <Image
          src={homepageIllustration}
          alt='Audi and some purple vectors behind it'
        />
      </HomeAside>
    </HomeWrapper>
  );
};

export default Home;
