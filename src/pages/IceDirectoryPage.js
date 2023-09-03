import { Container} from 'reactstrap';
import IceCreamList from '../features/icecreams/IceCreamList';
import SubHeader from '../components/SubHeader';
const IceDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' />
         <IceCreamList />
        </Container>
    );
};

export default IceDirectoryPage;