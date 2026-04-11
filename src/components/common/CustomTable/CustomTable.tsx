import React from "react";

type TableCell = string | { src: string; alt?: string };

interface CustomTableProps {
  columns: string[];
  data: TableCell[][];
  noHash?: boolean; // Optional prop to disable the hash column
}

export const CustomTable: React.FC<CustomTableProps> = ({ columns, data, noHash }) => {
  return (
    <div className="w-full overflow-x-auto -mx-1 px-1">
    <table className="w-full min-w-[480px] table-fixed border-collapse">
      <thead>
        {noHash ? null : (
          <tr>
            <th className="w-[40px] px-2 py-2 text-center">#</th>
            {columns.map((col, idx) => (
              <th key={idx} className="px-2 py-2 text-left">{col}</th>
            ))}
          </tr>
        )}
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={`${
              rowIndex % 2 === 0&& !noHash ? "bg-[linear-gradient(0deg,#350000,#9f0000)]" : ""
            }`}
          >
            {noHash ? null : (
              <td className="text-center w-[40px] px-2 py-2">{rowIndex + 1}</td>
            )}
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-2 py-2 max-w-full">
                {typeof cell === "string" ? (
                  cell
                ) : (
                  <img src={cell.src} alt={cell.alt || ""} className="max-w-full" />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};