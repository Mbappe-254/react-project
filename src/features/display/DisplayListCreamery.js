import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';
import AnimatedCreamery from './AnimatedCreamery';

const DisplayListCreamery = () => {
    const items = useSelector((state) => [
        selectFeaturedCampsite(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
    ]);
        
    console.log('display items',items);
    
    return (
        <Row>
            {items.map((item, idx) => {

                return (
                    item && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedCreamery item={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayListCreamery;