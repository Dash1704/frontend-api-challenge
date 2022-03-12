class ChitterModel {
  constructor() {
    this.peeps = []
  }

  
  addPeeps(peep){
    this.peeps.push(peep);
  }

  displayPeeps(){

  }

  getPeeps(){
    return this.peeps
  }
}

module.exports = ChitterModel;







// setRepoInfo(repoInfo) {
  //   this.repoInfo = repoInfo;
  // }

  // getRepoInfo() {
  //   return this.repoInfo;
  // }
