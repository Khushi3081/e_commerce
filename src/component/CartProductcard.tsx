import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { REACT_APP_IMAGE_PATH } from "config";
import { cartData } from 'Pages/Cart/types/cart.types';

const CartProductcard: React.FC<{ data: cartData[];addQuantity:(uuid:number,quantity:number,price:string) => void; removeQuantity:(uuid:number,quantity:number,price:string) => void;payment:(cartProduct:cartData) => void;donePayment:boolean }> = ({data,addQuantity,removeQuantity,payment,donePayment}) => {
 
  return (
    <Row lg={4}>
    
    {data &&
      data.map((cartProduct,index) => {
        return (
          <Col className="d-flex m-3">
            <Card className="flex-fill" key={index}>
              <Card.Img variant="top" src={`${REACT_APP_IMAGE_PATH}${cartProduct.product.images}`} style={{height:"250px",width:"300px"}}/>
              <Card.Body>
                <Card.Title>{cartProduct.product.title}</Card.Title>
                <Card.Text>{cartProduct.product.description.slice(0,100)}{"..."}</Card.Text>
                <Card.Text>Price:{" "}{cartProduct.price}</Card.Text>
                <Card.Text>Quantity:{" "}{cartProduct.quantity}</Card.Text>
                <Card.Text>TotalPrice:{" "}{cartProduct.total_price}</Card.Text>
                <Button variant="primary" onClick={()=>addQuantity(cartProduct.uuid,cartProduct.quantity,cartProduct.price)}>Add +</Button>
                <Button variant="primary" style={{marginLeft:"5px"}} onClick={()=>removeQuantity(cartProduct.uuid,cartProduct.quantity,cartProduct.price)}>Remove -</Button>
                <Card.Text style={{marginTop:"10px"}}>
                <Button variant="success" onClick={()=>payment(cartProduct)} disabled={donePayment}>Payment</Button>
                </Card.Text>
              
              </Card.Body>
            </Card>
          </Col>
        );
      })}
  </Row>
  );
}

export default CartProductcard;