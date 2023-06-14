import ErrorPage from "components/commons/errorPage/errorPage";

export const ErrorPage404 = () => {
  return <ErrorPage statusCode='400' message='Página no encontrada!' />;
};

export default ErrorPage404;
