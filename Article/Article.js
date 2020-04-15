/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },

  {
    title: 'This is one of those articles', 
    date: 'August 10, 1987', 
    firstParagraph: `meow meow meow moeow moeow moeow mooeow moow mooow moooo moooooooooooooooooooo Batman Moooooooooo NAN NAN NAN NAN NAN NAAAAAAAAAAAAAAAA  not a number.  Note a number.  Note a num.  num.  num.numnumnumnujmnujm.  Jumanji.  not a number. `,
    
    secondParagraph: `did you know?  did you?  know?  about?  did?  you?  did you?  did mooo?  MOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOeow   moooeow  mooow   moewo  meow`, 

    thirdParagraph: `There was once this time that I went to Canada for my birthday but my friend didn't go the right way.  By that I mean, he didn't do what was asked of him at the border.  So when we got to the guard who asked for our identification, we were asked to pull off to an area full of officers.  So we get there and they have us exit the vehicle.  At first we think, nothing could go wrong.  I mean, we're just a bunch of students on our way to a casino.`
  },

  {
    title: 'more Canada story?', 
    date: 'August 11, 1987', 
    firstParagraph: `shortly after midnight.  We are still at the station.  Interogation:  I should explain, there wer four of us.  John, Jane, Jake and myself.  Those names are dynamic.  So John was driving- and apparently very suspicious.  Jake had a highly terriflying out of context but darkly hilarious card in his wallet which kept us there another hour at least.  And Jane.. well, Jane had very little trust of American medicine and we'd just spent my birthday explaining why it was in her purse crossing the Canadian border. Such a long night.  Happy Birthday.`, 
    secondParagraph: `hold the door.`, 
    thirdParagraph: `Long ago in the far away land of ancient Greece there was a golden age.. but what is the measure of a true hero.. but this story is not some Greek tragedy.  We are the Muses.  Goddesses of the Arts and Proclaimers of Heroes... Back whent he world was new, the planet Earth was down on it's luck, and every where you looked Gigantic rouges called Titans ran amouk.`
  }
];



/* 

Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  -Hint: You will need to use createElement more than once here!

  -Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/
const genesis = (titleText, dateText, para1, para2, para3)=> {

  const article = document.createElement('div'); 
  article.classList.add('article'); 

  const h2Title = document.createElement('h2'); 
  h2Title.classList.add('h2Title'); 
  h2Title.textContent= titleText; 
 
  const dateP = document.createElement('p'); 
  dateP.classList.add('dateP'); 
  dateP.textContent= dateText; 

  const first = document.createElement('p'); 
  first.classList.add('first'); 
  first.textContent= para1; 

  const second = document.createElement('p');
  second.classList.add('second'); 
  second.textContent= para2; 

  const third = document.createElement('p');
  third.classList.add('third'); 
  third.textContent= para3; 



  const buttON = document.createElement('span'); //starting btn
  buttON.classList.add('expandButton');
  buttON.textContent='\u25bc'; //down arrow

article.addEventListener('click',(event)=>{
    buttON.classList.toggle('hide-btn'); 
    buttOFF.classList.toggle('toggle-on'); 
    article.classList.toggle('article-open'); 
 }); 
 

  const buttOFF = document.createElement('span');
  buttOFF.classList.add('expandButton'); //styling
  buttOFF.textContent='\u25b2'; // up arrow

 article.addEventListener('click',(event)=>{
    buttOFF.classList.toggle('hide-btn'); 
    buttON.classList.toggle('toggle-on'); 
    article.classList.toggle('article-close'); 
 }); 


 

//   btn.addEventListener('click',(event)=>{
//     btn.classList.toggle('hide-btn'); 
//     buttON.classList.toggle('toggle-on'); 
//     article.classList.toggle('article-open'); 
//  }); 

  article.appendChild(h2Title);
  article.appendChild(dateP);
  article.appendChild(first); 
  article.appendChild(second);
  article.appendChild(third); 
  article.appendChild(buttOFF); 
  article.appendChild(buttON); 
  

  return article; 
  
}; 
 

const canvas = document.querySelector('.articles'); 


data.forEach((currentValue=>{
  const newGenesis= genesis(currentValue.title, currentValue.date, currentValue.firstParagraph, currentValue.secondParagraph, currentValue.thirdParagraph); 
  const omega = canvas.appendChild(newGenesis); 
  return omega; 

})
); 




// const articles = document.querySelector('.articles');
// function createPanel ( title, date, firstParagraph, secondParagraph, thirdParagraph){

//   const article = document.createElement('div'); 

//   const articleTitle = document.createElement('h2');
//   articleTitle.textContent= (title); 
//   article.appendChild(articleTitle);

//   const articleDate = document.createElement('p');  
//   articleDate.classList.add('date');
//   articleDate.textContent= (date); 
//   article.appendChild(articleDate);

//   const articleTextTop = document.createElement('p'); 
//   articleTextTop.textContent=(firstParagraph); 
//   article.appendChild(articleTextTop); 

//   const articleTextMid = document.createElement('p');
//   articleTextMid.textContent=(secondParagraph);
//   article.appendChild(articleTextMid); 

//   const articleTextBot = document.createElement('p');
//   articleTextBot.textContent=(thirdParagraph); 
//   article.appendChild(articleTextBot); 

//   const articleExpand = document.createElement('span');
//   articleExpand.textContent= ('open');
//   article.appendChild(articleExpand); 
//   articleExpand.classList.add('expandButton');  
//   articleExpand.addEventListener('click', (event=> {
//     articleExpand.classList.toggle('hide-btn');
//     })); 

//   return article; 
// }

// for(let i = 0; i < data.length; i++){
// articles.appendChild(createPanel(data[i].title, data[i].date, data[i].firstParagraph, data[i].secondParagraph, data[i].thirdParagraph)); };