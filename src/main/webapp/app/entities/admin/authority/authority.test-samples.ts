import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'a6efb2a9-2259-4d4e-bbf8-e711159a7819',
};

export const sampleWithPartialData: IAuthority = {
  name: '7a724361-ce08-4c82-bf23-173eca60ba7e',
};

export const sampleWithFullData: IAuthority = {
  name: '1a567bce-4c2c-4008-8fad-232b9f79d173',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
