let btn1 = $('.j-btn-1');
let btn3 = $('.j-btn-3');
let btn7 = $('.j-btn-7');
let progressBar = $('.progress-bar');
let progressWidth = $('.progress').width();
let progressNow = 0;

const plus1 = progressWidth * 0.01;
const plus3 = progressWidth * 0.03;
const plus7 = progressWidth * 0.07;

btn1.click(function()
{
	progressNow += plus1;
	progressBar.width(progressNow)
}); 

btn3.click(function()
{
  progressNow += plus3;
  progressBar.width(progressNow)
}); 

btn7.click(function()
{
  progressNow += plus7;
  progressBar.width(progressNow)
}); 
 




