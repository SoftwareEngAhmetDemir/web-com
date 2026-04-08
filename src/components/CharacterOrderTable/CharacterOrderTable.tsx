import { CustomTable } from "../common/CustomTable/CustomTable";

const columns = ["Character Name", "Level", "Guild", "Play Time", "Kingdom"];

const data = [
  ["ALeeeM", "99", "ALeeeMFARM", "% a day% h hours%i min", { src: "https://capomt2.com/web/assets/images/empire/1.jpg", alt: "Kingdom Flag" }],
  ["IcaruS", "99", "SPARTANUS", "% a day% h hours%i min", { src: "https://capomt2.com/web/assets/images/empire/1.jpg", alt: "Kingdom Flag" }],
  ["TITANSxALeeeM", "99", "-", "% a day% h hours%i min", { src: "https://capomt2.com/web/assets/images/empire/1.jpg", alt: "Kingdom Flag" }],
];

export const CharacterOrderTable = () => {
  return <>
   <h1 className="text-[2rem] font-medium text-center">Character Order</h1>
      <hr className="my-[20px]" />
  <CustomTable columns={columns} data={data} />
  </>
};