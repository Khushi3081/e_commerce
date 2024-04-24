import { useEffect, useState } from "react";
import {
  getAllCategory,
  getCategoriesWiseProducts,
  getProductListing,
} from "./services/dashboard.service";
import FiltersModalData from "component/FilterModal";
import Productcard from "component/Productcard";
import { ProductDetailsPageType } from "./types/dashboard.type";
import { ApiParamsType } from "hepler/common.helper";

const Dashboard = () => {
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<string>("0+");
  const [oneCategory, setOneCategory] = useState<string[]>([]);
  const [productsofCategory, setProductsofCategory] =
    useState<ProductDetailsPageType[]>();
  const [apiParams, setApiParams] = useState<ApiParamsType>({
    limit: 10,
    count: 0,
    page: 1,
  });

  useEffect(() => {
    getProductData();
  }, [priceRange, oneCategory, apiParams.count, apiParams.page]);

  const getProductData = async () => {
    const categories = await getAllCategory();
    setCategoryList(categories?.data?.data);

    const response2 = await getProductListing();
    const response = await getCategoriesWiseProducts({
      categoriesId: oneCategory?.length > 0 && oneCategory,
      priceRange: priceRange,
      ...apiParams,
    });

    if (response?.data?.data?.count !== 0) {
      setApiParams((params: ApiParamsType) => {
        return {
          ...params,
          count: response?.data.data.count,
        };
      });
      setProductsofCategory(response?.data?.data.rows);
    } else {
      setProductsofCategory(response2?.data?.data);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setFilterModal(!filterModal)}
        className="btn btn-primary"
      >
        Choose Filter
      </button>
      <div>
        {productsofCategory && productsofCategory.length>0 ? (
          <Productcard
            data={productsofCategory}
          />
        ):
        <h3>Data not found</h3>}
      </div>
      {filterModal === true && (
        <>
          <FiltersModalData
            filterModal={filterModal}
            setFilterModal={setFilterModal}
            setPriceRange={setPriceRange}
            priceRange={priceRange}
            categories={categoryList}
            setCategories={setCategoryList}
            oneCategory={oneCategory}
            setOneCategory={setOneCategory}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;
