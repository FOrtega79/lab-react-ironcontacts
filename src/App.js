import './App.css';
import contacts from './contacts.json'
import React, { useState } from 'react';


function App() {

  const [contactList, setContactList ] = useState(contacts.slice(0,5))

  const[remainingContacts, setRemainingContacts] = useState(contacts.slice(5, contacts.length))

  function addRandomContact (){
    const newContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)]
  
  const newRemainingContacts = remainingContacts.filter((contact) => contact.id !== newContact.id)

  
  setContactList([...contactList, newContact])
  setRemainingContacts(newRemainingContacts)
  }

  return (
    
    <div className="App">
    <div className="centerAll">
<div className="pageTitle">
  <h1>IronContacts 🦸‍♂️</h1>
</div>
<div className = "randomBtn">
  <button className="addChar" onClick={addRandomContact}>Get Random Char</button>
</div>

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
      <td><p className="name">{contact.name}</p></td>
      <td><p className="popularity">{(contact.popularity).toFixed(2)}</p></td>
      <td>{(contact.wonOscar===true ? "🏆" : "")}</td>
      <td><p className="Emmy">{(contact.wonEmmy===true ? "🔱" : "")}</p></td>
      <td><button className="deleteBtn">🗑</button></td>

    </tr>
    ))}

     </table>
     </div>
    </div>
  );
}

export default App;
