export const formName = 'test-form';
export const field = {
  name: 'f_name',
  rules: 'required',
  feedbackId: 'name-feedback',
};

document.body.innerHTML =
  `<form name="${formName}">` +
    `<div>` +
      `<input name="${field.name}" data-rules="${field.rules}" />` +
      `<span id="${field.feedbackId}" data-f_name-feedback></span>` +
    `</div>` +
    `<button></button>` +
  `</form>`;
