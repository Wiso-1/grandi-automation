export async function POST(req) {
  const body = await req.json();

  console.log("Converty webhook:", body);

  return Response.json({
    success: true,
    message: "Webhook received",
  });
}
