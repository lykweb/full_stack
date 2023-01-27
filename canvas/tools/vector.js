//二维向量定义
 export class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  copy = () => new Vector2(this.x, this.y);

  // 长度
  length = () => Math.sqrt(this.x * this.x + this.y * this.y);

  // 长度的平方
  sqrLength = () => this.x * this.x + this.y * this.y;

  // 单位向量
  normalize() {
    const inv = 1 / this.length();
    return new Vector2(this.x * inv, this.y * inv);
  }

  // 反向向量
  negate = () => new Vector2(-this.x, -this.y);

  // 两个向量相加 v 为向量
  add = (v) => new Vector2(this.x + v.x, this.y + v.y);

  // 两个向量相减 v 为向量
  subtract = (v) => new Vector2(this.x - v.x, this.y - v.y);

  // 数乘向量 f 为实数 
  multiply = (f) => new Vector2(this.x * f, this.y * f);
  
  // 两个向量的数量积（内积、点积）
  dot = (v) => this.x * v.x + this.y * v.y;

}