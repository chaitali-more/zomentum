import './footer.css'
const Footer = () =>{
return(
    <>
    <footer>
        <div className='wrapper'>
        <div className='d-flex  flex-wrap py-80  justify-content-start'>
        <div className='flex-grow-1'>
            <h5>Product</h5>
        <ul>

<li>
 <a href="#">Features</a>
</li>
<li>
<a href="#">Pricing</a>
</li>
<li>
<a href="#">Integrations</a>
</li>
<li>
 <a href="#support">Product</a>
</li>
</ul>
        </div>
        <div className='flex-grow-1'>
            <h5>Company</h5>
        <ul>

<li>
 <a href="#">About us</a>
</li>
<li>
<a href="#">Contact us</a>
</li>
<li>
<a href="#">Submit a ticket</a>
</li>
<li>
 <a href="#">Privacy policy</a>
</li>
<li>
 <a href="#">Terms & conditions</a>
</li>
</ul>
        </div>
        <div className='flex-grow-1'>
            <h5>Users</h5>
        <ul>

<li>
 <a href="#">Login</a>
</li>
<li>
<a href="#">Get a demo</a>
</li>
<li>
<a href="#">Talk to us</a>
</li>
<li>
 <a href="#">Privacy policy</a>
</li>
<li>
 <a href="#">Terms & conditions</a>
</li>
</ul>
        </div>
        <div className='flex-grow-1'>
            <h5>Guides</h5>
        <ul>

<li>
 <a href="#">MSP</a>
</li>
<li>
<a href="#">MSP Sales</a>
</li>

</ul>
        </div>
        <div className='flex-grow-1'>
            <h5>Contact Us</h5>
        <ul>

<li>
 <a href="#">Address</a>
</li>

</ul>
        </div>
        </div>

        <div className='d-flex  flex-wrap   justify-content-between'>
                <p>© 2020 Pactora Inc. All rights reserved.</p>
                <p>Follow us on social 
                <a href='#'className='text-decoration-none' ><i className='fa fa-facebook text-white ps-2'></i> </a>
                <a href='#'><i className='fa fa-instagram text-white ps-2'></i></a>
                <a href='#'><i className='fa fa-telegram text-white ps-2'></i></a>
                 </p>
        </div>
        </div>

</footer>
    </>
)
}

export default Footer;