document.addEventListener('DOMContentLoaded', () =>{

    // card option
    
    const cardArray=[
        {
        name:'fries',
        img: 'images/fries.png'
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    
    {
        name:'ice-cream',
        img: 'images/ice-cream.png'
    },
    
    {
        name:'pizza',
        img: 'images/pizza.png'
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png'
    },
    
    {
        name:'hotdog',
        img: 'images/hotdog.png'
    },
    
    
    
    
    
    {
        name:'fries',
        img: 'images/fries.png'
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    
    {
        name:'ice-cream',
        img: 'images/ice-cream.png'
    },
    
    {
        name:'pizza',
        img: 'images/pizza.png'
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png'
    },
    
    {
        name:'hotdog',
        img: 'images/hotdog.png'
    },
    
    
     ]; 
    
    cardArray.sort(()=>0.5 - Math.random())
    
  

    console.log(cardArray);
    
    const grid=document.querySelector('.grid')
    const resultsDisplay=document.querySelector('#results')
    let cardsChosen = []
    let cardsChosenId=[]
    let cardsChosenIds= []
    let cardsWon= []


    function createBoard(){
    
        for( let i= 0; i < cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    
    }
    
     function flipCard(){
    
        let cardId = this.getAttribute('data-id')
        // console.log(cards[cardId]);
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push( cardId)
        this.setAttribute('src', cardArray[cardId].img)
          if(cardsChosen.length === 2){

            setTimeout(checkForMatch, 500)
          }  
console.log(cardsChosenIds)
    
     }

function checkForMatch (){
    const cards= document.querySelectorAll('img')
        const optionOneId= cardsChosenId[0]  
        const optionTwoId= cardsChosenId[1]


        if(optionOneId == optionTwoId){
                   
                    cards[optionOneId].setAttribute("src","images/blank.png");
                    cards[optionTwoId].setAttribute("src","images/blank.png");
                    
                    alert('you have clicked same image!')
                    
        }
        else if(cardsChosen[0]=== cardsChosen[1]){
            alert('you have found a match!')
                    cards[optionOneId].setAttribute("src","images/white.png");
                    cards[optionTwoId].setAttribute("src","images/white.png");
                    cards[optionOneId].removeEventListener('click', flipCard);
                    cards[optionTwoId].removeEventListener('click', flipCard);

                    cardsWon.push(cardsChosen)
    }

    else{
        cards[optionOneId].setAttribute("src","images/blank.png"); 
        cards[optionTwoId].setAttribute("src","images/blank.png"); 
        alert('sorry try again!')
    }

    cardsChosen =[]
    cardsChosenId= []
    resultsDisplay.textContent= cardsWon.length

    if(cardsWon.length === cardArray.length/2 ){

    resultsDisplay.textContent = 'Congratulation you have won 😍😍😋😋🥰🥰😘😘😍 ';
    }
console.log(cardsChosen);
console.log(cardsWon);

}
     createBoard()
  
    })