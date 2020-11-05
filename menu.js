let $dropdownContent;
let $dropdownEllipsis;
let $dropdownMenu3;
let DNONE = 'd-none';
let ELLIPSIS = 'fa-ellipsis-v';

//toggle display
function toggle(content) {
  if (content.hasClass(DNONE)) {
    show(content);
  } else {
    hide(content);
  }
}

function show(content) {
  content.removeClass(DNONE);
}

function hide(content) {
  content.addClass(DNONE);
}

//closing dropdown when clicked outside anywhere except the ellipsis btn
$(window).click(function (event) {
  if (!$(event.target).hasClass(ELLIPSIS)) {
    hide($dropdownContent);
  }
});

//initialization
$(function main() {
  $dropdownContent = $('.dropdown-content');
  $dropdownEllipsis = $('.fa-ellipsis-v');
  $dropdownMenu3 = $('.dropdown-menu3');

  //open dropdown
  $dropdownEllipsis.click(() => toggle($dropdownContent));
  //open dialog
  $dropdownMenu3.click(() => show($dialog));
});
