import React from 'react'
import '../Components/register.css'
import { motion } from "motion/react"

const RegisterCard = ({prize, link, perks, status}) => {
    return (
        <div>
            <motion.div
            initial={{
                opacity:0
            }}
            animate={{
                opacity:1
            }}
            transition={{
                duration:1,
                ease:'anticipate'
            }}
            exit={{
                opacity:0
            }}
            className="plan-card">
                <div className="what">
                    <h2>PERKS INCLUDED</h2>
                    <div className="package">{perks}</div>
                    <div className="prize">
                        <h1>Rs {prize}/-</h1>
                        <div className="pay">
                            <button><a target='_' href={link}><h1>{status}</h1></a></button>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default RegisterCard
