import React, {useContext} from 'react';
import { Context } from '../context';
import style from '../style';
import StyledTitle from '../styleditems/styledFonts/styledTitle';
import StyledSection from '../styleditems/styledSection';
import StyledCounterSection from '../styleditems/styledCounterSection';
import StyledCounterSectionItem from '../styleditems/styledCounterSectionItem';
import StyledMainArea from '../styleditems/styledMainArea';
import StyledPage from '../styleditems/styledPage';

const Home = () => {
    const {positionFixed} = useContext(Context)
    return(
        <StyledPage>
            <StyledSection isPositionFixed={positionFixed}>
                <StyledCounterSection>
                    <StyledCounterSectionItem>
                        
                    </StyledCounterSectionItem>
                    <StyledCounterSectionItem>
                        <h5>HOME</h5>
                    </StyledCounterSectionItem>
                </StyledCounterSection>
            </StyledSection>
            <StyledMainArea>
            <StyledTitle>Home Page</StyledTitle>
            </StyledMainArea>
        </StyledPage>
    )
}

export default Home