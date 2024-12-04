import { scrollList } from "../../../api";
import CategoryList from "../CategoryList";

export const Glamping = () => {
  return (
    <CategoryList
      title="글램핑"
      filterKey="induty"
      filterValue="글램핑"
      fetchApi={scrollList}
    />
  );
};

export default Glamping;
