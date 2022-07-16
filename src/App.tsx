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

  return (
    <div className="App">
      {이름}
      <div>{이름들}</div>
      <div>{복합}</div>
    </div>
  );
}

export default App;
