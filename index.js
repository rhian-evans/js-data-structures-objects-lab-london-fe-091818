// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
   driver[key]=value;
   Object.assign({}, driver, { [key]: value });
  return driver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {

}

function destructivelyDeleteFromDriverByKey(driver, key) {
}