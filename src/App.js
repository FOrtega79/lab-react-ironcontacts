import './App.css';
import contacts from './contacts.json'
import React, { useState } from 'react';


function App() {

  const [contactList, setContactList ] = useState(contacts.slice(0,5))
  
  return (
    <div className="App">
    <div className="centerAll">
     <table>
       <tr>
         <th>Picture</th>
         <th>Name</th>
         <th>Popularity</th>
         <th>Won Oscar</th>
         <th>Won Emmy</th>
       </tr>

    {contactList.map((contact, i)=>(
    <tr key={i}>
      <td><img className="facePic" src={contact.pictureUrl} alt="img" /></td>
      <td><p>{contact.name}</p></td>
      <td><p>{(contact.popularity).toFixed(2)}</p></td>
      <td>{(contact.wonOscar===true ? "🏆" : "")}</td>
      <td>{(contact.wonEmmy===true ? "🏀" : "")}</td>
    </tr>
    ))}

     </table>
     </div>
    </div>
  );
}

export default App;
