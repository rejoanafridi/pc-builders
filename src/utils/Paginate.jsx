/* eslint-disable react/prop-types */

import ReactPaginate from 'react-paginate';
import './Paginate.css'; // Import the custom CSS

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <div className="pagination-container">
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={'pagination flex justify-center items-center'}
        pageClassName={'page-number'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Pagination;
