import dayjs from "dayjs";

const punchTimeDisplay = (timestamp) => {
  const timeObj = dayjs(timestamp);
  return timeObj.isValid() ? timeObj.format("hh:mm") : null;
};

export { punchTimeDisplay };
