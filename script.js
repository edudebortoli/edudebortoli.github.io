function loadHtml(page) {
  fetch(`pages/${page}.html`)
    .then((e) => e.text())
    .then((text) => {
      const doc = window.document.getElementById("content");
      doc.innerHTML = text;
    });
}
