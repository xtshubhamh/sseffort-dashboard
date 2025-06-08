import React, { useState } from 'react'
import { PhotoIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

const UploadNotes = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    title: '',
    branch: 'Civil',
    description: '',
    semester: '1st Semester',
  })
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  // Handle text/select input changes
  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle file input change
  const handleFileChange = e => {
    setFile(e.target.files[0])
  }

  // Handle form submit
  const handleSubmit = async e => {
    e.preventDefault()
    setMessage(null)

    if (!file) {
      setMessage({ type: 'error', text: 'Please upload a file.' })
      return
    }

    setLoading(true)

    try {
      // Prepare FormData object for multipart/form-data
      const data = new FormData()
      data.append('file-upload', file)        // file key must match backend multer key
      data.append('title', formData.title)
      data.append('branch', formData.branch)
      data.append('description', formData.description)
      data.append('semester', formData.semester)

      const response = await fetch('http://localhost:5000/api/notes/upload', {
        method: 'POST',
        body: data,
      })

      const result = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: 'File uploaded successfully!' })
        // Reset form after success if you want
        setFormData({
          title: '',
          branch: 'Civil',
          description: '',
          semester: '1st Semester',
        })
        setFile(null)
      } else {
        setMessage({ type: 'error', text: result.message || 'Upload failed' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: error.message })
    }

    setLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g., Thermodynamics Notes"
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              value={formData.title}
              onChange={handleChange}
              required
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
                className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                value={formData.branch}
                onChange={handleChange}
              >
                <option>Civil</option>
                <option>Mechanical</option>
                <option>Computer Science</option>
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Brief description of the notes..."
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              value={formData.description}
              onChange={handleChange}
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
                className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                value={formData.semester}
                onChange={handleChange}
              >
                <option>1st Semester</option>
                <option>2nd Semester</option>
                <option>3rd Semester</option>
                <option>4th Semester</option>
                <option>5th Semester</option>
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* File Upload */}
        <div className="mt-8">
          <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
            Cover Photo / File
          </label>
          <div className="mt-2 flex justify-center rounded-md border border-dashed border-gray-300 px-6 py-10">
            <div className="text-center">
              <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />
              <div className="mt-4 flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    required
                  />
                </label>
                <span className="pl-1">or drag and drop</span>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF, PDF up to 10MB</p>
              {file && <p className="mt-2 text-green-600">{file.name}</p>}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            className="text-sm font-semibold text-gray-700 hover:text-gray-900"
            onClick={() => {
              setFormData({
                title: '',
                branch: 'Civil',
                description: '',
                semester: '1st Semester',
              })
              setFile(null)
              setMessage(null)
            }}
          >
            Reset
          </button>
          <button
            type="submit"
            className={`inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Save'}
          </button>
        </div>

        {/* Feedback Message */}
        {message && (
          <p
            className={`mt-4 text-center ${
              message.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message.text}
          </p>
        )}
      </form>
    </div>
  )
}

export default UploadNotes
