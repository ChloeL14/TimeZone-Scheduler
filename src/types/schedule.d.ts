export interface AvailabilitySlot {
    startTimeUTC: string; // ISO string
    endTimeUTC: string;
}

export interface UserAvailability {
    name: string;
    timezone: string;
    slots: AvailabilitySlot[];
}