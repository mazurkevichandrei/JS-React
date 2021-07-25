import React from 'react';
import StyledNaviItem from './styleditems/styledNaviItem';
import SlyledLink from './styleditems/styledLink';
import StyledNaviFooter from './styleditems/styledNaviFooter';
import StyledNaviSectionFooter from './styleditems/styledNaviSectionFooter';
import StyledNaviContainer from './styleditems/StyledNaviContainer';
import StyledLine from './styleditems/styledFonts/styledLine';
import StyledFooterFont from './styleditems/styledFonts/footerFont';
import StyledFooterLink from './styleditems/styledFonts/footerLink';
import LogoImage from './image/logo.svg';
import checkActive from './checkIsActiveLink';

const Footer = () => {
    const logo = LogoImage
    return(
        <StyledNaviSectionFooter>
            <StyledNaviContainer>
                <StyledNaviFooter>
                    <StyledNaviItem><SlyledLink to='/' isActive={checkActive}>Home</SlyledLink></StyledNaviItem><StyledLine>|</StyledLine>
                    <StyledNaviItem><SlyledLink to='/learn' >Learn</SlyledLink></StyledNaviItem><StyledLine>|</StyledLine>
                    <StyledNaviItem><SlyledLink to='/game' >Game</SlyledLink></StyledNaviItem><StyledLine>|</StyledLine>
                    <StyledNaviItem><SlyledLink to='/result' >Result</SlyledLink></StyledNaviItem>
                </StyledNaviFooter>
                  <StyledFooterLink href='https://teachmeskills.by/' target='blank'>
                    <img src={logo} style={{width: '120px'}} alt='More info about School'></img>
                  </StyledFooterLink>
                <StyledFooterFont>Mazurkevich</StyledFooterFont>
            </StyledNaviContainer> 
        </StyledNaviSectionFooter>
    )
}

export default Footer