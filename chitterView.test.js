const fs = require('fs');
const ChitterView = require('./chitterView')


describe('ChitterView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    let textEl = document.querySelector('#peep-input');
    textEl.value = 'peep example'

    const submitButtonEl = document.querySelector('#submit-button');
    submitButtonEl.click();
    
    expect(document.querySelector('#peep').innerText).toEqual('peep example');
  })
})