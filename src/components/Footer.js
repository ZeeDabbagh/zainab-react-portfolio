import React from 'react';
import Flowers from '../assets/images/flowers-2.jpeg'
import '../styles/Footer.css'
import { getByDisplayValue } from '@testing-library/react';

const styles = {
    footerStyles: {
            textAlign: 'center',
            fontSize: 'larger',
            backgroundImage: `url(${Flowers})`,
            backgroundRepeat: 'no-repeat',
            marginTop: '25px',
            backgroundSize: 'cover',
            height: '15vh',
            alignItems: 'center',
            marginLeft: '9px',
            marginRight: '9px'
         
        }
    }

function Footer() {
    return (
        <footer style={styles.footerStyles}>
            <ul>
                <li style={{display: 'inline-block', marginTop: '20px'}}>
                    <a className='footer' href='https://github.com/ZeeDabbagh/'>
                        {/* github icon */}
                        Github
                    </a>
                </li>
                <li style={{display: 'inline-block'}}>
                    <a className='footer' href='https://www.linkedin.com/in/zaldabbagh/'>
                        {/* linkedin icon */}
                        LinkedIn
                    </a>
                </li>
                <li style={{display: 'inline-block'}}>
                    <a className='footer' href=' https://open.spotify.com/user/12138290326'>
                        {/* spotify icon */}
                        spotify
                    </a>
                </li>

               
            </ul>            
        </footer>
    )
}

export default Footer