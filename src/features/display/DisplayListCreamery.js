import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { selectFeaturedCreams } from "../icecreams/CreamsSlice";
import { selectFeaturedAd } from "../ads/adsSlice";
import { selectFeaturedPartner } from "../partners/PartnersSlice";
import AnimatedCreamery from "./AnimatedCreamery";

const DisplayListCreamery = () => {
  const items = useSelector((state) => [
    selectFeaturedCreams(state),
    selectFeaturedAd(state),
    selectFeaturedPartner(state)
  ]);

  console.log("display items", items);

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          item && (
            <Col md className="m-1" key={idx}>
              <AnimatedCreamery item={item} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayListCreamery;
