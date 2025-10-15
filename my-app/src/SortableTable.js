import React, { useState } from "react";
import "./SortableTable.css";

const employeeData = [
    { name: "Alice", department: "HR", salary: 50000 },
    { name: "Bob", department: "Engineering", salary: 75000 },
    { name: "Charlie", department: "Marketing", salary: 60000 },
    { name: "David", department: "Engineering", salary: 80000 },
    { name: "Eve", department: "HR", salary: 55000 },
];

const SortableTable = () => {
    const [data, setData] = useState(employeeData);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });

        const sortedData = [...data].sort((a, b) => {
            if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
            if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
            return 0;
        });

        setData(sortedData);
    };

    return (
        <table className="sortable-table">
            <thead>
                <tr>
                    <th onClick={() => handleSort("name")}>Name</th>
                    <th onClick={() => handleSort("department")}>Department</th>
                    <th onClick={() => handleSort("salary")}>Salary</th>
                </tr>
            </thead>
            <tbody>
                {data.map((employee, index) => (
                    <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
                        <td>{employee.name}</td>
                        <td>{employee.department}</td>
                        <td>{employee.salary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SortableTable;
