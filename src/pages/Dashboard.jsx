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
      <div className=' flex mt-3 border h-[200px] w-full rounded-3xl p-2'>
        <div className='border rounded-3xl w-64'></div>
        <div className='border rounded-3xl w-64'></div>
        <div className='border rounded-3xl w-64'></div>
        <div className='border rounded-3xl w-64'></div>
      </div>
      <div className='flex flex-col lg:flex-row gap-4 mt-4'>
        {/* Sidebar */}
        <div className='p-4 border rounded-3xl w-full max-w-md bg-blue-50'>
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
        <div className='border rounded-3xl w-full max-w-3xl bg-yellow-100'>
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
          <div className='border rounded-3xl p-3 w-full bg-violet-200'>
            <h5>Total Purchase:</h5>
            <h3 className='text-green-500'>$12,000</h3>
            <h5>Total Students:</h5>
            <h3 className='text-green-500'>6,00,000</h3>
            <h5>Total Course:</h5>
            <h3 className='text-green-500'>16 Branches</h3>
          </div>
          <div className='border rounded-3xl h-[150px] w-full bg-green-200'></div>
        </div>
      </div>

     
    </>
  )
}

export default Dashboard
