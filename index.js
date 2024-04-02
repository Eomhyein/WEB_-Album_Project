function openclose() {
  $('#postingbox').toggle();
}
function makeCard() {
  let image = $('#image').val();
  let title = $('#title').val();
  let content = $('#content').val();
  let date = $('#date').val();

  let temp_html = `
  <div class="col">
  <div class="card h-100">
    <img src="${image}" class="card-img-top" alt="광화문 이미지">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${content}</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">${date}</small>
    </div>
  </div>
</div>`;
  $('#card').append(temp_html)
}