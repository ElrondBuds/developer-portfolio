import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div className="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                <h2 style={{color: theme.primary}}>eBuds Collection</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={false} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                </h3>
                        </div>
                        ))}
                    </Marquee>
                </div>
        </div>
        <div className="skillsHeader">
            </div>
            <p style={{color: theme.tertiary}}>
            
            The eBud project is a digital collection of Non-Fungible Tokens (NFTs) that serves multiple purposes. Firstly, it is used to build and grow a community of like-minded individuals who share a passion for Web3.0 technology. Secondly, the eBuds NFTs add value to the project by providing a secure and decentralized platform for running nodes on the MultiversX blockchain.

Users can mint their own eBuds NFTs on Frameit.gg, and also stake them on Eneftor.com to earn $EBUD tokens. This incentivizes participation and engagement within the eBud ecosystem, while also increasing the overall value of the NFTs.

Finally, the $EBUD token is listed on multiple exchanges including Jexchange.io, Exrond.com, and Onedex.app, providing liquidity for the Web3.0 community. This makes it easier for people to trade and invest in the eBud project, and also contributes to the growth and adoption of Web3.0 technology overall.
            </p>
        </div>
    )
}

export default Skills
