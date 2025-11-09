export interface NewDatabaseInput {
  name: string;
  surname: string;
}

export interface NewDatabaseResponse {
  status: string;
  data: {
    newObj: {
      name: string;
      surname: string;
    };
  };
}
