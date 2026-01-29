import React from 'react';
import { Link } from 'react-router-dom';

const Pagina404 = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    },
    errorCode: {
      fontSize: '8rem',
      margin: 0,
      color: '#007bff'
    },
    message: {
      fontSize: '1.5rem',
      marginBottom: '20px'
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: '#007bff',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <p style={styles.message}>Ops! Parece que essa página não existe</p>
      <Link to="/login" style={styles.button}>
        Voltar para o Início
      </Link>
    </div>
  );
};

export default Pagina404;