import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import SignIn from '../Auth/Signin'

function header() {

    const [slider, setSlider] = useState(false);

    const handlesigninslide = () => {
        setSlider(true)
        document.getElementsByClassName('signinslide')[0].classList.add('signinslideafter');
        document.getElementsByClassName('signinslideblur')[0].classList.add('signinslideafterblur');
        console.log('hello');

    }

    const handleslideremove = () => {
        setSlider(false)
        document.getElementsByClassName('signinslide')[0].classList.remove('signinslideafter');
        document.getElementsByClassName('signinslideblur')[0].classList.remove('signinslideafterblur');
    }

    return (
        <div className="header">
            <nav id='nav-bar'>

                <div>
                    <div id='logo'>BLOGBOOK</div>
                </div>

                <div>
                    <div id='buttons-div'>
                        <div onClick={handlesigninslide} id='signin'>SIGN IN</div>
                        
                        <Link to={`/writeBlog/`}><button type='submit' id='create-your-blog-button'>CREATE YOUR BLOG</button></Link>
                        
                    </div>
                </div>

            </nav>
            <div >
                <div className='signinslide'>
                    { slider && <SignIn />}
                </div>

                <div onClick={handleslideremove} className='signinslideblur'>
                </div>
            </div>
        </div>
    )
}

export default header;