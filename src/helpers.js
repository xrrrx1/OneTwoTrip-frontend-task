export function checkAccess(params, data) {
  if (
    params.apiData.data.name.toLowerCase() !== data.params.name.toLowerCase() ||
    params.apiData.data.password.toLowerCase() !==
      data.params.password.toLowerCase()
  ) {
    alert("Неверный логин или пароль");
    return false;
  }
  return true;
}
