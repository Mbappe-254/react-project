import { Container } from 'reactstrap';
import DisplayListCreamery from '../features/display/DisplayListCreamery';
import SubHeader from '../components/SubHeader';

const HomePage =() => {
    return (
        <Container>
            <SubHeader current ='Home'/>
            <DisplayListCreamery/>
        </Container>
    )
};
export default HomePage;
