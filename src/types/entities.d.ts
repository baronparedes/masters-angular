declare module Entities {
    export class PizzaSize {
        public inches: number;
        public description: string;
    }

    export class Pizza {
        public pizzaId: number;
        public name: string;
        public ingredients?: PizzaIngredient[];
        public size?: PizzaSize;
        public image?: string;
        public price: number;
    }

    export class PizzaIngredient {
        public pizzaId: number;
        public ingredient: string;
    }

    export class PizzaCatalog {
        public pizzaList: Pizza[];
        public selectedPizza: Pizza;
        public pizzaSizes: PizzaSize[];
    }

    export class Client {
        public clientName: string;
        public clientAddress: string; 
    }

    export class Order {
        public orderId: number;
        public client: Client;
        public isCompleted: boolean;
        public orderDetails: OrderDetail[];
    }

    export class OrderDetail {
        public orderDetailId: number;
        public orderId: number;
        public pizzaId: number;
        public quantity: number;
        public pizza: Pizza;
        public order: Order;
    }
}