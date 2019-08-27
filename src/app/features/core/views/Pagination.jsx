import React from 'react';
import classNames from 'classnames';
export const Pagination = props => {
    const { page, totalPages } = props;
    return (
        <nav aria-label="">
            <ul className="pagination">
                <li
                    className={classNames("page-item", { 'disabled': page === 1 })}
                    onClick={page !== 1 ? props.setPage(page - 1) : undefined}
                >
                    <span className="page-link">Previous</span>
                </li>
                {
                    Array.from({ length: totalPages }, (_, i) => <li key={i}
                        onClick={props.setPage(i + 1)}
                        className={classNames("page-item", { 'active': page === i + 1 })}>
                        <span className="page-link">{i + 1}</span>
                    </li>)
                }
                <li
                    onClick={page !== totalPages ? props.setPage(page + 1) : undefined}
                    className={classNames("page-item", { 'disabled': page === totalPages })}>
                    <span className="page-link">Next</span>
                </li>
            </ul>
        </nav>
    );
}