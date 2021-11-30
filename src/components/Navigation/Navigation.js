import React ,{useEffect} from 'react';
import './Navigation.css';

const Navigation = (props) => {
    const { showContact, setShowContact } = props;

    useEffect(() => {
        const cont =  document.querySelector('.container')
        showContact  ? cont.setAttribute('style','display : none;') : cont.setAttribute('style','display : block')
    },[showContact])

    return (
        <div className="navigation">
            <div className="buttonContainer">
                <div className="btn"><a href="">Home</a></div>
                <div className="btn"><a href="#about-me-info">About Me</a></div>
                <div className="btn"><a href="#border">Projects</a></div>
                <div className="btn"><a href="#c-form" onClick={() => setShowContact(!showContact)}>Contact</a></div>
            </div>
        </div>
    )
}

export default Navigation;