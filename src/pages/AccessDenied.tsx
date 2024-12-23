import { useEffect, useState } from 'react';

export const AccessDenied = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/AccessDenied.html') // Fetch directly from the public folder
      .then((response) => response.text())
      .then((html) => setContent(html))
      .catch((error) => console.error('Error fetching HTML:', error));
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
};
