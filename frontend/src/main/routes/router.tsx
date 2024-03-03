import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../presentation/pages/home/home'
import DistributionList from '../../presentation/pages/distribution-list/distribution-list'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/distributionList' element={<DistributionList />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router