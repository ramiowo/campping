import { scrollList } from "../../../api";
import CategoryList from "../CategoryList";

export const Car = () => {
  return (
    <CategoryList
      title="자동차 야영장"
      filterKey="induty"
      filterValue="자동차야영장"
      fetchApi={scrollList}
    />
  );
};

export default Car;
