"use client"
import { ChangeEvent, useState } from "react"

export default function SearchNFilter() {
  const [sortBy, setSortBy] = useState('');
  const [filterBy, setFilterBy] = useState('');

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value);
  };

  return (
    <div className="my-20">
      <input  className="border border-secondary/40 bg-secondary/00 focus:outline-none focus:bg-secondary/10 transition ease-in-out duration-500 focus:transition focus:ease-in-out focus:duration-500 rounded-md w-full p-3 mb-5"  type="text" placeholder="Search for tutors or skills" />
      <div className="flex">
        <div className="mr-5">
          <label htmlFor="sort" className="text-md font-semibold">Sort By:</label>
          <select className="w-[100px]" id="sort" value={sortBy} onChange={handleSortChange}>
            <option className="bg-secondary/10 rounded-sm" value="">Select</option>
            <option className="bg-secondary/10 rounded-sm" value="price">Price</option>
            <option className="bg-secondary/10 rounded-sm" value="rating">Rating</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="filter" className="text-md font-semibold">Filter By:</label>
          <select className="w-[100px]" id="filter" value={filterBy} onChange={handleFilterChange}>
            <option className="bg-secondary/10 rounded-sm" value="">Select</option>
            <option className="bg-secondary/10 rounded-sm" value="category">Category</option>
            <option className="bg-secondary/10 rounded-sm" value="location">Location</option>
          </select>
        </div>
      </div>
    </div>
  )
}
