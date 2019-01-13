export class Pricing {
    maintenances: Maintenance[] = [];
    vendorServiceTypeId: number;
    vendorServiceTypeName: string;
}

export class Maintenance {
    maintenanceTypeName: string;
    rates: Rates[] = [];
    vendorMaintenanceTypeId: number;
}

export class Rates {
    flatRate: boolean;
    freeMileage: boolean;
    highRate: string;
    hookupNadMileage: boolean;
    hourly: boolean;
    lowRate: string;
    mediumRate: string;
    vendorServiceRatesId: number;
    vendorSubServiceTypeId: number;
    vendorSubServiceTypeName: string;
}
