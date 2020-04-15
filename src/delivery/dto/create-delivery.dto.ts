export class CreateDeliveryDto {
  readonly idDelivery: number;
  readonly address: string;
  readonly weight: string;
  readonly status: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
