export interface DomainEvent {
  eventId: string;
  eventName: string;
  occurredAt: Date;
  aggregateId: string;
  payload: Record<string, unknown>;
}
