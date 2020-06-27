alert('歡迎來到介紹宮野真守的網頁');

document.write('<h1 align="center">以下都是宮野真守配音的角色!</h1>');
document.write('<h2 align="center">你可以找找看有沒有你喜歡的角色喔~</h2>');

function changePage(hash) {
      $('.page').hide()
      if (hash === '#Mamoru1') {
        $('.Mamoru1-page').show()
      } else if (hash === '#Mamoru2') {
        $('.Mamoru2-page').show()
      } else if (hash === '#Mamoru3') {
        $('.Mamoru3-page').show()
      } else if (hash === '#Mamoru4') {
        $('.Mamoru4-page').show()
       }else if (hash === '#Mamoru5') {
        $('.Mamoru5-page').show()
      } else if (hash === '#Mamoru6') {
        $('.Mamoru6-page').show()
      } else if (hash === '#Mamoru7') {
        $('.Mamoru7-page').show()
      } else if (hash === '#Mamoru8') {
        $('.Mamoru8-page').show()
      } else if (hash === '#Mamoru9') {
        $('.Mamoru9-page').show()
      } else if (hash === '#Mamoru10') {
        $('.Mamoru10-page').show()
      } else if (hash === '#Mamoru11') {
        $('.Mamoru11-page').show()
      } else if (hash === '#Mamoru12') {
        $('.Mamoru12-page').show()
      } else if (hash === '#Mamoru13') {
        $('.Mamoru13-page').show()
      }
    }

changePage(location.hash)

window.addEventListener("hashchange", function() {
  changePage(location.hash)
});