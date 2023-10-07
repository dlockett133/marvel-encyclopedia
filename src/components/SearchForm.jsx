import React, { useEffect } from 'react'

function SearchForm({handleInputChange, handleSubmit}) {
  return (
    <form>
        <div className="form-group">
            <input
                onChange={handleInputChange}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search For Your Hero"
                id="search"
            />
            <br />
        </div>
    </form>  
    )
}

export default SearchForm