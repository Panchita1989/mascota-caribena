'use client'


export default function TimePicker({onSelectTime, selectedTime}){
    const openingHours = ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
    

    return(
        openingHours.map((e, i)=>{
            return <button 
                className='p-2 m-2 lg:hover:bg-gray-300 lg:hover:cursor-pointer border-1 rounded'
                style={{backgroundColor: selectedTime === e && 'gray'}}                
                key={e}
                onClick={() => onSelectTime(e)}
                >
                    {e}
                </button>
        })
    )
}