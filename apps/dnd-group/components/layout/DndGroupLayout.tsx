import dynamic from 'next/dynamic';
import Head from 'next/head';
import { PageLayout } from '@with-nx/react-ui/templates';

import DndGroupHeader from './DndGroupHeader';

const DndGroupFooter = dynamic(() => import('./DndGroupFooter'), {
  ssr: false,
});

interface DndGroupLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  hideNavBar?: boolean;
}

const DndGroupLayout: React.FC<DndGroupLayoutProps> = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: DndGroupLayoutProps) => {
  return (
    <PageLayout
      className={className ? className : 'w-full'}
      header={hideNavBarProp ? '' : <DndGroupHeader />}
      footer={<DndGroupFooter />}
    >
      <Head>
        <title>{title ? title : 'Daosim'}</title>
        <meta
          name="description"
          content={
            description
              ? description
              : 'A site dedicated to daoism and eastern philosophy.'
          }
        />
      </Head>
      <div className="container mx-auto">{children}</div>
    </PageLayout>
  );
};

export default DndGroupLayout;