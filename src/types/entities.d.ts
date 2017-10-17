declare module Entities {
    export interface PizzaSize {
        inches: number;
        description: string;
    }

    export interface Pizza {
        pizzaId: number;
        name: string;
        ingredients?: PizzaIngredient[];
        size?: PizzaSize;
        image?: string;
        price: number;
    }

    export interface PizzaIngredient {
        pizzaId: number;
        ingredient: string;
    }

    export interface PizzaCatalog {
        pizzaList: Pizza[];
        selectedPizza: Pizza;
        pizzaSizes: PizzaSize[];
    }

    export interface Client {
        name: string;
        address: string; 
    }

    export interface Order {
        orderId: number;
        client: Client;
        isCompleted: boolean;
        orderDetails: OrderDetail[];
    }

    export interface OrderDetail {
        orderDetailId: number;
        orderId: number;
        pizzaId: number;
        quantity: number;
        pizza: Pizza;
        order: Order;
    }
}