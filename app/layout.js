 import './styles/index.css';
 

export const metadata = {
  title: "EEFA Architect",
  description: "EEFA Studio Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
    <head> 
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
      <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link> 
    </head>
    <body  >
        {children}
      </body>
    </html>
  );
}
