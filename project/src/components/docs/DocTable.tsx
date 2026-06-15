import React from 'react';

interface DocTableProps {
  headers: string[];
  rows: string[][];
}

const DocTable: React.FC<DocTableProps> = ({ headers, rows }) => {
  return (
    <div className="my-6 overflow-x-auto border border-[#333] rounded-lg">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#1a1a1a] border-b border-[#333]">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-sm font-semibold text-gray-200">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#333]">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-[#151515] transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-sm text-gray-400">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocTable;
