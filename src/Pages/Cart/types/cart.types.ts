
export type cartData = {
  uuid: number;
  product_uuid: number;
  price: string;
  quantity: number;
  total_price: string;
  payment_done:"PENDING"|"COMPLETED";
  product: {
    uuid: number;
    title: string;
    description: string;
    category_uuid: number;
    images: string;
    price: string;
    Quantity: number;
    addedToCart: boolean;
  };
};
