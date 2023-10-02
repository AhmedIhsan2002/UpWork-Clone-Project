"use client"
import { StyledMainGrid, StyledPage } from '@/style/common';
import { Container } from '@mui/material';
import Content from './sections/Content';
import Sidebar from './sections/Sidebar';

const HomePage = () => {
  return (
    <StyledPage as="main">
      <Container>
        <StyledMainGrid>
          <Content />
          <Sidebar />
        </StyledMainGrid>
      </Container>
    </StyledPage>
  )
}

export default HomePage;