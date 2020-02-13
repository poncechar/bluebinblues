const quizQuestion1 = [
   {
      question1: 'Which of the following should <span class="highlight">*!~NEVER~!*</span> go in the blue bin?',
      choices: {
         a: 'aluminum cans',
         b: 'milk glass bottles',
         c: 'coffee cups',
         d: 'glass beer bottles',
      },
         correctAnswer: 'c'
   }];

const quizQuestion2 = [
   {
      question2: 'Approximately 30% of what is put in the blue bin doesn’t belong there. Are you able to choose the <span class="highlight">recyclable item</span> out of these options?',
      choices: {
         a: 'broken glass bottle',
         b: 'coffee pods',
         c: 'coffee packaging',
         d: 'plastic water bottles (not the caps)',
      },
         correctAnswer: 'd'
   }];

const quizQuestion3 = [
   {
      question3: 'Not all packaging is the same. Which item is NOT ACCEPTED in the blue bin?',
      choices: {
         a: 'ice cream container',
         b: 'egg cartons',
         c: 'mail packaging',
         d: 'milk carton',
      },
         correctAnswer: 'a'
   }];

const quizQuestion4 = [
   {
      question4: 'Take-away food containers can easily contaminate the recycling stream if not carefully disposed of. Contrary to popular belief, unfortunately not all are recyclable 🥺',
      choices: {
         a: 'styrofoam',
         b: 'yogurt cups',
         c: 'dirty pizza boxes',
         d: 'black plastic',
      },
         correctAnswer: 'a'
   }];
const quizQuestion5 = [
   {
      question5: 'It can be tricky figuring out what kinds of food packaging are actually recyclable when grocery shopping.',
      choices: {
         a: 'frozen food boxes',
         b: 'chip bags',
         c: 'plastic salad packaging',
         d: 'stand-up food pouches',
      },
         correctAnswer: 'c'
   }];
const quizQuestion6 = [
   {
      question6: 'Not all paper is created equal! Which <span class="highlight">NON-RECYCLABLE PAPER ITEM</span> continually sneaks into our blue bins?',
      choices: {
         a: 'thermal receipts',
         b: 'paper shopping bags',
         c: 'magazines',
         d: 'books',
      },
         correctAnswer: 'a'
   }];
const quizQuestion7 = [
   {
      question7: 'Along with paper materials, not all plastics are recyclable. Canada recycles just 9% of its plastics with the rest dumped in landfill and incinerators or tossed away as litter.',
      choices: {
         a: 'toothbrushes',
         b: 'plastic bags',
         c: 'plastic coffee cups',
         d: 'shampoo bottles',
      },
         correctAnswer: 'a'
   }];
const quizQuestion8 = [
   {
      question8: 'And lastly, which plastic cannot be sorted mechanically at the recycling facility because the optical sorting technology simply <span class="highlight">cannot recognize it?</span>',
      choices: {
         a: 'plastic water bottle caps',
         b: 'lotion bottles',
         c: 'plastic juice bottles',
         d: 'black plastic takeaway containers',
      },
         correctAnswer: 'd'
   }];

   quizQuestion1.forEach((currentQuestion) => {
      const question1 = currentQuestion.question1;
      const quizChoice = currentQuestion.choices;
      const correctAnswer = currentQuestion.choices.c;
      $('#titleQuestion1').append(`${question1}`);
      $('#aluminumCan').append(`<h3>${quizChoice.a}</h3>`);
      $('#milkBottle').append(`<h3>${quizChoice.b}</h3>`);
      $('#coffeeCup').append(`<h3>${quizChoice.c}</h3>`);
      $('#beerBottles').append(`<h3>${quizChoice.d}</h3>`);

      $(`input[type='radio']`).click(function() {
         const checkedAnswer = $(`input[id='coffeeCupOption']:checked`);
         if(checkedAnswer === correctAnswer) {
            console.log('hi');
         } else {
            console.log('wut')
         }
      })

   });

      quizQuestion2.forEach((currentQuestion) => {
      const question = currentQuestion.question2;
      const choice = currentQuestion.choices;
         $('#titleQuestion2').append(`${question}`);
         $('#brokenGlass').append(`<h3>${choice.a}</h3>`);
         $('#coffeePods').append(`<h3>${choice.b}</h3>`);
         $('#coffeeBags').append(`<h3>${choice.c}</h3>`);
         $('#waterBottles').append(`<h3>${choice.d}</h3>`);
   });

   quizQuestion3.forEach((currentQuestion) => {
      const question = currentQuestion.question3;
      const choice = currentQuestion.choices;
      $('#titleQuestion3').append(`${question}`);
      $('#iceCream').append(`<h3>${choice.a}</h3>`);
      $('#eggCarton').append(`<h3>${choice.b}</h3>`);
      $('#package').append(`<h3>${choice.c}</h3>`);
      $('#milk').append(`<h3>${choice.d}</h3>`);
   });

   quizQuestion4.forEach((currentQuestion) => {
      const question = currentQuestion.question4;
      const choice = currentQuestion.choices;
      $('#titleQuestion4').append(`${question}`);
      $('#styrofoamContainer').append(`<h3>${choice.a}</h3>`);
      $('#yogurtCup').append(`<h3>${choice.b}</h3>`);
      $('#pizzaBox').append(`<h3>${choice.c}</h3>`);
      $('#blackPlastic1').append(`<h3>${choice.d}</h3>`);
   });

   quizQuestion5.forEach((currentQuestion) => {
      const question = currentQuestion.question5;
      const choice = currentQuestion.choices;
      $('#titleQuestion5').append(`${question}`);
      $('#frozenFoodBoxes').append(`<h3>${choice.a}</h3>`);
      $('#chipBag').append(`<h3>${choice.b}</h3>`);
      $('#saladPackaging').append(`<h3>${choice.c}</h3>`);
      $('#standUp').append(`<h3>${choice.d}</h3>`);
   });

   quizQuestion6.forEach((currentQuestion) => {
      const question = currentQuestion.question6;
      const choice = currentQuestion.choices;
      $('#titleQuestion6').append(`${question}`);
      $('#receipt').append(`<h3>${choice.a}</h3>`);
      $('#shoppingBag').append(`<h3>${choice.b}</h3>`);
      $('#magazines').append(`<h3>${choice.c}</h3>`);
      $('#books').append(`<h3>${choice.d}</h3>`);
   });

   quizQuestion7.forEach((currentQuestion) => {
      const question = currentQuestion.question7;
      const choice = currentQuestion.choices;
      $('#titleQuestion7').append(`${question}`);
      $('#toothbrush').append(`<h3>${choice.a}</h3>`);
      $('#plasticBags').append(`<h3>${choice.b}</h3>`);
      $('#icedCoffee').append(`<h3>${choice.c}</h3>`);
      $('#shampoo').append(`<h3>${choice.d}</h3>`);
   });


   quizQuestion8.forEach((currentQuestion) => {
      const question = currentQuestion.question8;
      const choice = currentQuestion.choices;
      const correctAnswer = currentQuestion.choices.d;
      $('#titleQuestion8').append(`${question}`);
      $('#bottleCaps').append(`<h3>${choice.a}</h3>`);
      $('#lotionBottle').append(`<h3>${choice.b}</h3>`);
      $('#juice').append(`<h3>${choice.c}</h3>`);
      $('#blackPlastic2').append(`<h3>${choice.d}</h3>`);
   });