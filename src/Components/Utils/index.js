export const isLogin = () => {
  if (
    localStorage.getItem("username") === "vraj1910" &&
    localStorage.getItem("password") === "123"
  ) {
    return true;
  }
  return false;
};
