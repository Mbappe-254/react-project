import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import IceCreamCard from "./IceCreamCard";
import { selectAllIcecreams } from './iceCreamSlice';

const List = () => {
  const icecreams = useSelector(selectAllIcecreams);
  console.log('icecreams:', icecreams);

  return (

    <Row className='ms-auto'>
      {icecreams.map((icecream) => {

        return (
          <Col
            md='5'
            className='m-4'
            key={icecream.id}
          >
            <IceCreamCard icecream={icecream} />
          </Col>
        );

      })}

    </Row>

  );
}

export default IceCreamList;