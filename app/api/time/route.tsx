export const dynamic = "force-dynamic"; // Chặn cache lưu lại giá trị reponse - giá trị mặc định :"auto"

export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}
