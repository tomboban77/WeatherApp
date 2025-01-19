import React from 'react'
import { useForm } from 'react-hook-form'

interface SearchBarProps {
  onSearch: (city: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { register, handleSubmit } = useForm<{ city: string }>()

  const onSubmit = (data: { city: string }) => {
    onSearch(data.city)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-4 mb-6">
      <input
        {...register('city')}
        type="text"
        placeholder="Enter city"
        className="border rounded px-4 py-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
