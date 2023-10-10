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
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        // Prevents Enter key press from submitting the form
                        // You can add additional logic here if needed
                        e.preventDefault()
                    }
                }}
            />
            <br />
        </div>
    </form>  
    )
}

export default SearchForm