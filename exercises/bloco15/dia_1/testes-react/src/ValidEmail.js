import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {email 
      ? <h3 className={verifyEmail(email) ? 'green-text' : 'red-text'}>
          {(verifyEmail(email) ? 'Email Valido' : 'Email Inválido')}
        </h3> 
      : null } 
    </div>
  );
};

export default ValidEmail;