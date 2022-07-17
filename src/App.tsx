import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import "./App.css";

function App() {
  let 이름: string = "kim";
  let 이름들: string[] = ["kim", "lee", "Part"];
  let 복합: string | number = 123;

  function 함수(num: number): number {
    return num * 2;
  }
  함수(1);

  type Name = string | number;

  type Member = [number, boolean];
  let john: Member = [123, true];

  // 오브젝트 타입 지정
  type Members = {
    name: string;
  };
  let sean: Members = { name: "kim" };

  //오브젝트에 여러 타입 넣기
  let 회원들: { member1: string; member2: number } = { member1: "kim", member2: 2 };

  //타입스크립트 지정 안해서 자동으로 넣어줌

  let 문자면 = "park";

  // 싸잡아서 타입 지정
  type Members2 = {
    [key: string]: string;
  };
  let grace: Members2 = { name: "kim" };

  //클래스 타입 지정

  class User {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  //숫자 문자 다 들어오는 타입 Union 타입 할당 해서버리면 하나로 확정됨
  let 회원쓰: number | string | boolean = 123;

  // 숫자 또는 문자가 가는한  Array, object
  let 사람들: (number | string)[] = [1, "2", 3];
  let 오브줵트: { a: string | number } = { a: 123 };

  let 애니: any; // 타입 실드 해제 문법임
  애니 = 123;
  애니 = true;

  let 하하: unknown; //최신에 아무거나 집어 넣게 쓰는 것 조금 더 안전함
  //하하 - 1; 이런거 안됨 하하가 unknown 타입이라서 빼기 같은게 안됨

  //let 나이: string | number;
  //나이 + 1; 이런것도 안됨 union 타입에는 안됨

  return (
    <div className="App">
      {이름}
      <div>{이름들}</div>
      <div>{복합}</div>
    </div>
  );
}

export default App;
