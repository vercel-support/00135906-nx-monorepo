import axios from 'axios';
import { Flex, Heading, Section, Tabs, Text } from '@with-nx/react-ui';

import DevBlogLayout from '../../components/layout/DevBlogLayout';
import VersionOne from '../../components/projects/find-freelance-sites/version-one';
import VersionTwo from '../../components/projects/find-freelance-sites/version-two';

export default function FreelanceFindSites() {
  const tabsData = [
    {
      label: 'Search - Free (10 MAX)',
      content: <VersionOne />,
    },
    {
      label: 'Search - Paid (100 MAX)',
      content: <VersionTwo />,
    },
  ];

  return (
    <DevBlogLayout>
      <Section>
        <Flex className="flex-col space-y-4">
          <Heading level={1}>Find Freelance Sites</Heading>
          <Text>
            This tool is to find older websites that need an a refresg. The
            search utilizes Googles Custom Search API with the parameters that
            can help find older websites: age of website, file type of site, and
            exclude terms that show up on the site.
          </Text>
        </Flex>
        <Tabs data={tabsData} />
      </Section>
    </DevBlogLayout>
  );
}
