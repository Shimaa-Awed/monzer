import './header.css';
import logo from '../../../public/rb_44.png';
import { useState } from 'react';
import { IoClose, IoMenu } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';

const Header = () => {
    const [showModel, setShowModel] = useState(false);

    return (
        <>
            <nav>
                <div className='content flex'>
                    <div className='links flex'>
                        <FaFacebook className='icon' />
                        <FaTwitter className='icon' />
                        <FaLinkedin className='icon' />
                        <IoLogoGithub className='icon' />
                    </div>
                    
                    <div className='numbers flex'>
                        <div>Info@ft4visa.com</div>
                        <div>+966920033875</div>
                    </div>
                </div>

                <div className='navation flex'>
                    <ul className='flex'>
                        <li><a href=''>English</a></li>
                        <li><a href=''>تواصل معنا</a></li>
                        <li><a href=''>الدراسة في الخارج</a></li>
                        <li><a href=''>التأشيرات</a></li>
                        <li><a href=''>من نحن</a></li>
                        <li><a href=''>الخدمات</a></li>
                        <li><a className='active' href=''>الرئيسية</a></li>
                    </ul>
                    <button className='menu' onClick={() => setShowModel(!showModel)}>
                        {showModel ? <IoClose /> : <IoMenu />}
                    </button>
                    <div className='logo'>
                        <img src={logo} alt='Logo' />
                    </div>
                </div>
            </nav>

            {showModel && (
                <div className='overlay'>
                    <div className='fixed'>
                        <ul className='model'>
                            
                            <li><a className='active' href=''>الرئيسية</a></li>
                            <li><a href=''>تواصل معنا</a></li>
                            <li><a href=''>الدراسة في الخارج</a></li>
                            <li><a href=''>التأشيرات</a></li>
                            <li><a href=''>من نحن</a></li>
                            <li><a href=''>الخدمات</a></li>
                            <li><a href=''>English</a></li>
                        </ul>
                    </div>
                </div>
            )}

            <main>
                <div className='perent'>
                    <div className='overflow'>
                        <button className='btn-1'> للسفر والسياحة</button>
                        <h2>شركة المسارات السريعة</h2>
                        <p>
                            شركة المسارات السريعة للسفر والسياحة تعمل بجد لتصبح الدليل الأول للسياح والمسافرين إلى جميع الوجهات السياحية المفضلة في العالم، عن طريق تقديم أفضل برامج سياحية متكاملة
                            <br />
                            وخدمات عالية الجـودة بأسعار منافسة.
                        </p>
                        <button className='btn-2'> تعرف علينا</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Header;