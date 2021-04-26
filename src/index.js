/*
 * @Description:
 * @Author: Luke Z
 * @Date: 2021-04-25 23:20:31
 * @LastEditors: Luke Z
 * @LastEditTime: 2021-04-25 23:23:57
 * @FilePath: /DesignPattern/src/index.js
 */
class SingleObject {
  login() {
    console.log("login...");
  }
}
SingleObject.getInstance = function () {
  let instance;
  return function () {
    if (!instance) {
      instance = new SingleObject();
    }
    return instance;
  };
};
const obj1 = SingleObject.getInstance();
const obj2 = SingleObject.getInstance();
console.log(obj1 === obj2);
