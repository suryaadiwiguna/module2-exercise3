import websiteLogo from '../assets/logo.svg'
import '../App.css'

function NavBar() {
    return (
        <div id='sticky'>
            <div >
                <div className='navbar'>
                    <div className='navbar-left'>
                        <a href='/'>
                            <img src={websiteLogo} className='website-logo' />
                        </a>

                    </div>

                    <div className='hamburger'>
                        <div className='burger burger1' />
                        <div className='burger burger2' />
                        <div className='burger burger3' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar