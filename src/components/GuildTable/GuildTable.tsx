import { CustomTable } from "../common/CustomTable/CustomTable";

const columns = [
  "Guild Name",
  "Level",
  "Points",
  "Kingdom",
  "Win",
  "Draw",
  "Lose"
];

const data = [
  ["AKASYADURAGI", "20", "23602", "-", "5", "0", "0"],
  ["TR", "20", "23016", "-", "6", "4", "0"],
  ["AMGOTMEME", "20", "22732", "-", "5", "2", "0"],
  ["KVP", "20", "22507", "-", "4", "1", "0"],
  ["RAMPAGE", "20", "21841", "-", "4", "0", "0"],
  ["FBI", "20", "21716", "-", "4", "0", "0"],
  ["GREEDALLSTAR", "20", "21682", "-", "3", "0", "0"],
  ["WOK", "20", "21547", "-", "17", "2", "4"],
  ["FAVELA", "20", "21436", "-", "7", "4", "1"],
  ["SOLDELACRIME", "20", "21379", "-", "5", "1", "1"],
  ["BARBARLAR", "20", "21214", "-", "5", "3", "1"],
  ["KUDURTAN", "20", "21132", "-", "4", "0", "0"],
  ["AREM", "20", "20947", "-", "2", "1", "0"],
  ["DANTELDON", "20", "20833", "-", "6", "1", "2"],
  ["TURKGUCU", "20", "20801", "-", "3", "1", "0"],
  ["BIRILERII", "20", "20801", "-", "3", "1", "0"]
];

export const GuildTable = () => {
  return (
    <>
      <h1 className="text-[2rem] font-medium text-center">Guild Ranking</h1>
      <hr className="my-[20px]" />
      <CustomTable columns={columns} data={data} />
    </>
  );
};
