/* 
1.First100SerialTicket = 100;
2.second200SerialTicket= 90;
3.restover200SerialTicket=70; 
*/ 

function price(tickectQuantity){
    let first100Ticket     = 100;
    let second200Ticket    = 90;
    let restover200Ticket  =70;
    let lastTiceketRate    = 50;
    let lastFinalTicketRate = 20;

    if(tickectQuantity <= 100 ){
       const first100TicketPrice = first100Ticket * tickectQuantity;
       return first100TicketPrice;
    }
    else if(tickectQuantity <= 200){
        const first100TicketPrice = 100 * first100Ticket;
        const seondQuantity = tickectQuantity - 100;
        const second200TicketPrice = seondQuantity * second200Ticket;
        const secondTicketQuantity = first100TicketPrice + second200TicketPrice;
        return secondTicketQuantity;
    }
    else if (tickectQuantity <= 300 ){
        const first100TicketPrice = 100 * first100Ticket;
        const second200TicketPrice= 100 * second200Ticket;
        const restQuantity        = tickectQuantity - 200;
        const restQuantityPrice   = restover200Ticket * restQuantity;
        const restQuantityTotal   = first100TicketPrice + second200TicketPrice + restQuantityPrice;
        return restQuantityTotal;
    }
    else if(tickectQuantity <= 400){
        const first100TicketPrice  = 100 * first100Ticket;
        const second200TicketPrice = 100 * second200Ticket;
        const third300TicketPrice  = 100 * restover200Ticket;
        const lastTicketQuantity   = tickectQuantity - 300;
        const lastQuantityPrice    = lastTicketQuantity * lastTiceketRate;
        const lastTicketQuantyTotal= first100TicketPrice + second200TicketPrice +third300TicketPrice + lastQuantityPrice;
        return lastTicketQuantyTotal;
    }
    else{
        
        const first100TicketPrice  = 100 * first100Ticket;
        const second200TicketPrice = 100 * second200Ticket;
        const third300TicketPrice  = 100 * restover200Ticket;
        const fourth400TicketPrice = 100 * lastTiceketRate;
        const fourth400TicketQuantity = tickectQuantity - 400;
        const lastFinalTicketPrice = fourth400TicketQuantity * lastFinalTicketRate;

        const lastFinalTicketQuantyTotal = first100TicketPrice + second200TicketPrice + third300TicketPrice + fourth400TicketPrice + lastFinalTicketPrice;

        return lastFinalTicketQuantyTotal;
    }
   
    
}

const totalTicketPrice = price(420);
console.log(totalTicketPrice);