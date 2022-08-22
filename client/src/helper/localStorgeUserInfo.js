export const setUserInfo = (user) => {
  localStorage.setItem("userInfo", JSON.stringify(user))
}

export const getUserInfo = () => {
  const userInfo = localStorage.getItem("userInfo")
  return userInfo ? JSON.parse(userInfo) : false
}

export const removeUserInfo = () => {
  localStorage.removeItem("userInfo")
}
