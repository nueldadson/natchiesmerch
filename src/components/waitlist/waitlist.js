import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './waitlist.css';

const Waitlist = ({ toggleActive }) => {

    const [name, setName] = useState('');
  const [emaill, setEmaill] = useState('');
  const [active, setActive] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${emaill}`);
    setActive(toggleActive)
    active()
  };

    return (
<div className="blurry flex justify-center items-center min-h-[500px] ">
<div className=' flex flex-col contentt justify-center items-center'>
        <div className='flex justify-end w-full  h-30px ' >
        <FontAwesomeIcon
			icon={faTimes}
            onClick={toggleActive}
            className='text-orange-600 text-xl'>
        </FontAwesomeIcon>
        </div>
    <div className='flex flex-1 justify-left w-full text-2xl font-extrabold '>
        This Project is still in Development
    </div>
    <div className='text-sm font-medium'>
        Join our waitlist; Get an opportunity to become one of the first users
        users and also participate in our usability testing before launch day.
    </div>
    <form onSubmit={handleSubmit}>
            <input
            type="text"
            id="name"
            value={name}
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            className='mt-7 mb-4 waitlisttext'
            required
            />

            <input
            type="text"
            id="emaill"
            value={emaill}
            placeholder='Enter Email'
            onChange={(e) => setEmaill(e.target.value)}
            className='mb-7 waitlisttext'
            required
            />

            <input type="submit" value="Send" className='waitlistsubmit'/>
        
        </form>
    </div>
</div>
    )}

    export default Waitlist;