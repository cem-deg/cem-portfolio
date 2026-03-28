const Section = ({ children, className = '', id = '' }) => {
  return (
    <section 
      id={id}
      className={`section ${className}`}
      style={{
        padding: '100px 5%',
        maxWidth: '1400px',
        margin: '0 auto',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      {children}
    </section>
  );
};

export default Section;
