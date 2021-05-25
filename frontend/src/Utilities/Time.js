import dayjs from "dayjs";

const punchTimeDisplay = (timestamp) => {
  const timeObj = dayjs(timestamp);
  return timeObj.isValid() ? timeObj.format("hh:mm") : null;
};

const getDayString = () => {
  return dayjs().format("DD-MM-YYYY");
};

export { punchTimeDisplay, getDayString };
