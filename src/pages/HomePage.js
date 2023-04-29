import React from "react";
import './HomePage.css';

import image1 from '../assets/images/image-1.jpg';
import NavBar from "../components/NavBar";

const HomePage = (props) => {
    return (
        <div id='home-page'>
            <NavBar/>
            <section className='top-container'>
                <header className='showcase'>
                    <h1>Your Web Presence</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <a href='test.com' className='button'>Read More</a>
                </header>
                <div className='top-box top-box-a'>
                    <h4>Membership</h4>
                    <p className='price'>$199/mo</p>
                    <a href='test.com' className='button'>Buy Now</a>
                </div>
                <div className='top-box top-box-b'>
                    <h4>Pro Membership</h4>
                    <p className='price'>$299/mo</p>
                    <a href='test.com' className='button'>Buy Now</a>
                </div>
            </section>
            <section className='boxes'>
                <div className='box'>
                    <i className='bx bxs-pie-chart-alt-2' style={{fontSize: 70}}></i>
                    <h3>Analytics</h3>
                    <p>
                        Ocurreret ancillae utamur ornare postea dissentiunt volutpat adolescens feugiat singulis omittam
                        quisque tellus his.
                    </p>
                </div>

                <div className='box'>
                    <i className='bx bx-globe' style={{fontSize: 70}}></i>
                    <h3>Marketing</h3>
                    <p>
                        Ocurreret ancillae utamur ornare postea dissentiunt volutpat adolescens feugiat singulis omittam
                        quisque tellus his.
                    </p>
                </div>

                <div className='box'>
                    <i className='bx bx-cog' style={{fontSize: 70}}></i>
                    <h3>Development</h3>
                    <p>
                        Ocurreret ancillae utamur ornare postea dissentiunt volutpat adolescens feugiat singulis omittam
                        quisque tellus his.
                    </p>
                </div>

                <div className='box'>
                    <i className='bx bxs-group' style={{fontSize: 70}}></i>
                    <h3>Suppport</h3>
                    <p>
                        Ocurreret ancillae utamur ornare postea dissentiunt volutpat adolescens feugiat singulis omittam
                        quisque tellus his.
                    </p>
                </div>
            </section>

            <section className='info'>
                <img src={image1} alt='image1'/>
                <div>
                    <h2>Your Business On The Web</h2>
                    <p>
                        deterruisset risus
                        Atomorum mauris mediocrem odio menandri aliquam blandit mei tation ad volutpat urna ceteros sed.
                        Porta dapibus inciderint lacus vis aliquid veniam ornatus mi mattis audire quaerendum maiorum
                        detraxit.
                    </p>
                    <a href='test.com' className='button'>Learn More</a>
                </div>
            </section>

            <section className='portfolio'>
                <img src='https://picsum.photos/200' alt='test1'/>
                <img src='https://picsum.photos/201' alt='test1'/>
                <img src='https://picsum.photos/202' alt='test1'/>
                <img src='https://picsum.photos/203' alt='test1'/>
                <img src='https://picsum.photos/204' alt='test1'/>
                <img src='https://picsum.photos/205' alt='test1'/>
                <img src='https://picsum.photos/206' alt='test1'/>
                <img src='https://picsum.photos/207' alt='test1'/>
                <img src='https://picsum.photos/208' alt='test1'/>
            </section>

            <footer>
                <p>Yenidil &copy; 2023</p>
            </footer>
        </div>
    );
}

export default HomePage;