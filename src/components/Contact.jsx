import { CONTACT } from "../constants"
import { motion}  from "framer-motion"
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      
      <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Get in Touch</motion.h2>

   
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">{CONTACT.email}</a>

      </div>
    </div>
  )
}

export default Contact
