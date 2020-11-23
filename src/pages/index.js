import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Sidebar from '../components/Sidebar';
import Contacts from '../components/Contacts';
import Projects from '../components/Projects';
import { Btn } from '../components/Projects/ProjectsElements'

const Home = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {

        setIsOpen(!isOpen)
    }

    
    
    return (
        <>
        <Sidebar isOpen= {isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/> 
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <Skills />
        <Projects {...Btn}/>
        <Contacts />
        <Footer />
        
        </>
    )
}

export default Home
