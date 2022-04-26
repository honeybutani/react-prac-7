import "./Pagination.css";

export const Pagination = ({ paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= 2; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <div className="listpage" key={number}>
            <button
              onClick={() => paginate(number)}
              className={number === currentPage ? "current" : "cell"}
            >
              {number}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Pagination;
