import React, { useId } from 'react'

const UseId = () => {
 

    // const userNameid = useId();
    // const emailId = useId();

    // Avoid Repetition 
    const id = useId();
    
  return (
    <div>

        <form >
            <div>
                <label htmlFor={id + "userNameid"}></label>
                <input type="text"  id={id + "userNameid"} />
            </div>
            <div>
                <label htmlFor={id + "emailId"}></label>
                <input type="text" id={id + "emailId"}  />
            </div>

            <button></button>
        </form>
      
    </div>
  )
}

export default UseId
