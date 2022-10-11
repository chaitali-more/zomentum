import './banner.css';
const HeroSection = ()=>{
return(
    <div className="banner" style={{  
        backgroundImage: "url(" + "Banner/Rectangle.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
                   <div className='wrapper'>
                   <img src='Banner\Frame.png' className='leftImg' alt='frame'/>

        <div className='content'>
        <div>
        <h1>Find the right partners to fuel your business growth</h1>
    <h6 className='text-white'>
    Join a vibrant community of MSPs to forge long-lasting relationships with partners that help you create excellent customer experiences
    </h6>
    <div className="btn_black">
    <a href="#" >Register today</a>
    </div>
    </div>


        </div>
        <img src='Banner\Partner hero image right.png' alt='frame' className='rightImg'/>
    </div>
    </div>
)
}
export default HeroSection;