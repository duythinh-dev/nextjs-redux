import ClientComponent from "@/app/components/Rendering/ClientComponent";
import ServerComponent from "@/app/components/Rendering/ServerComponent";

// Vấn đề là giờ có thể chúng ta cần import ServerComponent vào trong clientComponent thì ta làm như sau
export default function IndexPage() {
  return (
    <>
      <ClientComponent>
        <ServerComponent></ServerComponent>
      </ClientComponent>
    </>
  );
}
