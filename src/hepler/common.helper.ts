export const filterProducts = {
  price_range: [
    {
      display: "50 - 100",
      value: "50-100",
      name: "price-range",
    },
    {
      display: "100 - 500",
      value: "100-500",
      name: "price-range",
    },
    {
      display: "500 - 1000",
      value: "500-1000",
      name: "price-range",
    },
    {
      display: "1000 - 5000",
      value: "1000-5000",
      name: "price-range",
    },
    {
      display: "5000+",
      value: "5000 +",
      name: "price-range",
    },
  ],
};
export const categoryData = [
    {
      uuid: '01',
      name: 'electronics',
      image: '../public/images/electronics.jpg',
      status:"ACTIVE"
    },
    {
      uuid: '02',
      name: 'jewelery',
      image: '../public/images/jwellery.jpg',
      status:"ACTIVE"
    },
    {
      uuid: '03',
      name: "men's clothing",
      image: "../public/images/man's clothing.jpg",
      status:"ACTIVE"
    },
    {
      uuid: '04',
      name: "women's clothing",
      image: "../public/images/women's clothing.jpg",
      status:"ACTIVE"
    },
    {
      uuid: '05',
      name: 'Perfumes',
      image: '../public/images/perfume.jpg',
      status:"ACTIVE"
    },
  ];

export const ResponseType= {
  Failed:"failed",
  Success:"success"
}

export type ApiParamsType = {
  limit: number;
  count: number;
  page: number;
  isAsc?: boolean;
  sort?: string;
  searchText?: string;
  searchField?: string;
};
