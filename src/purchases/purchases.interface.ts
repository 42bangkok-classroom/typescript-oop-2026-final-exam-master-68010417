export interface Purchase {
  id: number;
  customerName: string;
  purchaseDate: number;
  items: PurchaseItem[];
  totalPrice: number;
}

interface PurchaseItem {
  productId: number;
  quantity: number;
  price: number;
}
