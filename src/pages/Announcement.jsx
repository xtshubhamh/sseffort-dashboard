import React from 'react'
import { PhotoIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

const Announcement = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <form>
        {/* <h2 className="text-xl font-semibold text-gray-900 mb-6">Post Academic Announcement</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Announcement Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g., Internal Exam Rescheduled"
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
          </div>

          {/* Branch */}
          <div>
            <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
              Branch
            </label>
            <div className="relative mt-2">
              <select
                id="branch"
                name="branch"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-indigo-500"
              >
                <option>All Branches</option>
                <option>Computer Science</option>
                <option>Mechanical Engineering</option>
                <option>Civil Engineering</option>
                <option>Electrical Engineering</option>
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message / Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write the full announcement or instruction here..."
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-500"
            />
          </div>

          {/* Semester */}
          <div>
            <label htmlFor="semester" className="block text-sm font-medium text-gray-700">
              Semester
            </label>
            <div className="relative mt-2">
              <select
                id="semester"
                name="semester"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-indigo-500"
              >
                <option>All Semesters</option>
                <option>1st Semester</option>
                <option>2nd Semester</option>
                <option>3rd Semester</option>
                <option>4th Semester</option>
                <option>5th Semester</option>
                <option>6th Semester</option>
                <option>7th Semester</option>
                <option>8th Semester</option>
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Dates Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Announcement Date */}
          <div>
            <label htmlFor="announceDate" className="block text-sm font-medium text-gray-700">
              Announcement Date
            </label>
            <input
              type="date"
              id="announceDate"
              name="announceDate"
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-indigo-500"
            />
          </div>

          {/* Expiry Date */}
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* File Upload */}
        <div className="mt-4">
          <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
            Attach Banner or PDF (optional)
          </label>
          <div className="mt-2 flex justify-center rounded-md border border-dashed border-gray-300 px-6 py-5">
            <div className="text-center">
              <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />
              <div className="mt-4 flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <span className="pl-1">or drag and drop</span>
              </div>
              <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>

        {/* Submit & Reset */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            className="text-sm font-semibold text-gray-700 hover:text-gray-900"
          >
            Reset
          </button>
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Publish Announcement
          </button>
        </div>
      </form>
    </div>
  )
}

export default Announcement
