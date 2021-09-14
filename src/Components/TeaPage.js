import React, {useState, useEffect} from 'react'
 import teas from "../../../project2/db.json"



 function TeaList () {
     const [teas, SetTeas] = useState([])

     useEffect(() => {
         fetch('./db.json')
           .then((r) => r.json())
           .then(SetTeas);
       }, []);

     return (
         <Container>
             <h1>House Tea Made Locally</h1>
             <br />
             <Search />
             <br />
             <TeaList teas={teas}/>
         </Container>
     )
 }

 export default TeaList;