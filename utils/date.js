import moment from "moment";

export const getCurrentDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  return `${year}-${month}-${day}`;
};

export const dateDifference = (startDate, endDate) => {
  const start = moment(startDate);
  const end = moment(endDate);

  const years = end.diff(start, "years");
  start.add(years, "years");

  const months = end.diff(start, "months") + 1;

  const yearsMsg = `${
    years >= 1 ? years + (years > 1 ? " years" : " year") : ""
  }`;
  const monthsMsg = `${
    months >= 1 ? months + (months > 1 ? " months" : " month") : ""
  }`;

  const formattedDifference = `${yearsMsg} ${monthsMsg}`.trim();

  return formattedDifference;
};
