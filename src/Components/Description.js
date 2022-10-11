import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './description.css'
const Description = ({heading, description,imgSource,id})=>{

return(
<div className='wrapper'>
<Container className='py-80'>
              <Row className='justify-content-center align-items-center'>
                    {id%2===0 ? (
                        <Col  md={{span: 6, order: "last" }} lg={6} xs={{span: 12, order: "first" }} >
                            <Details heading={heading} description={description}/>
                        </Col>) 
                    : (
                        <Col xs={12} md={6} lg={6} >
                           <Details heading={heading} description={description}/>
                        </Col>      )}
           
                        <Col xs={12} md={6} lg={6}>
                            <img src={imgSource} alt="description" className='img-fluid'/>
                        </Col>
                </Row>
</Container>
</div>
)
}

const Details = ({heading, description}) =>{
   return(<div className='mw-400'>
    <h3 className='py-12 mw-379'>{heading}</h3>
    <h6 className='py-12'>{description}</h6>
    <a href="#" className="signupbtn py-12">Signup now <i className="fa fa-arrow-right"></i></a>
    </div>)
}

export default Description;