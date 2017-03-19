function handleTerm(event) {
  var input = document.getElementsByName('term')[0].value;
  console.log(input);
  switch(input) {
    case 'about':
      smoothScroll.animateScroll(document.querySelector( '#about' ));
      document.location = './index.html#about';
      break;
    case 'projects':
      smoothScroll.animateScroll(document.querySelector( '#projects' ));
      document.location = './index.html#projects';
      break;
    case 'alt':
      document.location = "./alt.html";
      break;
    case 'altalt':
      document.location = "./altalt.html";
      break;
  }
}

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}
