import React from 'react';
import termsMarkdown from '../assets/terms-of-service.md';
import ReactMarkdown from 'react-markdown';

const TermsOfService: React.FC = () => {
    const [content, setContent] = React.useState<string>('');
  
    React.useEffect(() => {
      fetch(termsMarkdown)
        .then((response) => response.text())
        .then((text) => setContent(text))
        .catch((error) => console.error('Error loading markdown:', error));
    }, []);
  
    return (
      <div style={{padding: "100px"}}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    );
  }
  
  export default TermsOfService;
