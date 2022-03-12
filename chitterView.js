class ChitterView {
  constructor(model) {
    this.model = model;
    //this.api = api;
    //model, api << put these in brackets after constructor
    this.mainContainerEl = document.querySelector('#main-container');

    this.submitButtonEl = document.querySelector('#submit-button');
    this.deleteButtonEl = document.querySelector('#delete-button')
    
    //const peepInputEl = document.querySelector('#peep-input');

    this.submitButtonEl.addEventListener('click', () => {
      this.display();

    this.deleteButtonEl.addEventListener('click', () => {
      this.hidePeep();
    })

      // this.api.getRepoInfo(repoName, repoData => {
      //   console.log(repoData);
      //});
    });
  }

  display() {
    console.log('Clicked successfully')
    let textEl = document.querySelector('#peep-input');
    let d = document.createElement('div');
    d.setAttribute('id', 'peep')
    d.innerText = textEl.value
    this.mainContainerEl.append(d);

  }

  hidePeep(){
    let d = document.getElementById('peep')
    d.remove()
  }
}

// So far, the code only prints the repository data in the console. Add code to the GithubView class so it also calls display() — this method should:

// sets the full_name property of the repo data to the HTML element #repo-name.
// sets the description property of the repo data to the HTML element #repo-description.

module.exports = ChitterView;