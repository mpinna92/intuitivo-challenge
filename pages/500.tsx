import ErrorPage from "components/commons/errorPage/errorPage";

export const ErrorPage404 = () => {
  return (
    <ErrorPage
      statusCode='500'
      message='Servidor no enconrtado'
      subMessage='La base de datos para esta prueba solo se encuentra disponible en ambiente local. Por favor descargue el proyecto.'
    />
  );
};

export default ErrorPage404;
