import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

function NotFound() {
    const navigate = useNavigate();
    const [curtainStart, setCurtainStart] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {

        const curtainStartTimer = setTimeout(() => {
            setCurtainStart(true);
        }, 10000);

        const navigateTimer = setTimeout(() => {
            navigate('/');
        }, 19300);

        const msgNumber = Math.floor(Math.random() * 3) + 1;
        switch (msgNumber) {
            case 1:
                setMessage((
                    <>
                    <p className='fs-4 my-4'>Well, looks like you have landed yourself on Santa's naughty list!🎅🏻</p>
                    <p className='fs-4 my-4'>Only the naughty users try to navigate to a page that doesn't exist! Santa is disappointed...</p>
                    <p className='fw-bold fs-3 my-4'>NO PRESENTS FOR YOU!!❌🎁</p>
                    </>
                ));
                break;
            case 2:
                setMessage((
                    <>
                    <p className='fs-4 my-4'>*Gasp* 🐑🐑You ba-a-a-a-a-a-a-ad user!🐑🐑</p>
                    <p className='fs-4 my-4'>You've wandered out of your sheep fold</p>
                    <p className='fs-4 my-4'>Go on...go back from whence you came...lest I unleash the sheep dogs on you!🐺</p>
                    </>
                ));
                break;
            case 3:
                setMessage((
                    <>
                    <p className='fs-3 fw-bold my-4'>🧙🏻‍♂️HOW DARE YOU ENTER MY REALM!!!🏰</p>
                    <p className='fs-3 fw-bold my-4'>GO BACK!!</p>
                    <p className='fs-3 fw-bold my-4'>🔥OR FACE THE MERCILESS CONSEQUENCES!!🔥</p>
                    </>
                ));
                break;
            default:
                setMessage((
                    <>
                    <p className='fs-4 my-4'>Well, looks like you have landed yourself on Santa's naughty list!🎅🏻</p>
                    <p className='fs-4 my-4'>Only the naughty users try to navigate to a page that doesn't exist! Santa is disappointed...</p>
                    <p className='fw-bold fs-3 my-4'>NO PRESENTS FOR YOU!!❌🎁</p>
                    </>
                ));
                break;
        }

        return () => {
            clearTimeout(curtainStartTimer);
            clearTimeout(navigateTimer);
        };
    }, [navigate]);

    return (
        <div>
            {!curtainStart ? (<img src='media/curtain.jpg' alt='Curtain' className='w-100 h-100 z-3' style={{objectFit: 'cover', position: 'absolute', top: (-window.innerHeight - 300)}} />): 
            (<motion.div 
                initial={{y: (-window.innerHeight), opacity: 1}}
                animate={{y: 0, opacity: 1}}
                exit={{y: -window.innerHeight, opacity: 1}}
                transition={{duration: 9, ease: 'linear'}}
                className='w-100 h-100'
                style={{position: 'absolute', zIndex: 3, objectFit: 'cover', top: 0}}
            >
                <img src='media/curtain.jpg' alt='Curtain' className='w-100 h-100 z-3' style={{objectFit: 'cover', height: '100vh', width: '100vw'}} />
            </motion.div>) }

            <Container className='mt-5' style={{color: '#f8f9fa', position: 'absolute', left: '20%', top: '45%', transform: 'translateY(-50%)'}}>
                <h1 className='mt-5 fw-bold display-1'>404 - Not Found</h1>
                <div>
                    {message}
                    <p className='mt-5 fs-4 text-danger'>You will be be booted when the curtain falls...or save yourself and mash the button:</p>
                    <Button as={Link} to='/' className='btn-lg btn-danger text-center my-4'>Go back...</Button>
                </div>
            </Container>

        </div>
    );
}

export default NotFound;