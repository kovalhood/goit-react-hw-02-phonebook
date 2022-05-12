import s from './ContactList.module.css';

const ContactList = ({ data, filterName, onDeleteContact }) => {
    return <ul>
      {data.filter(({name}) => name.toLowerCase().includes(filterName)).map(({id, name, number}) => (
        <li key={id}>
          <p>{name}: {number}</p>
          <button type='button' onClick={()=>onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
}

export default ContactList;