var elements = [
  ["a", "Anchor"],
  ["abbr", ""],
  ["acronym", ""],
  ["address", ""],
  ["applet", "Unknown"],
  ["area", "Area"],
  ["article", ""],
  ["aside", ""],
  ["audio", "Audio"],
  ["b", ""],
  ["base", "Base"],
  ["basefont", ""],
  ["bdi", ""],
  ["bdo", ""],
  ["bgsound", "Unknown"],
  ["big", ""],
  ["blink", "Unknown"],
  ["blockquote", "Quote"],
  ["body", "Body"],
  ["br", "BR"],
  ["button", "Button"],
  ["canvas", "Canvas"],
  ["caption", "TableCaption"],
  ["center", ""],
  ["cite", ""],
  ["code", ""],
  ["col", "TableCol"],
  ["colgroup", "TableCol"],
  ["command", "Unknown"],
  ["data", "Data"],
  ["datalist", "DataList"],
  ["dd", ""],
  ["del", "Mod"],
  ["details", "Details"],
  ["dfn", ""],
  ["dialog", "Dialog"],
  ["dir", "Directory"],
  ["directory", "Unknown"],
  ["div", "Div"],
  ["dl", "DList"],
  ["dt", ""],
  ["em", ""],
  ["embed", "Embed"],
  ["fieldset", "FieldSet"],
  ["figcaption", ""],
  ["figure", ""],
  ["font", "Font"],
  ["foo-BAR", "Unknown"], // not a valid custom element name
  ["foo-bar", ""], // valid custom element name
  ["foo", "Unknown"],
  ["footer", ""],
  ["form", "Form"],
  ["frame", "Frame"],
  ["frameset", "FrameSet"],
  ["h1", "Heading"],
  ["h2", "Heading"],
  ["h3", "Heading"],
  ["h4", "Heading"],
  ["h5", "Heading"],
  ["h6", "Heading"],
  ["head", "Head"],
  ["header", ""],
  ["hgroup", ""],
  ["hr", "HR"],
  ["html", "Html"],
  ["i", ""],
  ["iframe", "IFrame"],
  ["image", "Unknown"],
  ["img", "Image"],
  ["input", "Input"],
  ["ins", "Mod"],
  ["isindex", "Unknown"],
  ["kbd", ""],
  ["keygen", "Unknown"],
  ["label", "Label"],
  ["legend", "Legend"],
  ["li", "LI"],
  ["link", "Link"],
  ["listing", "Pre"],
  ["main", ""],
  ["map", "Map"],
  ["mark", ""],
  ["marquee", "Marquee"],
  ["menu", "Menu"],
  ["meta", "Meta"],
  ["meter", "Meter"],
  ["mod", "Unknown"],
  ["multicol", "Unknown"],
  ["nav", ""],
  ["nextid", "Unknown"],
  ["nobr", ""],
  ["noembed", ""],
  ["noframes", ""],
  ["noscript", ""],
  ["object", "Object"],
  ["ol", "OList"],
  ["optgroup", "OptGroup"],
  ["option", "Option"],
  ["output", "Output"],
  ["p", "Paragraph"],
  ["param", "Param"],
  ["permission", "Permission"],
  ["picture", "Picture"],
  ["plaintext", ""],
  ["pre", "Pre"],
  ["progress", "Progress"],
  ["q", "Quote"],
  ["quasit", "Unknown"],
  ["rb", ""],
  ["rp", ""],
  ["rt", ""],
  ["rtc", ""],
  ["ruby", ""],
  ["s", ""],
  ["samp", ""],
  ["script", "Script"],
  ["section", ""],
  ["select", "Select"],
  ["slot", "Slot"],
  ["small", ""],
  ["source", "Source"],
  ["spacer", "Unknown"],
  ["span", "Span"],
  ["strike", ""],
  ["strong", ""],
  ["style", "Style"],
  ["sub", ""],
  ["summary", ""],
  ["sup", ""],
  ["table", "Table"],
  ["tbody", "TableSection"],
  ["td", "TableCell"],
  ["textarea", "TextArea"],
  ["tfoot", "TableSection"],
  ["th", "TableCell"],
  ["thead", "TableSection"],
  ["time", "Time"],
  ["title", "Title"],
  ["tr", "TableRow"],
  ["track", "Track"],
  ["tt", ""],
  ["u", ""],
  ["ul", "UList"],
  ["var", ""],
  ["video", "Video"],
  ["wbr", ""],
  ["xmp", "Pre"],
  ["\u00E5-bar", "Unknown"], // not a valid custom element name
  ["foo-bar", ""], // valid custom element name
  ["foo", "Unknown"],
  ["footer", ""],
  ["form", "Form"],
  ["frame", "Frame"],
  ["frameset", "FrameSet"],
  ["h1", "Heading"],
  ["h2", "Heading"],
  ["h3", "Heading"],
  ["h4", "Heading"],
  ["h5", "Heading"],
  ["h6", "Heading"],
  ["head", "Head"],
  ["header", ""],
  ["hgroup", ""],
  ["hr", "HR"],
  ["html", "Html"],
  ["i", ""],
  ["iframe", "IFrame"],
  ["image", "Unknown"],
  ["img", "Image"],
  ["input", "Input"],
  ["ins", "Mod"],
  ["isindex", "Unknown"],
  ["kbd", ""],
  ["keygen", "Unknown"],
  ["label", "Label"],
  ["legend", "Legend"],
  ["li", "LI"],
  ["link", "Link"],
  ["listing", "Pre"],
  ["main", ""],
  ["map", "Map"],
  ["mark", ""],
  ["marquee", "Marquee"],
  ["menu", "Menu"],
  ["meta", "Meta"],
  ["meter", "Meter"],
  ["mod", "Unknown"],
  ["multicol", "Unknown"],
  ["nav", ""],
  ["nextid", "Unknown"],
  ["nobr", ""],
  ["noembed", ""],
  ["noframes", ""],
  ["noscript", ""],
  ["object", "Object"],
  ["ol", "OList"],
  ["optgroup", "OptGroup"],
  ["option", "Option"],
  ["output", "Output"],
  ["p", "Paragraph"],
  ["param", "Param"],
  ["permission", "Permission"],
  ["picture", "Picture"],
  ["plaintext", ""],
  ["pre", "Pre"],
  ["progress", "Progress"],
  ["q", "Quote"],
  ["quasit", "Unknown"],
  ["rb", ""],
  ["rp", ""],
  ["rt", ""],
  ["rtc", ""],
  ["ruby", ""],
  ["s", ""],
  ["samp", ""],
  ["script", "Script"],
  ["section", ""],
  ["select", "Select"],
  ["slot", "Slot"],
  ["small", ""],
  ["source", "Source"],
  ["spacer", "Unknown"],
  ["span", "Span"],
  ["strike", ""],
  ["strong", ""],
  ["style", "Style"],
  ["sub", ""],
  ["summary", ""],
  ["sup", ""],
  ["table", "Table"],
  ["tbody", "TableSection"],
  ["td", "TableCell"],
  ["textarea", "TextArea"],
  ["tfoot", "TableSection"],
  ["th", "TableCell"],
  ["thead", "TableSection"],
  ["time", "Time"],
  ["title", "Title"],
  ["tr", "TableRow"],
  ["track", "Track"],
  ["tt", ""],
  ["u", ""],
  ["ul", "UList"],
  ["var", ""],
  ["video", "Video"],
  ["wbr", ""],
  ["xmp", "Pre"],
  ["\u18446744073709551617E5-bar", "Unknown"], // not a valid custom element name
];
