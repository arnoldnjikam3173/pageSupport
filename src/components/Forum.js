import React from 'react'
import logo from '../img/logo.png'


const Forum = () => {
    // var modal = document.getElementById("signUp");
    // var btn = document.getElementById("btnSignup");
    
    // btn.onclick = function () {
    //   modal.style.display = "block";
    // }
    
    // window.onclick = function (event) {
    //   if (event.target === modal) {
    //     modal.style.display = "none";
    //   }
    // }
    
    return (
        
        <React.Fragment>
            {/* forum space */}
            <div className='layout-forum'>

                <div className='header'>
                    <div className='header-title'>
                        <img  src= {logo} alt='logo' width="30%" />
                    </div>  

                    <div className='header-button'>
                        <div id='btnModal' className='space-btn'><button  className='sign-in' variant='contained'>sign in</button></div>
                            <div className='space-btn2'>
                        
                            <button id="btnSignup" className='sign-up' variant='contained'>sign up</button>
                        
                        </div>
                    </div>
                </div>

                <div className='nav-link'>
                        <a href='https://legrowtech.com' className='active a-forum'>
                            legrowtech.com
                        </a>
                        <a href='' className='active a-forum' >
                            lastest
                        </a>
                        <a href='' className='active a-forum'>
                            avis
                        </a>
                        <a href='' className='active a-forum'>
                            comment
                        </a>

                        
                </div>

                <div className='content-forum'>

                    <div className='content-title'>
                        forums
                    </div>

                    <div className='content-body'>
                        content-body
                    </div>
                </div>

                <div id="signUp" className='modalSignup-container'>
                  <div className='modalSignup-content'>
                        <h1>sign up</h1>
                        <div className='inscription'>
                            <div className='fill-name'>
                                <label>nom</label>
                                <input placeholder='name' />
                            </div>
                            <div className='fill-email'>
                                <label>email</label>
                                <input placeholder='email' />
                            </div>
                            <div className='fill-password'>
                                <label>password</label>
                                <input placeholder='password' />
                            </div>
                            <div className='fill-confirm'>
                                <label>confirm</label>
                                <input placeholder='confirm' />
                            </div>
                            <div className='fill-validate'>
                                <button>create account</button>
                                <button>reset</button>
                            </div>
                        </div>
                  </div>
                </div>

            
            </div>
        </React.Fragment>
    )
}

export default Forum