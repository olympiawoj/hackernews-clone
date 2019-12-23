var moment = require("moment");

export function formatDate(timestamp) {
  var date = new Date(timestamp * 1000).toLocaleDateString("en-US");
  return date;
}
export function formatDatetime(timestamp) {
  let dateTime = new Date(timestamp * 1000);
  dateTime = moment(dateTime).format("h:mm A");
  return dateTime;
}
