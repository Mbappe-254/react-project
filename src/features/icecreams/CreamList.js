import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import CreamCard from './CreamCard';
import { selectAllIcecreams } from './CreamsSlice';

const CreamList = () => {
  const icecreams = useSelector(selectAllIcecreams);
  console.log("icecreams:", icecreams);

  return (
    <Row className="ms-auto">
      {icecreams.map((icecream) => {
        return (
          <Col md="5" className="m-4" key={icecream.id}>
            <CreamCard icecream={icecream} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CreamList;
