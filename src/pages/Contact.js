import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from "../components/Navigation";
import Logo from '../components/Logo';
import CopyToClipboard from 'react-copy-to-clipboard';
import SocialNetwork from '../components/SocialNetwork';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';
import { motion } from "framer-motion";

const Contact = () => {

   const variants = {
      in: {
         opacity: 1,
         x: 0
      },
      out: {
         opacity: 0,
         x: 300
      }
   };

   const transition = {
      ease: [0.03, 0.87, 0.73, 0.9],
      duration: 0.6
   }

   return (
      <main>
         <Mouse />
         <motion.div 
            className="contact"
            exit= "out"
            animate="in"
            initial="out"
            variants={variants}
            transition={transition}
         >
            <Navigation />
            <Logo />
            <ContactForm />

            <div className="contact-infos">
               <div className="adress">
                  <div className="content">
                     <h4>Adresse</h4>
                     <p>91F avenue de Strasbourg</p>
                     <p>54000 Nancy</p>
                  </div>
               </div>
               <div className="phone">
                  <div className="content">
                     <h4>Téléphone</h4>
                     <CopyToClipboard text="0602215868" className="hover">
                        <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => alert('Téléphone copié')}>06 02 21 58 68</p>
                     </CopyToClipboard>
                  </div>
               </div>
               <div className="email">
                  <div className="content">
                     <h4>email</h4>
                     <CopyToClipboard text="fsagency@gmail.com" className="hover">
                     <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => alert('email copié')}>fsagency@gmail.com</p>
                     </CopyToClipboard>
                  </div>
               </div>
               <SocialNetwork />
               <div className="credits">
                  <p>nemoo - 2021</p>
               </div>
            </div>
            <ButtonsBottom left={'/project-4'}/>
         </motion.div>
      </main>
   );
};

export default Contact;