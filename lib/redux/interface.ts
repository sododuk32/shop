/* eslint-disable @typescript-eslint/no-unused-vars */
export type productInfo = {
  productId: string;
  amount: number;
  option: UserOption;
  price: number;
};

export type orderInfo = {
  oid: string;
  orderSday: string;
  daytoEnd: string;
  orderConditon: string;
  uid: number;
  product: productInfo;
};

export type logined = {
  logined: boolean;
  Key: string;
  uid: string;
  username: string;
};

export type Comments = {
  nameInput: string | undefined;
  pids: string;
  uids: string;
  star: number;
  comment: string | undefined;
  line: string;
};

class defaultOption {
  public ProductColor!: string;
  public ProductSize!: string;
  public ProductWireless!: string;
}

export class UserOption extends defaultOption {
  public ProductHands!: string;
}

export type orderProduct = {
  amount: string;
  daytoEnd: string;
  oid: string;
  orderCondition: string;
  orderSday: string;
  price: number;
  productId: string;
  uid: string;
};

export interface oidDay {
  oid: string;
  orderCondition: string;
  daytoEnd: string;
  orderSday: string;
  totalPrice: number;
}
