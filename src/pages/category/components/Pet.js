import { scrollList } from "../../../api";
import CategoryList from "../CategoryList";

export const Pet = () => {
  return (
    <CategoryList
      title="애완동물 동반"
      filterKey="animalCmgCl"
      filterValue="가능"
      fetchApi={scrollList}
    />
  );
};

export default Pet;
