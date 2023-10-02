import Header from '../Header';
import Footer from '../Footer';
import FloatingActionButtons from '@/components/molecules/FloatingActionButton';

const MainLayout = ({children,}: {children: React.ReactNode}) => {
  return (
    <div>
      <Header />
      <FloatingActionButtons />
      { children }
      <Footer />
    </div>
  )
}

export default MainLayout;