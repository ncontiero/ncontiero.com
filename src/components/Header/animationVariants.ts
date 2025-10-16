const list = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: { y: -80, opacity: 0, filter: "blur(50px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
};

export const animation = {
  list,
  item,
};
