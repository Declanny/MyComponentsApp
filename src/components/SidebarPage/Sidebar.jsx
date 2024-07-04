import { Form, FormControl, Button, ListGroup } from 'react-bootstrap';
import '../SidebarPage/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h6 className="sidebar-title">Declan Gadget Store</h6>

      {/* Search Bar */}
      <Form className="search-form">
        <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>

      {/* Sidebar Items */}
      <ListGroup variant="flush">
      <ListGroup.Item action href="#">Tablets</ListGroup.Item>
        <ListGroup.Item action href="#">Musical Instruments</ListGroup.Item>
        <ListGroup.Item action href="#">Apple Products</ListGroup.Item>
        <ListGroup.Item action href="#">Samsung Products</ListGroup.Item>
        <ListGroup.Item action href="#">AutoMobiles</ListGroup.Item>
        <ListGroup.Item action href="#">Electronic Gadgets</ListGroup.Item>
        <ListGroup.Item action href="#">Cars & MotorCycles</ListGroup.Item>
        <ListGroup.Item action href="#">Renting & Leasing properties</ListGroup.Item>
        <ListGroup.Item action href="#">Shipping</ListGroup.Item>
        <ListGroup.Item action href="#">Trucks & Tractors</ListGroup.Item>
        <ListGroup.Item action href="#">Cooking Intinsils</ListGroup.Item>
        <ListGroup.Item action href="#">Laundry Services</ListGroup.Item>
        <ListGroup.Item action href="#">Catering Services</ListGroup.Item>
        <ListGroup.Item action href="#">Podcast Equipments</ListGroup.Item>
        {/* Categories Dropdown */}
        <ListGroup.Item action className="dropdown-toggle">
          Categories
          <ul className="submenu list-unstyled">
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Phone & Tablets</a></li>
            <li><a href="#">Musical Instruments</a></li>
          </ul>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Sidebar;
