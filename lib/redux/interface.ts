/* eslint-disable @typescript-eslint/no-unused-vars */
export type productInfo = {
  productId: string;
  amount: number;
  option: UserOption;
  price: number;
};

class defaultOption {
  public ProductColor!: string;
  public ProductSize!: string;
  public ProductWireless!: string;
}

export class UserOption extends defaultOption {
  public ProductHands!: string;
}
//제품마다 클래스를 다르게 하려 했으나, 유지보수 측면에서 안좋아보임.
//Hands가 없다면 false를 쓰면됨.상품의 추가 옵션이 없는 상품이라면 없는 옵션의 값을 false로 쓰면됨
// 만약 여러상품을 이거 하나로 대응한다면 모든 type을 class에 넣어주면됨.
// option을 객체가 아니라, all string으로 바꿔서 검색해서 찾는방법도 있음
