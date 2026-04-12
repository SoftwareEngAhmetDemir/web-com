import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TableCell = string | { src: string; alt?: string };

interface CustomTableProps {
  columns: string[];
  data: TableCell[][];
  noHash?: boolean;
}

export const CustomTable: React.FC<CustomTableProps> = ({ columns, data, noHash }) => {
  return (
    <div className="w-full overflow-x-auto">
      <Table className="min-w-[480px]">
        <TableHeader>
          {!noHash && (
            <TableRow className="border-b-0 hover:bg-transparent">
              <TableHead className="w-[40px] px-2 py-2 text-center whitespace-nowrap">#</TableHead>
              {columns.map((col, idx) => (
                <TableHead key={idx} className="px-2 py-2 text-left whitespace-nowrap">
                  {col}
                </TableHead>
              ))}
            </TableRow>
          )}
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className={`border-b-0 hover:bg-transparent ${
                rowIndex % 2 === 0 && !noHash
                  ? "bg-[linear-gradient(0deg,#350000,#9f0000)]"
                  : ""
              }`}
            >
              {!noHash && (
                <TableCell className="w-[40px] px-2 py-2 text-center">
                  {rowIndex + 1}
                </TableCell>
              )}
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} className="px-2 py-2 break-words">
                  {typeof cell === "string" ? (
                    cell
                  ) : (
                    <img src={cell.src} alt={cell.alt || ""} className="max-w-full" />
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
