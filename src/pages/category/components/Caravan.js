import { scrollList } from "../../../api";
import CategoryList from "../CategoryList";

export const Caravan = () => {
  return (
    <CategoryList
      title="카라반"
      filterKey="induty"
      filterValue="카라반"
      fetchApi={scrollList}
    />
  );
};

export default Caravan;
