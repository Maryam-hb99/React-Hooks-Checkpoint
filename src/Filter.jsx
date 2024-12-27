const Filter = ({ filterText, setFilterText, filterRating, setFilterRating }) => {
    return (
      <div className=" p-4 rounded-lg shadow-lg flex justify-between items-center max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Search by Title"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white w-1/3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="number"
          placeholder="Rating (0-10)"
          value={filterRating}
          onChange={(e) => setFilterRating(e.target.value)}
          min="0"
          max="10"
          className="px-4 py-2 rounded-lg bg-gray-800 text-white w-1/4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
    );
  };
  
  export default Filter;
  