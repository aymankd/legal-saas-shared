import { getAuthorizationsOfResource } from '../src/client/helpers';

describe('getAuthorizationsOfResource', () => {
  it('should return authorizations for FACTURE resource', () => {
    const result = getAuthorizationsOfResource('FACTURE');
    expect(result).toEqual(['FACTURE_CREATE', 'FACTURE_READ', 'FACTURE_UPDATE']);
  });

  it('should return authorizations for AVOIR resource', () => {
    const result = getAuthorizationsOfResource('AVOIR');
    expect(result).toEqual(['AVOIR_IMPORT', 'AVOIR_EXPORT']);
  });
});
