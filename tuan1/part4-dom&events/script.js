// Chức năng khôi phục giá trị trò chơi
const restoreGame = () => {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

// Thêm sự kiện cho nút "again"
document.querySelector('.again').addEventListener('click', restoreGame);
