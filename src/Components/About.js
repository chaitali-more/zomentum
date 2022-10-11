import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About= ()=>{
return(
    <div className="py-148 bg_about position-relative">
        <h2>List. Sell. Grow</h2>
        <Container className='pt-40'>
            <Row className='justify-content-center text-center'>
            <Col xs={12} md={4} lg={3}>
        <img src="About\all in one platform.svg" alt="feature"/>
     <h6 className='py-24'>Be a part of the only  All-In-One platform for IT services</h6>
        </Col>
        <Col xs={12} md={4} lg={3}>
        <img src="About\find your next customer.svg" alt="feature"/>
     <h6 className='py-24'>Come closer to finding your next customer</h6>
        </Col>
        <Col xs={12} md={4} lg={3}>
        <img src="About\grow your business.svg" alt="feature"/>
     <h6 className='py-24'>Grow your business with a single click</h6>
        </Col>
        </Row>
        </Container>
        <img src="\About\Frame.png" alt="frame" className='frame_about'/>
        <img src="\About\Frame.png" alt="frame" className='frame2_about'/>

    </div>
)
}


export default About;