export class CreateDeliveryDto {
  readonly collectionAddress: string;
  readonly weight: string;
  readonly deliveryAddress: string;
  readonly clientPhoneNumber: string;
  readonly clientName: string;
  readonly idProducer: string;
  readonly idDeliverer: string;
  readonly isDelivered: { type: boolean, default: false };
  readonly isPending: { type: boolean, default: true };
}
