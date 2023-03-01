import React from 'react';
import {useParams} from 'react-router-dom'
import Header from '../../components/header';
import Footer from '../../components/footer';


export default function Error() {
 
      const { errorCode } = useParams();
  return (
    <div>
      <Header />
      <div className="errorContainer">
        <p>Something went wrong!</p>
        {errorCode && <p>{`Error code: ${errorCode}`}</p>}
      </div>
      <Footer />
    </div>
  );
    
}
