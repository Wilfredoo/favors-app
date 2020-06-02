import React,{useEffect} from 'react';
import axios from 'axios';


const App = () => {


    useEffect(() => {
        axios.get('/api/hello')
            .then(res => {
               console.log("res", res)
            })
            .catch(err => {
                console.log("err", err)
            })
    }, []);
    
    

        return (
            <div>
                Loading...
            </div>
        );
    
};

export default App