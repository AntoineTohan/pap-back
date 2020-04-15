export class CreateDeliveryDto {
  readonly deliveryAddress: string;
  readonly collectionAddress: string;
  readonly weight: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly deliveryName: string;
  readonly producerName: string;
  readonly clientPhoneNumber: string;
  readonly producerPhoneNumber: string;
  readonly isDelivered: boolean;
  readonly isPending: boolean;
}
