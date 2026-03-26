import { PageHeader, OverflowBreadcrumbs } from '@diligentcorp/atlas-react-bundle';
import { Box, Card, CardActionArea, CardContent, Link, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router';

import PageLayout from '../components/PageLayout.js';

const ASSETS = [
  {
    category: 'Discovery Brief',
    title: 'Connected Compliance: AI-Powered Cross-Domain Compliance Intelligence',
    url: 'https://dilcorp-my.sharepoint.com/:w:/g/personal/rkohn_diligent_com/IQDWPYTALVYeQLOAF4CniVxSAdrsuNrCPXWHn9dFa8Oc264?e=etcCPE&wdExp=TEAMS-TREATMENT&web=1',
  },
  {
    category: 'AI Product Requirements Document',
    title: 'Connected Compliance AI Reporting: Quarterly E&C Compliance Report',
    url: 'https://dilcorp-my.sharepoint.com/:w:/g/personal/rkohn_diligent_com/IQDN-rlswQ1aSJrwb2LOPQF-AYG3WsINbfbu8lkjQAd5H3o?e=B1BI2Q&wdExp=TEAMS-TREATMENT&web=1',
  },
  {
    category: 'AI Product Requirements Document',
    title: 'Connected Compliance: Command Center — V1 New Feature',
    url: 'https://dilcorp-my.sharepoint.com/:w:/g/personal/rkohn_diligent_com/IQBAB-Ql0xXeQrB2zp2aETttATc-bzqMPi1LrU09KSxnwhc?e=Z2Sd3a&wdExp=TEAMS-TREATMENT&web=1',
  },
];

export default function ReferenceAssetsPage() {
  return (
    <PageLayout>
      <PageHeader
        pageTitle="Reference Assets"
        breadcrumbs={
          <OverflowBreadcrumbs
            leadingElement={<span>Connected Compliance</span>}
            items={[
              {
                id: 'reference-assets',
                label: 'Reference Assets',
                url: '/',
              },
            ]}
            hideLastItem={true}
            aria-label="Breadcrumbs"
          >
            {({ label, url }) => <NavLink to={url}>{label}</NavLink>}
          </OverflowBreadcrumbs>
        }
      />
      <Stack gap={2}>
        {ASSETS.map(({ category, title, url }) => (
          <Card key={url} variant="outlined">
            <CardActionArea component={Link} href={url} target="_blank" rel="noopener noreferrer">
              <CardContent>
                <Box>
                  <Typography variant="labelSm" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {category}
                  </Typography>
                  <Typography variant="textMd" fontWeight={500} sx={{ mt: 0.5 }}>
                    {title}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </PageLayout>
  );
}
