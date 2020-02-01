// 
// 
// Switch ... case
// 
// Syntax:
// switch (expression){
// case value1:
// 		//do st;
// 		break;
// case value2: 
// 		//do st;
// 		break;
// ...
// 
// default:
// 		//do st;
// 		break;
// }
// 
// bronze, silver, gold, diamond
// discount: 
// bronze: 2%
// silver: 5%
// gold: 8%
// diamond: 10%

var memberCard = {
	tier: 'silver'
};

function getTotal(price, card){
	var discountRate;
	switch (card.tier){
		case 'bronze':
			discountRate = 0.02;
			break;
		case 'silver':
			discountRate = 0.05;
			break;
		case 'gold':
			discountRate = 0.08;
			break;
		case 'diamond':
			discountRate = 0.1;
		default:
			break;
	}
	return price*(1-discountRate);
}

console.log(getTotal(500000, memberCard));