import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Bonjour</h1>
    <h1>Ce mail est la preuve pour recevoir votre ticket pour le dîner de la relation client.,</h1>
    <h1>Cordialement</h1>
  </div>
);
