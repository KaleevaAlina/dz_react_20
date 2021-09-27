  export const requiredInput = (input) =>
  input ? undefined : `Требуется ввод`;

 export const correctInput = input =>
  input !== 'Alina' ? 'Неправильное имя пользователя' : undefined;

  export const matchInput = (input, allInputs) =>input === allInputs.password ? undefined : 'Пароль не совпадает';