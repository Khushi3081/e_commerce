import { filterProducts } from "hepler/common.helper";
import { useOutsideClick } from "hepler/useOutsideClick";
import React, { useEffect } from "react";

interface FilterModelProps {
  filterModal: boolean;
  setFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPriceRange: (item: string) => void;
  priceRange: string;
  categories?: string[] | any;
  setCategories?: (item: string[]) => void;
  oneCategory?: string[] | any;
  setOneCategory?: (item: string[]) => void;
}

const FiltersModalData: React.FC<FilterModelProps> = ({
  filterModal,
  setFilterModal,
  setPriceRange,
  priceRange,
  categories,
  oneCategory,
  setOneCategory,
}) => {
  const ref = useOutsideClick(() => {
    if (filterModal) {
      setFilterModal(false);
    }
  });
  useEffect(() => {
    setOneCategory?.([...oneCategory, categories[0].uuid]);
  }, []);
  const checkCategory = (e: any) => {
    if (e.target.checked) {
      setOneCategory?.([...oneCategory, e.target.value]);
    } else {
      const data = oneCategory.filter((item: string) => {
        return item !== e.target.value;
      });
      setOneCategory?.(data);
    }
  };
  return (
    <div className="bg-white block" style={{ width: '767px', position: 'absolute', top: '20px', zIndex: '20', right: '7px', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} ref={ref}>
      <h1 className="text-black font-medium capitalize">Price range</h1>
      <div className="flex flex-wrap my-2">
        {filterProducts.price_range.map((item: { display: string; value: string; name: string }, index:number) => (
          <div className="w-1/3 px-3 my-1" key={index}>
            <div className="flex items-center ">
              <input
                id={item.name}
                name={item.name}
                type="radio"
                value={item.value}
                onClick={() => setPriceRange(item.value)}
                checked={item.value === priceRange}
                style={{ marginRight: '8px' }}
              />
              <label htmlFor={item.name} style={{ fontSize: '1rem', fontWeight: '500', color: '#333' }}>{item.display}</label>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-1 my-3" />
      {categories && categories?.length > 0 && <h1 className="text-black font-medium capitalize">Categories</h1>}
      <div className="flex flex-wrap my-2">
        {categories && categories?.length > 0 && categories.map((item:any, index:number) => (
          <div className="w-1/3 px-3 my-1" key={index}>
            <div className="flex items-center">
              <input
                id={item.name}
                name={item.name}
                type="checkbox"
                value={item.uuid}
                defaultChecked={categories?.[0]?.uuid === item?.uuid ?? true}
                onClick={checkCategory}
                style={{ marginRight: '8px' }}
              />
              <label htmlFor={item.name} style={{ fontSize: '1rem', fontWeight: '500', color: '#333' }}>{item.name}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiltersModalData;
