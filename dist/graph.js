var cy = window.cy = cytoscape({
  container: document.getElementById('cy'),

  autounselectify: true,
  boxSelectionEnabled: false,

  style: [
    {
      css: {
        'content': 'data(id)',
        'text-valign': 'center',
        'text-halign': 'center'
      },
      selector: 'node',
    },
    {
      css: {
        'padding-top': '10px',
        'padding-left': '10px',
        'padding-bottom': '10px',
        'padding-right': '10px',
        'text-valign': 'top',
        'text-halign': 'center',
        'background-color': '#bbb'
      },
      selector: '$node > node',
    },
    {
      css: {
        'target-arrow-shape': 'triangle'
      },
      selector: 'edge',
    },
    {
      css: {
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      },
      selector: ':selected',
    }
  ],

  elements: {
    nodes: [
      { data: { id: 'a', parent: 'b' }, position: { x: 215, y: 85 } },
      { data: { id: 'b' } },
      { data: { id: 'c', parent: 'b' }, position: { x: 300, y: 85 } },
      { data: { id: 'd' }, position: { x: 215, y: 175 } },
      { data: { id: 'e' } },
      { data: { id: 'f', parent: 'e' }, position: { x: 300, y: 175 } }
    ],
    edges: [
      { data: { id: 'ad', source: 'a', target: 'd' } },
      { data: { id: 'eb', source: 'e', target: 'b' } }

    ]
  },

  layout: {
    name: 'preset',
    padding: 5
  }
});
