const config = {
  head: {
    title: 'UMemo Vanilla',
    link: [
      { rel: 'shortcut icon', href: 'assets/favicon.ico', type: 'image/x-icon' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' }
    ]
  },
};

const render = () => {
  document.title = config.head.title;
  (config.head.link || []).forEach((link) => {
    const tag = document.createElement('link');
    Object.keys(link).forEach((key) => {
      tag.setAttribute(key, link[key]);
    });
    document.head.appendChild(tag);
  });

  document.body.appendChild(document.createElement('App'));
};

export default render();
