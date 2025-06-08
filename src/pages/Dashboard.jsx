import React from 'react'
import MainNotes from '../components/Notes/MainNotes'
import SectionHeadingMain from '../components/SectionHeading/SectionHeadingMain'
import { Link } from 'react-router-dom';

const Dashboard = ({ title, descriptio, Dashboard }) => {
  const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  ]

  return (
    <>
    
      {/* top Block */}
      <div className='mt-3 border h-[200px] w-full rounded-3xl p-2'>
        <h4 className=' p-4 font-bold text-xl'>Welocme Polytechnic !</h4>
        <p className='px-4 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum magni quidem placeat voluptatibus deserunt quia facilis laudantium id modi, possimus veritatis obcaecati nihil facere voluptates tenetur laboriosam ullam maiores, omnis temporibus qui. Voluptatem cum aspernatur aliquid hic, quis quo expedita voluptatum sit ullam delectus saepe in maxime quia libero.</p>
      </div>
      <div className='flex flex-col lg:flex-row gap-4 mt-4'>
        {/* Sidebar */}
        <div className='p-4 border rounded-3xl w-full max-w-md'>
          <div className='border-b pb-3'>
            <h2>View Notes: </h2>
            <ul>
              <li className="text-sm text-gray-500">Computer Science Engineering</li>
              <li className="text-sm text-gray-500">Civil Engineering</li>
              <li className="text-sm text-gray-500">Mechnical Engineering</li>
              <li className="text-sm text-gray-500">Electrical Engineering</li>
              <Link to="view-all-notes" className='text-sm text-blue-500 cursor-pointer'>View All</Link>
            </ul>
          </div>
          <div className='pt-3'>
            <h2>Add Notes: </h2>
            <ul>
              <li className="text-sm text-gray-500">Computer Science Engineering</li>
              <li className="text-sm text-gray-500">Civil Engineering</li>
              <li className="text-sm text-gray-500">Mechnical Engineering</li>
              <li className="text-sm text-gray-500">Electrical Engineering</li>
              <Link to="add-notes" className='text-sm text-blue-500 cursor-pointer'>Add Notes</Link>
            </ul>
          </div>
        </div>

        {/* Students Table */}
        <div className='border rounded-3xl w-full max-w-3xl '>
          <div className='p-3'>
            <h2>All Students:</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Branch</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="py-4 pr-3 pl-4 text-sm font-medium text-gray-900 whitespace-nowrap">{person.name}</td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.title}</td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h5 className='text-sm text-blue-500 p-3 cursor-pointer'>View All Students</h5>
          </div>
        </div>

        {/* Stats Cards */}
        <div className='flex flex-col gap-4 w-full '>
          <div className='border rounded-3xl p-3 w-full '>
            <h5>Total Purchase:</h5>
            <h3 className='text-green-500'>$12,000</h3>
            <h5>Total Students:</h5>
            <h3 className='text-green-500'>6,00,000</h3>
            <h5>Total Course:</h5>
            <h3 className='text-green-500'>16 Branches</h3>
          </div>
          <div className='border rounded-3xl h-[150px] w-full '></div>
        </div>
      </div>

     
    </>
  )
}

export default Dashboard
