import '../styles/qualification.css'
const Qualification = () => {
    return (
        <>
            <div className="qualification-div">
                <div className="education-div">
                    <h2 className='text-center gradient-heading'>Education</h2>
                    <div className="info">
                        <ul className='info-ul'>
                            <li className='info-li'><div className="info-li-div">
                                <div className="h4 info-li-div-name"><h4 className=''>Anna University - Nagercoil</h4></div>
                                <div className='info-li-div-detail'><p className='p gradient-heading'>BE Electrical and Electronics</p></div>
                                <div className="info-li-div-detail"><p className=' p'>CGPA : 7.8</p></div>
                                <div className="info-li-div-detail"><p className='grey-text p'>2020 - 2024  (Batch)</p></div>
                            </div></li>
                            <li className='info-li'><div className="info-li-div">
                                <div className="h4 info-li-div-name"><h4>Amala Matric Hr.sec School, Thuckalay</h4></div>
                                <div className='info-li-div-detail'>
                                    <p className='p gradient-heading'>class 1 to class 12</p>
                                    <p className='grey-text p'>2008 - 2020</p>
                                </div>
                                <div className="info-li-div-detail-marks">
                                    <p className='p'>SSLC : 85%</p>
                                </div>
                            </div></li>

                        </ul>
                    </div>
                </div>
                <div className="experience-div">
                    <h2 className='text-center gradient-heading'>Experience</h2>
                    <div className="info">
                        <ul className='info-ul'>
                            <li className='info-li'><div className="info-li-div">
                                <div className="h4 info-li-div-name"><h4>AK Infopark Private Ltd - Parvathipuram</h4></div>
                                <div className='info-li-div-detail'><p className='p gradient-heading'>Made an E-commerce Project</p><p className='grey-text p'>Onsite</p></div>
                                <button className='info-li-btn'>Check Project</button>
                            </div></li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Qualification