import { useSelector } from 'react-redux'
import {Container, Row} from 'reactstrap';
import { useParams } from 'react-router-dom';
import IceCreamDetail from '../features/icecreams/IceCreamDetail';
// import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import { selectIcecreamById } from '../features/icecreams/iceCreamSlice';
const IceCreamDetailPage = () => {
  const { icecreamId } = useParams();
  const icecream= useSelector(selectIcecreamById(icecreamId));
  console.log('icecream:', icecream);

  return(
      <Container>
        <SubHeader current ={icecream.name} detail={true}/>
        <Row>
            <IceCreamDetail icecream={icecream} />
            {/* <CommentsList icecreamId={icecreamId} /> */}
        </Row>
        </Container>

  );
  };

export default IceCreamDetailPage;