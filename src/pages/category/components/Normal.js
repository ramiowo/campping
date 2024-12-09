import { scrollList } from "../../../api";
import CategoryList from "../CategoryList";

export const Normal = () => {
  return (
    <CategoryList
      title="일반 야영장"
      filterKey="induty"
      filterValue="일반야영장"
      fetchApi={scrollList}
    />
  );
};

export default Normal;
