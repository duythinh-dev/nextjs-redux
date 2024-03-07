import { QuotesDetail } from "@/app/components/quotes/QuotesDetail";

interface paramsI {
  params: { quotesId: string };
  searchParams: {};
}
export default function QuotesPage({ params }: paramsI) {
  return (
    <>
      <h1>Quotes detail page</h1>
      <QuotesDetail id={params.quotesId} />
    </>
  );
}
