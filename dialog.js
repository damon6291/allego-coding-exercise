let $dialog;
let $dialogContent;
let $dialogClose;
let $dialogProcess;
let $spinAnimation;
let $dialogResult;

function handleDialogProcess(first, second, third) {
  toggle(first);
  toggle(second);
  async function waitForContent() {
    const response = await loadContent();
    third.append(response);
    toggle(second);
    toggle(third);
  }
  waitForContent();
}

function reset(display, remove) {
  show(display);
  hide(remove);
  remove.empty();
}

function loadContent() {
  function calculateTotal() {
    const total = Number('3');
    return total;
  }
  let content = '<div><span>';
  const loaded = 3;
  const total = calculateTotal();
  for (let i = 0; i < loaded; i++) {
    content += '<h2>Test ' + i + '</h2>';
  }
  const results =
    loaded == total ? '<h3>Loaded all items.</h3>' : '<h3>Failed to load all items.</h3>';
  content += results + '</span></div>';

  // return content;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(content);
    }, 2000);
  });
}

//initialization
$(function main() {
  $dialog = $('.dialog');
  $dialogContent = $('.dialog-content');
  $dialogProcess = $('.dialog-process');
  $dialogClose = $('.dialog-close');
  $dialogResult = $('.dialog-result');
  $spinAnimation = $('.spin-animation');

  //closing dialog with button
  $dialogClose.click(() => {
    hide($dialog);
    reset($dialogProcess, $dialogResult);
  });
  //clicking process button
  $dialogProcess.click(() => handleDialogProcess($dialogProcess, $spinAnimation, $dialogResult));
});
