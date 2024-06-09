import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/profile-img.png'


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:55vh;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


    z-index:1;

    @media (max-width: 768px) and (min-width: 320px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12rem;

    background: 
        linear-gradient(
        to right,
        ${(props) => props.theme.text} 50%,
        ${(props) => props.theme.text} 50%
        ) bottom,
        linear-gradient(
        to left,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.body} 50%
        ) top,
        linear-gradient(
        to bottom,
        ${(props) => props.theme.text} 50%,
        ${(props) => props.theme.text} 50%
        ) left,
        linear-gradient(
        to top,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.body} 50%
        ) right;
    
    background-repeat: no-repeat;
    background-size: 100% 2px, 100% 2px, 2px 100%, 2px 100%;
    }

`
const SubBox = styled.div`
width: 100%;
position: relative;
display: flex;
justify-content: center;
align-items: center;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;

    @media (max-width: 768px){
        postion: relative;
        bottom: 0;
        width: 70%;
        height: auto;
        z-index: -1;
    };

    @media (max-width: 1024px) and (min-width: 768px){
        position: relative;
        justify-content: center;
        align-items: center;
    };
}

@media (max-width: 1024px) and (min-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;
};

@media (max-width: 768px){
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    };

`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;
text-align: center;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;

}

@media (max-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 4px;
};

@media (max-width: 1024px) and (min-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
};



`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Anuj.</h3>
                    <h6>I design and Code simple yet beautiful websites.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
