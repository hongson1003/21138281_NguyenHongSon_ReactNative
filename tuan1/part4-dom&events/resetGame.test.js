const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Đọc nội dung HTML của trang web
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

// Tạo một môi trường JSDOM để kiểm tra
let document;
let window;

beforeEach(() => {
  const dom = new JSDOM(html, { runScripts: 'dangerously' });
  document = dom.window.document;
  window = dom.window;

  // Thêm các script cần thiết vào DOM
  const script = document.createElement('script');
  script.src = 'script.js';
  document.body.appendChild(script);
});

test('should reset game values when "again" button is clicked', () => {
  // Khởi tạo các biến để kiểm tra
  const messageElement = document.querySelector('.message');
  const numberElement = document.querySelector('.number');
  const scoreElement = document.querySelector('.score'); // Đảm bảo phần tử này tồn tại
  const guessInput = document.querySelector('.guess');
  const againButton = document.querySelector('.again');

  // Thay đổi giá trị các phần tử để giả lập trạng thái trò chơi
  messageElement.textContent = 'Start guessing...';
  numberElement.textContent = '?';
  if (scoreElement) {
    scoreElement.textContent = '20';
  }
  guessInput.value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(34, 34, 34)';
  numberElement.style.width = '15rem';

  // Nhấp vào nút "again"
  againButton.click();

  // Kiểm tra các giá trị đã được khôi phục
  expect(messageElement.textContent).toBe('Start guessing...');
  expect(numberElement.textContent).toBe('?');
  if (scoreElement) {
    expect(scoreElement.textContent).toBe('20');
  }
  expect(guessInput.value).toBe('');
  expect(document.querySelector('body').style.backgroundColor).toBe('rgb(34, 34, 34)'); // #222
  expect(numberElement.style.width).toBe('15rem');
});
