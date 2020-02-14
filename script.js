$('button').click(function () {
   $('html,body').animate({
      scrollTop: $('#startOff').offset().top
   },
      'slow');
});

const quizQuestion1 = [
   {
      question1: 'Which of the following should <span class="highlight">*!~NEVER~!*</span> go in the blue bin?',
      choices: {
         a: 'aluminum cans',
         b: 'milk glass bottles',
         c: 'coffee cups',
         d: 'glass beer bottles',
      }
   }];

const quizQuestion2 = [
   {
      question2: 'Approximately 30% of what is put in the blue bin doesn’t belong there. Are you able to choose the <span class="highlight">recyclable item</span> out of these options?',
      choices: {
         a: 'broken glass bottle',
         b: 'coffee pods',
         c: 'coffee packaging',
         d: 'plastic water bottles (not the caps)',
      }
   }];

const quizQuestion3 = [
   {
      question3: 'Not all packaging is the same. Which item is NOT ACCEPTED in the blue bin?',
      choices: {
         a: 'ice cream container',
         b: 'egg cartons',
         c: 'mail packaging',
         d: 'milk carton',
      }
   }];

const quizQuestion4 = [
   {
      question4: 'Which container belongs in the blue bin <span class="highlight">(when fully rinsed)</span>?',
      choices: {
         a: 'styrofoam',
         b: 'yogurt cups',
         c: 'dirty pizza boxes',
         d: 'black plastic takeaway containers',
      }
   }];
const quizQuestion5 = [
   {
      question5: 'Which of these food packaging <span class="highlight">does *not* belong</span> in the landfill?',
      choices: {
         a: 'frozen food boxes',
         b: 'chip bags',
         c: 'plastic salad packaging',
         d: 'stand-up food pouches',
      }
   }];
const quizQuestion6 = [
   {
      question6: 'Not all paper is created equal! Which <span class="highlight">NON-RECYCLABLE PAPER ITEM</span> continually sneaks into our blue bins?',
      choices: {
         a: 'thermal receipts',
         b: 'paper shopping bags',
         c: 'magazines',
         d: 'books',
      }
   }];
const quizQuestion7 = [
   {
      question7: 'Along with paper materials, not all plastics are recyclable. Canada recycles just 9% of its plastics with the rest dumped in landfill or tossed away as litter.',
      choices: {
         a: 'toothbrushes',
         b: 'plastic bags',
         c: 'plastic coffee cups',
         d: 'shampoo bottles',
      }
   }];
const quizQuestion8 = [
   {
      question8: 'And lastly, which plastic cannot be sorted mechanically at the recycling facility because the optical sorting technology simply <span class="highlight">cannot recognize it?</span>',
      choices: {
         a: 'plastic water bottle caps',
         b: 'lotion bottles',
         c: 'plastic juice bottles',
         d: 'black plastic takeaway containers',
      }
   }];

   quizQuestion1.forEach((currentQuestion) => {
      const question1 = currentQuestion.question1;
      const quizChoice = currentQuestion.choices;
      $('#titleQuestion1').append(`${question1}`);
      $('#aluminumCan').append(`<h3>${quizChoice.a}</h3>`);
      $('#milkBottle').append(`<h3>${quizChoice.b}</h3>`);
      $('#coffeeCup').append(`<h3>${quizChoice.c}</h3>`);
      $('#beerBottles').append(`<h3>${quizChoice.d}</h3>`);
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
      $('#styrofoam').append(`<h3>${choice.a}</h3>`);
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
      $('#titleQuestion8').append(`${question}`);
      $('#bottleCaps').append(`<h3>${choice.a}</h3>`);
      $('#lotionBottle').append(`<h3>${choice.b}</h3>`);
      $('#juice').append(`<h3>${choice.c}</h3>`);
      $('#blackPlastic2').append(`<h3>${choice.d}</h3>`);
   });

let score = 0;

$(function() {

      $("input[name='question1']").click(function(){
         const userAnswer = $("input[name='question1']:checked").val();
         const correctAnswer = 'coffeeCup';

         if (userAnswer === correctAnswer) {
            console.log('correct')
            score++
         } else {
            score
            console.log('not correct');
         }
      });

      $("input[name='question2']").click(function () {
         const userAnswer = $("input[name='question2']:checked").val();
         const correctAnswer = 'waterBottles';

         if (userAnswer === correctAnswer) {
            score++
            console.log('correct');
         } else {
            score
            console.log('not correct');
         }
      });

      $("input[name='question3']").click(function () {
         const userAnswer = $("input[name='question3']:checked").val();
         const correctAnswer = 'iceCream';

         if (userAnswer === correctAnswer) {
            score++
         } else {
            score
         }
      });

      $("input[name='question4']").click(function () {
         const userAnswer = $("input[name='question4']:checked").val();
         const correctAnswer = 'styrofoam';

         if (userAnswer === correctAnswer) {
            score++
         } else {
            score
         }
      });

      $("input[name='question5']").click(function () {
         const userAnswer = $("input[name='question5']:checked").val();
         const correctAnswer = 'saladPackaging';

         if (userAnswer === correctAnswer) {
            score++
         } else {
            score
         }
      });

      $("input[name='question6']").click(function () {
         const userAnswer = $("input[name='question6']:checked").val();
         const correctAnswer = 'receipt';

         if (userAnswer === correctAnswer) {
            score++
         } else {
            score
         }
      });

      $("input[name='question7']").click(function () {
         const userAnswer = $("input[name='question7']:checked").val();
         const correctAnswer = 'toothbrush';

         if (userAnswer === correctAnswer) {
            score++
         } else {
            score
         }
      });

      $("input[name='question8']").click(function () {
         const userAnswer = $("input[name='question8']:checked").val();
         const correctAnswer = 'blackPlastic2';

         if (userAnswer === correctAnswer) {
            score++
         } else {
            score
         }
      });
   });

   $('form').on('submit', function(e) {
      e.preventDefault();
      $('.finalScoreContainer').html(`<h2 class="score"><span class="highlight">You got ${score} out of 8 correct!</span></h2>
      <img src="https://media.giphy.com/media/3o7TKwxYkeW0ZvTqsU/source.gif">`)
      // $('.finalScoreContainer').append('<button id="restartButton">Play Again</button>');
      // $('#restartButton').click(function () {
      //    score = 0;
      // })
   });

