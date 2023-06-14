import { ROUTES } from "config";
import Head from "next/head";

import { Button } from "../button";
import { MainLayout } from "layouts/mainLayout";

import {
  ErrorContainer,
  ErrorNumberAndMessage,
  Number,
  MessageButton,
  Message,
  SubMessage,
  MessageLine,
  ButtonWrapper,
} from "./errorPage.styles";

interface ErrorPageProps {
  statusCode: string | number;
  message: string;
  subMessage?: string;
  textButton?: string;
  linkButton?: string;
}

export const ErrorPage = ({
  statusCode,
  message,
  subMessage,
  textButton = "Volver a la home",
  linkButton = `${ROUTES.ROOT}`,
}: ErrorPageProps) => {
  return (
    <MainLayout full>
      <Head>
        <title>😔 Algo salió mal </title>
      </Head>
      <ErrorContainer>
        <ErrorNumberAndMessage>
          <Number>{statusCode}</Number>
          <MessageButton>
            <Message>
              {message}
              <MessageLine />
            </Message>

            {subMessage && <SubMessage>{subMessage}</SubMessage>}
            <ButtonWrapper>
              <Button text={textButton} link={linkButton} center />
            </ButtonWrapper>
          </MessageButton>
        </ErrorNumberAndMessage>
      </ErrorContainer>
    </MainLayout>
  );
};

export default ErrorPage;
