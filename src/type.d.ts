// App
interface IProduct {
  product: string;
  detail: string;
  cost: number;
  retail: number;
  width: number;
  depth: number;
  height: number;
  weight: number;
  _links: Object;
}

// React-Router-Dom
interface IRoute {
  name: string;
  link: string;
  label: string;
}

// Redux
interface IActionObject {
  type: string;
  payload?: any;
  error?: string;
}

interface IProductStore {
  loading: boolean;
  products: IProduct[];
  errorMessage?: string;
}
