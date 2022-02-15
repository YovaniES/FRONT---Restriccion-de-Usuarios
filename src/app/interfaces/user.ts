export interface ListUser {
  idssff: string;
  name: string;
  value: any;
  restrictions: UserRestriction[];
}

export interface UserRestriction {
  idRestriction: number;
  value: boolean;
}


