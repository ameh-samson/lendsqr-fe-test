import { useState } from "react";
import styles from "./Datatable.module.scss";
import { useDashboardContext } from "@/context/DashboardContext";
import filter from "@/assets/svg/filter-results-button.svg";
import actionDots from "@/assets/svg/action-dots.svg";

const Datatable = () => {
  const { data } = useDashboardContext();
  const [page, setPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const startIndex = (page - 1) * recordsPerPage;
  const paginatedData = data?.slice(startIndex, startIndex + recordsPerPage);
  const totalPages = Math.ceil(data?.length / recordsPerPage);

  const getPaginationRange = () => {
    const delta = 2;
    const range = [];

    for (
      let i = Math.max(2, page - delta);
      i <= Math.min(totalPages - 1, page + delta);
      i++
    ) {
      range.push(i);
    }

    if (page - delta > 2) range.unshift("...");
    if (page + delta < totalPages - 1) range.push("...");

    range.unshift(1);
    if (totalPages > 1) range.push(totalPages);

    return range;
  };

  const handlePageChange = (pageNum: number) => {
    if (typeof pageNum === "number" && pageNum > 0 && pageNum <= totalPages) {
      setPage(pageNum);
    }
  };

  const handleRecordsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRecordsPerPage(Number(event.target.value));
    setPage(1);
  };

  return (
    <div>
      <div className={styles.datatableContainer}>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>
                  <div>
                    <span>Organization</span>
                    <img src={filter} alt="filter" />
                  </div>
                </th>
                <th>
                  <div>
                    <span>Username</span>
                    <img src={filter} alt="filter" />
                  </div>
                </th>
                <th>
                  <div>
                    <span>Email</span>
                    <img src={filter} alt="filter" />
                  </div>
                </th>
                <th>
                  <div>
                    <span>Phone Number</span>
                    <img src={filter} alt="filter" />
                  </div>
                </th>
                <th>
                  <div>
                    <span>Date Joined</span>
                    <img src={filter} alt="filter" />
                  </div>
                </th>
                <th>
                  <div>
                    <span>Status</span>
                    <img src={filter} alt="filter" />
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {paginatedData?.map((user, index) => (
                <tr key={index}>
                  <td>{user.organization}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.date_joined}</td>
                  <td className={styles[user.status.toLowerCase()]}>
                    {user.status}
                  </td>
                  <td>
                    <button className={styles.actionButton}>
                      <img src={actionDots} alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.paginationContainer}>
        <div className={styles.recordsPerPage}>
          <span>Showing </span>
          <select value={recordsPerPage} onChange={handleRecordsPerPageChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span> out of {data?.length}</span>
        </div>

        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            &lt;
          </button>
          {getPaginationRange().map((item, index) => (
            <button
              key={index}
              onClick={() => typeof item === "number" && handlePageChange(item)}
              className={page === item ? styles.active : ""}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Datatable;
