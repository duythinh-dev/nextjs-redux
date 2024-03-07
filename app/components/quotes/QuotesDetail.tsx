"use client";
import {
  Quote,
  useGetQuoteByIdQuery,
} from "@/lib/features/quotes/quotesApiSlice";
import { useEffect, useState } from "react";
import styles from "./Quotes.module.css";

export interface StateI {
  data: Quote | undefined;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

export const QuotesDetail = ({ id }: { id: string }) => {
  const { data, isError, isLoading, isSuccess } = useGetQuoteByIdQuery(id);
  const [state, setState] = useState<StateI>({
    data: undefined,
    isError: false,
    isLoading: true,
    isSuccess: false,
  });

  useEffect(() => {
    setState({ data, isError, isLoading, isSuccess });
  }, [data, isError, isLoading, isSuccess]);

  if (state.isError) {
    throw new Error("Something bad happened");
  }

  if (state.isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (state.isSuccess) {
    return (
      <div className={styles.container}>
        <blockquote>
          &ldquo;{state.data?.quote || ""}&rdquo;
          <footer>
            <cite>{state.data?.author || ""}</cite>
          </footer>
        </blockquote>
      </div>
    );
  }

  return null;
};
