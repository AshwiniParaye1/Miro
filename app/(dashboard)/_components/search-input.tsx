"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { useState, useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";

export function SearchInput() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounceValue(value, 500);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    // Sanitize the debounced value and trim spaces
    const sanitizedValue = debouncedValue[0]
      .trim()
      .replace(/[^a-zA-Z0-9 ]/g, "");
    // Construct the query string with the sanitized value
    let queryString = qs.stringifyUrl(
      {
        url: "/",
        query: sanitizedValue ? { search: sanitizedValue } : {},
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );

    // Trim any leading or trailing spaces after query string
    queryString = queryString.trim();

    // Update the URL with the trimmed and sanitized query string
    router.push(queryString);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}
