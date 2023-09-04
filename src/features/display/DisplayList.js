import { useSelector } from 'react-redux';
import { Col,Row } from 'reactstrap';
import AnimatedDisplay from './AnimatedDisplay';
import { selectFeaturedCream } from '../icecreams/iceCreamSlice';
import { selectFeaturedAd } from '../ads/adsSlice';
import {selectFeaturedPartner} from '../partners/PartnersSlice';

const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedCream(state),
        selectFeaturedAd(state),
        selectFeaturedPartner(state)
    ]);
        
    console.log('display items',items);
    
    return (
        <Row>
            {items.map((item, idx) => {

                return (
                    item && (
                        <Col md className='m-2' key={idx}>
                            <AnimatedDisplay item={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;