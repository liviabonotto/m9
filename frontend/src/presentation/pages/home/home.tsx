import React from 'react'
import { useState, useEffect } from 'react'

import Styles from './home.module.scss'

const Home: React.FC = () => {
    const [state, setState] = useState("usando state")

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <div className={Styles.home}></div>
    )
}

export default Home