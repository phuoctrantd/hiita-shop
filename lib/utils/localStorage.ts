export const JWT_KEY = "JWT"
export const ACCESS_TOKEN_KEY = "accessToken"
export const EXPIRED_AT_KEY = "expiredAt"

const getJWTFromStorage = async () => {
  try {
    return await localStorage.getItem(JWT_KEY)
  } catch (e) {
    console.log("Failed to get login token from storage")
  }
}

const setJWTToStorage = async (locale: string) => {
  try {
    await localStorage.setItem(JWT_KEY, locale)
  } catch (e) {
    console.log("Failed to save login token to the storage")
  }
}

const getAccessTokenFromStorage = async () => {
  try {
    return await localStorage.getItem(ACCESS_TOKEN_KEY)
  } catch (e) {
    console.log("Failed to get login token from storage")
  }
}

const setAccessTokenToStorage = async (locale: string) => {
  try {
    await localStorage.setItem(ACCESS_TOKEN_KEY, locale)
  } catch (e) {
    console.log("Failed to save login token to the storage")
  }
}

const getExpiredAtFromStorage = async () => {
  try {
    return await localStorage.getItem(EXPIRED_AT_KEY)
  } catch (e) {
    console.log("Failed to get login token from storage")
  }
}

const setExpiredToStorage = async (locale: string) => {
  try {
    await localStorage.setItem(EXPIRED_AT_KEY, locale)
  } catch (e) {
    console.log("Failed to save login token to the storage")
  }
}

export {
  getAccessTokenFromStorage,
  getExpiredAtFromStorage,
  getJWTFromStorage,
  setAccessTokenToStorage,
  setExpiredToStorage,
  setJWTToStorage
}
