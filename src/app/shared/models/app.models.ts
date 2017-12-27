export class Vehicle {
    _id: string;
    did: string;
    stockItem: string;
    createdDate: string;
    category: string;
    registration: string;
    regCode: string;
    price: string;
    priceChanges: PriceChange[];
}

export class PriceChange {
    newPrice: number;
    sendNotifications: boolean;
}

export class Client {
    _id: string;
    clientRef: string;
    clientType: string;
    email: string;
    deviceId: string;
    notificationsEnabled: boolean;
    createdOn: string;
    linkedVehicles: LinkedVehicle[];
    notifications: Notification[];
}

export class LinkedVehicle {
    vehicleRegistration: string;
    watching: boolean;
}

export class Notification {
    _id: string;
    autoSend: boolean;
    body: string;
    clientRef: string;
    email: string;
    notifcationId: string;
    priceChange: PriceChange;
    scheduledFor: Date;
    sent: boolean;
    sentOn: Date;
    subject: string;
    type: string;
    vehicleRegistration: string;
}
