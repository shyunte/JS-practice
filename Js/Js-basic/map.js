{
  //------------------- map.set---------------------

  const map = new Map();
  console.log(map);

  map.set("key 1", "value1");

  console.log(map);
  //map 은  set 메서드는 새로운 요소가 추가된 map객체를 반환하기 때문에 호출한 후에 set 메서드를 연속적으로 호출가능하다.

  map.set("key2", "value2").set("key3", "value3");
  console.log(map);

  //map은 키타입에 제한이 없다.

  const map2 = new Map();

  const shin = { name: "shin" };
  const yoon = { name: "yoon" };

  map2.set(shin, "developer").set(yoon, "designer");

  console.log(map2);
}

//---------------------map.get------------------

{
  const map2 = new Map();

  const shin = { name: "shin" };
  const yoon = { name: "yoon" };

  map2.set(shin, "developer").set(yoon, "designer");

  console.log(map2);

  console.log(map2.get(shin));
  console.log(map2.get(key)); //찾는 키 값이 없으면  undefined
}
