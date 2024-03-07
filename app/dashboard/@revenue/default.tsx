import Card from "@/app/components/Card";
import Link from "next/link";

export default function DefaultRevenueSlots() {
  return (
    <Card>
      RevenueSlots
      <Link href="/dashboard/revenueChild">revenueChild</Link>
    </Card>
  );
}
