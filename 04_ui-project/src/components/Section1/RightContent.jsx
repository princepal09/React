import RightCard from './RightCard'

const RightContent = (props) => {
           

  console.log(props.users.length);
  return (
    
    <div id = 'right' className='h-full rounded-4-xl overflow-x-auto p-6 flex flex-nowrap gap-10 w-2/3'>
      {
        (props.users && props.users.length > 0)
          ? props.users.map((elem,idx) => (
              <RightCard key = {idx} color = {elem.color} id = {idx} img = {elem.img} tag = {elem.tag }   />
            ))
          : <p>No users found.</p>
      }
    </div>
  )
}

export default RightContent
