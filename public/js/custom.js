const editor = grapesjs.init({
  container: "#editor",
  fromElement: true,
  height: "300px",
  width: "auto",
  storageManager: false,
  blockManager: {
    appendTo: "#blocks",
    blocks: [
      {
        id: "section",
        label: "<b>Section</b>",
        attributes: { class: "gjs-block-section" },
        content: `<section>
                            <h1>This is a simple title</h1>
                            <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
                        </section>`,
      },
      {
        id: "text",
        label: "Text",
        content: '<div data-gjs-type="text">Insert your text here</div>',
      },
      {
        id: "image",
        label: "Image",
        content: '<img src="http://placehold.it/100x100" />',
      },
    ],
  },
});
