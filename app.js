const modal = document.querySelector('.js-modal'); // layer要素に付与したjs-modalクラスを取得し変数に格納
const modalButton = document.querySelector('.js-modal-button'); // button要素に付与したjs-modal-buttonクラスを取得し、変数に格納

// ボタンをクリックしたときのイベントを登録
modalButton.addEventListener('click', () => {
  modal.classList.add('is-open');
});

// ×ボタンクリックでウィンドウを非表示する記述
const modalClose = document.querySelector('.js-close-button');　// xボタンのjs-close-buttonを取得し変数に格納

modalButton.addEventListener('click', () => {
  modal.classList.add('is-open');
});

modalClose.addEventListener('click', () => { // xボタンをクリックしたときのイベントを登録
  modal.classList.remove('is-open');
});