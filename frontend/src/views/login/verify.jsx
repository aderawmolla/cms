import {Link} from 'react-router-dom'

export default function Verify() {
  return (
    <div className='h-screen w-full flex flex-col pt-[5%] items-center space-y-8'>
        <h1 className=' text-3xl text-green-500 font-semibold font-mono'>Payment Completed</h1>
        <h1 className=' font-mono'>Verification In Progress</h1>
        <h1 className="font-mono text-red-500">Please wait untill the status changes</h1>
        <Link to="/" className="font-mono text-2xl px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:text-white hover:bg-blue-500">Continue to website</Link>
    </div>
  )
}
