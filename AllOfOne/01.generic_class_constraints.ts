/**
 *  通过继承接口，达到泛型的约束的目的
 * @param msg 
 * @returns 
 */
interface Ilength {
  length: number;
}
function info<T extends Ilength>(msg: T): T {
  console.log(msg.length)
  return msg;
}
function info2<T>(msg: T): T {
  return msg;
}
let info3: { <T>(msg: T): T } = function (msg) {
  return msg;
}
info<string>("mr.lee")