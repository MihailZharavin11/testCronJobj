import type { RequestEvent } from "./$types";

export function GET({ url } : RequestEvent)
{

    return new Response("Hello");
}