export class UserModel {
  readonly id!: number;
  readonly name!: string;
  readonly email!: string;
  readonly address!: Address;
  readonly geo!: Geo;
  readonly phone!: number;
  readonly website!: string;
  readonly company!: Company;
}

export class Address {
  readonly street!: string;
  readonly suite!: string;
  readonly city!: string;
  readonly zipcode!: number;
}

export class Geo {
  readonly lat!: number;
  readonly lng!: number;
}
export class Company {
  readonly name!: string;
  readonly catchPhrase!: string;
  readonly bs!: string;
}
