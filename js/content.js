var tagNames = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

var tagSelector = tagNames.join();

var $elements = document.querySelectorAll(tagSelector);

for (var i = 0; i < $elements.length; i++) {
  var $element = $elements[i];

  var id = $element.id;

  if (!id) {
    // Check if heading has any nested elements with id
    var $innerElement = $element.querySelector('[id]');
    if ($innerElement) {
      id = $innerElement.id;
    }
  }

  if (!id) {
    continue;
  }

  var href = '#' + id;

  // Check if anchor is already present (not necessarily added py this plugin)
  var $existingAnchor = $element.querySelector('[href]');
  if ($existingAnchor) {
    continue;
  }

  var $anchor = createAnchor(href);

  $element.appendChild($anchor);
}

function createAnchor(href) {
  var $link = document.createElement('a');
  $link.className = 'anchor-headings-chrome-ext-anchor';
  $link.href = href;
  $link.appendChild(document.createTextNode('#'));
  return $link;
}
