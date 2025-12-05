const accountId=12345
let accountEmail= "abc@gmail.com"
var accountpassword="12345"
accountcity="jaipur"
let accoountstate;

//accountId=2 // not allowed

accountEmail="hc@hc.com"
accountpassword="212121"
accountcity="bengal"
/*prefer not to use var bcs of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountEmail,accountId,accountpassword,accountcity,accoountstate])