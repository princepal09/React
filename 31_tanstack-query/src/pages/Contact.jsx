import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
    const {contactId} = useParams();
    console.log(contactId);

  return (
    <div>
      CONTACT {contactId}
    </div>
  )
}

export default Contact
