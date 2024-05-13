interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void; // 반환값이 없는 함수를 선언하고자 할 때 사용하는 것 void
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}

const characterA = new Character("폼폼푸린", 50, "test");

characterA.move();
