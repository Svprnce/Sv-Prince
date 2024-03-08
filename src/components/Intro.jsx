import { useEffect, useState } from 'react'
import '../styles/intro.css'
import Typewriter from 'typewriter-effect';
import Spinner from './spinner';

const Intro = () => {
    const [image, setimage] = useState()
    // let arr = ['hi', 'hello prince', 'namaste']
    // // // while(arr){

    // // }
    // let word = ['Full stack', 'jidjd']
    // const [text, setText] = useState('')
    // const [index, setIndex] = useState(0)
    // const [reverse, setreverse] = useState(true)
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //             //console.log(word);
    //             for(let i=0; i<word.length; i++){

    //                 if (reverse) {
    //                     if (index < word[i].length) {
    //                         setText(prevtext => prevtext + word[index])
    //                         setIndex(previndex => previndex + 1)
    //                     }
    //                     else {
    //                         setreverse(false)
    //                     }

    //                 }
    //                 else {
    //                     if (text.length > 0) {

    //                         setText(prevtext => prevtext.slice(0, -1))
    //                         setIndex(previndex => previndex - 1)
    //                         //console.log(text);
    //                     }
    //                     else {

    //                         //console.log(word);
    //                         setreverse(true)
    //                     }

    //                 }
    //             }

    //     }
    //         , 100);
    //     return () => clearInterval(interval)
    // }, [index, reverse])

    const loadimg = (url)=>{
        return new Promise((resolve)=>{
            const myImage = new Image();
            myImage.addEventListener('load',()=>{
                resolve(myImage)
            })
            myImage.src = url
        })
    }
    useEffect(()=>{
        loadimg('https://i.ibb.co/PG1WKGv/svprince.png').then(resimg => setimage(resimg))
    },[])
    return (
        <>

            <div className="hero">
                <div className="intro-text-div">
                    <div className="text">
                        <h1> I am </h1>
                        <Typewriter
                            options={{
                                strings: ['Prince ','Web Developer','React Developer'],
                                autoStart: true,
                                loop: true,
                                cursor: '|',
                                wrapperClassName : 'h-intro-text',
                                cursorClassName : 'h-intro-text'
                            }}
                        />
                        
                    </div>
                    <div className="button-group">
                        <button>LinkedIN</button>
                        <button>Resume</button>
                    </div>
                    {/* <p className='intro-quote'><q>Clean code always looks like it was written by someone who cares. </q> By Robert C. Martin</p> */}
                    {/* <h1 >I am a <span className='h-intro-text'></span></h1> */}
                </div>
               {image ? <div className='hero-img-div'><img className='hero-img' src={image.src} alt="" srcSet="" /></div> : <Spinner/>}
                {/* <div className='hero-img-div'><img className='hero-img' src='https://i.ibb.co/PG1WKGv/svprince.png' alt="" srcSet="" /></div> */}
            </div>
        </>
    )
}

export default Intro