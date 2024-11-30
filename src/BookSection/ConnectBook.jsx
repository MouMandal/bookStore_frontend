import React from 'react'
import Book from './Book'
import { store } from '../redux/store'
import { Provider } from 'react-redux';



function ConnectBook() {
  return (<>
  
    <Provider store={store}>
      <Book />
    </Provider>
  </>
    
  );
}

export default ConnectBook