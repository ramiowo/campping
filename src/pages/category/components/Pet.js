import { scrollList } from "../../../api";
import CategoryList from "../CategoryList";

export const Pet = () => {
  return (
    <CategoryList
      title="애견동반 캠핑장"
      filterKey="animalCmgCl"
      filterValue="가능"
      fetchApi={scrollList}
    />
  );
};

export default Pet;
