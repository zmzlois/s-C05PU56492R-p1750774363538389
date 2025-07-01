import { jwtVerify, importJWK, decodeJwt } from 'jose';

export async function auth_check(request: Request) {
  // Force usage of jose to trigger the error
  console.log('Using jose library');
  
  // Simulate JWT verification logic that uses jose
  const token = request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return { valid: false, error: 'No token provided' };
  }
  
  try {
    // Use decodeJwt first to ensure jose is loaded
    const decoded = decodeJwt(token);
    console.log('Decoded token:', decoded);
    
    // Mock JWK for testing
    const jwk = {
      kty: 'RSA',
      n: 'test-key',
      e: 'AQAB'
    };
    
    const publicKey = await importJWK(jwk);
    const { payload } = await jwtVerify(token, publicKey);
    
    return { valid: true, payload };
  } catch (error) {
    return { valid: false, error: (error as Error).message };
  }
}

// Export jose functions directly to force bundling
export { jwtVerify, importJWK, decodeJwt };