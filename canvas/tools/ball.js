// 球体运动
export class MovingBall {
  constructor(vector, r, color, velocity, id) {
    this.pos = vector; // 保存初始位置
    this.r = r;
    this.color = color;
    this.velocity = velocity;
    this.id = id;
  }

  // 更新球体运动状态
  update(index, balls = [], rightBorder, bottomBorder) {

    let nextPos; // 模拟下一次落点

    // 计算下一次落点
    nextPos = this.pos.add(this.velocity);

    // 判断落点的位置是否碰触边界，如果是则边界法向的速度反向，假设碰撞过程是无能量损失
    if (rightBorder && (nextPos.x + this.r > rightBorder || nextPos.x < this.r)) {
      this.velocity.x = -1 * this.velocity.x;
      nextPos = this.pos;
    }
    if (bottomBorder && (nextPos.y + this.r > bottomBorder || nextPos.y < this.r)) {
      this.velocity.y = -1 * this.velocity.y;
      nextPos = this.pos;
    }

    // 判断是否与其他小球产生碰撞
    balls.map(ball => {
      if (ball.id !== balls[index].id && this.checkCollision(ball)) {
        this.handleCollision(ball);
      }
      return ball;
    });

    // 确认更新位置
    this.pos = nextPos;
  }

  // 检测碰撞 两个球体的圆心距小于两球体半径之和
  checkCollision = (ball) => this.pos.subtract(ball.pos).length() < this.r + ball.r;

  // 处理碰撞 只考沿着虑球心连线分解速度的对心碰撞
  handleCollision(ball) {
    const ballToThis = this.pos.subtract(ball.pos).normalize(); // 对面球沿连心线的碰撞方向
    const thisToBall = ballToThis.negate(); // 当前球沿连心线的碰撞方向

    this.velocity = ballToThis.multiply(Math.abs(ball.velocity.dot(ballToThis)));
    ball.velocity = thisToBall.multiply(Math.abs(this.velocity.dot(thisToBall)));
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2, false);
    ctx.fill();
  }
}