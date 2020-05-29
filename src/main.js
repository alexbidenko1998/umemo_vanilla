const config = {
  head: {
    title: 'Umemo Vanilla',
    link: [
      { rel: 'shortcut icon', href: '/assets/favicon.ico', type: 'image/x-icon' }
    ]
  },
};

const render = () => {
  document.title = config.head.title || 'Umemo Vanilla';
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
