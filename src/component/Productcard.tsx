import { ProductDetailsPageType } from 'Pages/Dashboard/types/dashboard.type';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { REACT_APP_IMAGE_PATH } from "config";

const Productcard: React.FC<{ data: ProductDetailsPageType[];handleCart:(product: ProductDetailsPageType) => void; }> = ({data,handleCart}) => {
 
  return (
    <Row lg={4}>
    
    {data &&
      data.map((product,index) => {
        const { title,description, images,price,Quantity,category } =
          product;
        return (
          <Col className="d-flex my-3">
            <Card className="flex-fill" key={index}>
              <Card.Img variant="top" src={`${REACT_APP_IMAGE_PATH}${images}`} style={{height:"250px",width:"300px"}}/>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description.slice(0,100)}{"..."}</Card.Text>
                <Card.Text>Category:{" "}{category?.name}</Card.Text>
                <Card.Text>Price:{" "}{price}</Card.Text>
                <Card.Text>Quantity:{" "}{Quantity}</Card.Text>
                <Button variant="primary" onClick={()=>handleCart(product)}>Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
  </Row>
  );
}

export default Productcard;