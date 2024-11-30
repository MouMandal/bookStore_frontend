import React from 'react'
import Banner from './Banner'
import Recommand from './Recommand'
import { store } from '../../redux/store'
import { Provider } from 'react-redux';
import SingleBook from '../../BookSection/SingleBook';


function Home() {
    return (
        <>
            <Banner />


            <Provider store={store}>
                <Recommand />
              
            </Provider>


        </>
    )
}

export default Home