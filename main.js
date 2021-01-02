/*by Fernando Zanutto during codecademy javascript course
Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.
*/
// Returns a random DNA base (by codecademy)
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases (by codecademy)
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number, arrDNA) => {
  return {
    specimenNum: number,
    dna: arrDNA,
    mutate(){
      const baseToMutate = Math.floor(Math.random() * 15);
      const dnaBases = ['A', 'T', 'C', 'G'];
      const options = dnaBases.filter(base => base !== this.dna[baseToMutate]);
      this.dna[baseToMutate] = options[Math.floor(Math.random() * 3)];
    },
    compareDNA(pAequor){
      let sameBases = 0;
      for(let i=0; i<15; i++){
        if(this.dna[i] === pAequor.dna[i])
          sameBases++;
      }
      console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${sameBases*100/15}% DNA in common`);
      
    },
    willLikelySurvive(){//P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.
      let baseCorG = 0;
      for(let i=0; i<15; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G')
          baseCorG++;
      }
      return (baseCorG >= 9);
    }
  };
}
/*checking
const objTest1 = pAequorFactory(10, mockUpStrand());
const objTest2 = pAequorFactory(12, mockUpStrand());
console.log(objTest1.dna);
console.log(objTest2.dna);
objTest1.compareDNA(objTest2);
*/
const survivorPAequor = [];//30 instances of pAequor that can survive in their natural environment.
let newAnimal;
for(let i=0; i<30; i++){
  do{
    newAnimal = pAequorFactory(i, mockUpStrand());
  }while(!newAnimal.willLikelySurvive());
  survivorPAequor.push(newAnimal);
}
/*checking
for(let i=0; i<30; i++){
  console.log(survivorPAequor[i].willLikelySurvive());
}
*/
