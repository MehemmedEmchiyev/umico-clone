export namespace NewDatabaseTypes {
  export interface RequestBody {
    name: string;
    surname: string;
  }

  export interface ResponseBody {
    status: string;
    data: {
      newObj: {
        name: string;
        surname: string;
      };
    };
  }
}