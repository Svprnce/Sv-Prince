import '../styles/footer.css'
import Contact from './contact'
const Footer = ()=>{
    return (
        <>
        <div className="footer-div">
            <div className="footer-content">
                <div className="footer-links">
                    <h4>Links</h4>
                    <ul className='footer-ul'>
                        <li className='footer-li'>Home</li>
                        <li className='footer-li'>About</li>
                        <li className='footer-li'>Projects</li>
                    </ul>
                </div>
            </div>
        <div className="credits">
            <p className='text-center'>Made by Prince</p>
        </div>
        </div>
        </>
    )
}

export default Footer