/* global alert */
export function checkAccess(params, data) {
  if (
    params.apiData.data[0].name.toLowerCase() !== data.params.name.toLowerCase() ||
    params.apiData.data[0].password.toLowerCase() !== data.params.password.toLowerCase()
  ) {
    /* eslint-disable no-alert */
    alert('Неверный логин или пароль');
    return false;
  }
  return true;
}

export function anotherHelper() {}
