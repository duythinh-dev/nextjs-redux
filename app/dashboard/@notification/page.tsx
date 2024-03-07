import Card from "@/app/components/Card";
import Link from "next/link";

export default function NotificationSlots() {
  return (
    <div>
      <Card>
        NotificationSlots
        <Link href="/dashboard/archived">Archived</Link>
      </Card>
    </div>
  );
}
