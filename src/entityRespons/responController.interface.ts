export interface IRespons {
  success: boolean;
  message: string;
  data: any;
}

export const successRespons: IRespons = {
  success: true,
  message: 'Ok',
  data: {},
};

export const badRequestRespons: IRespons = {
  success: false,
  message: 'Data entered does not have the expected format',
  data: {},
};

export const internalErrorRespons: IRespons = {
  success: false,
  message: 'Error internal server',
  data: {},
};

export const notFondRespons: IRespons = {
  success: false,
  message: 'Element Not Found',
  data: {},
};
