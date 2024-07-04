import PropTypes from "prop-types"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Import your CSS file

const BootstrapCard = (props) => {
  return (
    <div className="card-container">
      <Card className="card">
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Card.Text>{props.price}</Card.Text>
          <Button variant="warning">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

BootstrapCard.propTypes = {
  img: PropTypes.string,
  price: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string
}

export default BootstrapCard;
