const engines = {
  bing: {
    name: 'Bing',
    url: 'https://www.bing.com/search?q='
  },
  google: {
    name: 'Google',
    url: 'https://www.google.com/search?q='
  },
  baidu: {
    name: '百度',
    url: 'https://www.baidu.com/s?wd='
  }
};
let currentEngine = 'bing';

const switchBtns = document.querySelectorAll('.search-engine-switch button');
switchBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    switchBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentEngine = btn.getAttribute('data-engine');
    document.getElementById('search-input').setAttribute('placeholder', `在${engines[currentEngine].name}搜索...`);
    document.getElementById('search-input').blur();
  });
});

const form = document.getElementById('search-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const query = document.getElementById('search-input').value.trim();
  if(query) {
    window.open(engines[currentEngine].url + encodeURIComponent(query), '_blank');
    document.getElementById('search-input').value = '';
    form.classList.add('search-anim');
    setTimeout(() => form.classList.remove('search-anim'), 600);
  }
});

// 动画反馈
form.addEventListener('animationend', () => {
  form.classList.remove('search-anim');
});