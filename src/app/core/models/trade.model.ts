export interface Trade {
  id: string;
  user: string;
  asset: string;
  amount: number;
  price: number;
  status: 'Completed' | 'Pending' | 'Failed';
  createdAt: string;
}