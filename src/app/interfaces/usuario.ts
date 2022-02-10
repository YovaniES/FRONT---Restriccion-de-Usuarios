export interface ListUsuario {
  idssff: string;
  name: string;
  value: any;
  restriction: UserRestriction[];
}

export interface UserRestriction {
  idRestriction: number;
  value: boolean;
}


