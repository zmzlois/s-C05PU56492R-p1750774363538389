import { auth_check, jwtVerify, decodeJwt } from "@org/generic";

export default async (request: Request, context: any) => {
  // Direct usage of jose to ensure it gets bundled
  console.log("Jose decode function:", decodeJwt);
  console.log("Jose verify function:", jwtVerify);

  // This will fail because edge functions can't load npm modules with jose
  const authResult = await auth_check(request);

  if (!authResult.valid) {
    return new Response("Unauthorized", { status: 401 });
  }

  return new Response("Hello from edge function!");
};
