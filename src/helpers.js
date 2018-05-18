export function checkAccess(params) {
  if (
    params.username.toLowerCase() !== 'admin' ||
    params.password !== '12345'
  ) {
    return false
  }

  return true
}