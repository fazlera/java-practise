/* 
1.First100SerialTicket = 100;
2.second200SerialTicket= 90;
3.restover200SerialTicket=70; 
*/ 

function price(tickectQuantity){
    let first100Ticket   = 100;
    let second200Ticket  = 90;
    let restover200Ticket=70;

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
    else{
        const first100TicketPrice = 100 * first100Ticket;
        const second200TicketPrice= 100 * second200Ticket;
        const restQuantity        = tickectQuantity - 200;
        const restQuantityPrice   = restover200Ticket * restQuantity;
        const restQuantityTotal   = first100TicketPrice + second200TicketPrice + restQuantityPrice;
        return restQuantityTotal;
    }
   
    
}

const totalTicketPrice = price(300);
console.log(totalTicketPrice);