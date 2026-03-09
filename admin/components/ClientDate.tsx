'use client';

import { useEffect, useState } from 'react';

interface ClientDateProps {
  dateString: string | null | undefined;
  format?: 'date' | 'datetime';
}

export function ClientDate({ dateString, format = 'date' }: ClientDateProps) {
  const [formatted, setFormatted] = useState('');

  useEffect(() => {
    // This effect runs only on the client, after the initial render,
    // which prevents a hydration mismatch.
    if (dateString) {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        setFormatted('Invalid Date');
        return;
      }
      
      if (format === 'datetime') {
        // Using a consistent, non-locale-specific format
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        setFormatted(`${year}-${month}-${day} ${hours}:${minutes}`);
      } else {
        // Just the date part, in a consistent YYYY-MM-DD format
        setFormatted(date.toISOString().split('T')[0]);
      }
    } else {
      setFormatted('N/A');
    }
  }, [dateString, format]);

  // Return empty string on server and initial client render
  // to prevent mismatch. The actual value is populated via useEffect.
  return <>{formatted}</>;
}
