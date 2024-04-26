const container = document.querySelector('.container');
const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const modalContent = document.querySelector('.modal-content');
const modalProject = document.querySelector('.modal-project');

openBtn.addEventListener('click',function(){
  container.classList.add('open');
  modalProject.classList.add('hidden');
  modalContent.classList.remove('hidden');
});

closeBtn.addEventListener('click',function(){
  container.classList.remove('open');
  modalProject.classList.remove('hidden');
  modalContent.classList.add('hidden');

});