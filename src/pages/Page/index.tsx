import React from "react";
import Header from "../../components/Header";
import WelcomeTransitionComponent from "../../components/WelcomeTransitionComponent";
import { iPage } from "./interface";
import { PageContainer } from "./styles";

const AppPage: React.FC<iPage> = ({
  children,
  loading,
  header: headerProps,
}) => {
  return (
    <React.Fragment>
      <WelcomeTransitionComponent loading={loading} />
      <PageContainer>
        {headerProps && <Header {...headerProps} />}
        {children}
      </PageContainer>
    </React.Fragment>
  )
}

export default AppPage;