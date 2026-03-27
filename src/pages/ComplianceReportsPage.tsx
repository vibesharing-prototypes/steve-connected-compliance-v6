import { OverflowBreadcrumbs, PageHeader, StatusIndicator } from '@diligentcorp/atlas-react-bundle';
import { Box, Button, Chip, Container, Divider, Link as MuiLink, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router';

const POSTURE = {
  status: 'Deteriorating',
  quarter: 'Q1 2026',
  date: '19 March 2026',
  signals: 4,
  summary:
    'The single most significant cross-domain risk is a Harassment crisis concentrated in London: 17 Harassment cases from ~180 employees coincide with 5 of 6 Harassment & Workplace Conduct policies overdue for review. Overall case volume surged 70% quarter-over-quarter — the highest single-quarter total in programme history.',
  metrics: [
    { label: 'Cases this quarter', value: '17', delta: '+70% QoQ', deltaColor: 'error.main' },
    { label: 'Open cases', value: '29', delta: '11 aged 180+ days', deltaColor: 'warning.main' },
    { label: 'Policies overdue', value: '20 / 50', delta: 'avg 145 days overdue', deltaColor: 'error.main' },
    { label: 'Cross-domain signals', value: '4', delta: '3 HIGH · 1 MEDIUM', deltaColor: 'warning.main' },
  ],
};

const PRODUCTS = [
  {
    label: 'Speak Up',
    description: 'Ethics & misconduct reporting',
    stats: [
      { label: 'Cases Q1 2026', value: '17' },
      { label: 'Open cases', value: '29' },
      { label: 'Anonymous rate', value: '38.8%' },
    ],
    status: 'warning' as const,
    statusLabel: 'Needs attention',
  },
  {
    label: 'Policy Manager',
    description: 'Policy lifecycle & compliance',
    stats: [
      { label: 'Total policies', value: '50' },
      { label: 'Overdue for review', value: '20' },
      { label: 'Longest overdue', value: '398 days' },
    ],
    status: 'error' as const,
    statusLabel: 'Critical',
  },
  {
    label: 'Training',
    description: 'Compliance training & certification',
    stats: [
      { label: 'Records', value: '1,204' },
      { label: 'Last updated', value: '15 Mar 2026' },
      { label: 'Completion rate', value: '—' },
    ],
    status: 'generic' as const,
    statusLabel: 'Up to date',
  },
];

const RECENT_REPORTS = [
  {
    title: 'Quarterly E&C Compliance Report - Q1 2026',
    date: '19 March 2026',
    status: 'Deteriorating',
    statusColor: 'error' as const,
    type: 'Configured' as const,
    to: '/reports/q1-2026',
  },
  {
    title: 'Quarterly E&C Compliance Report - Q4 2025',
    date: '21 December 2025',
    status: 'Stable',
    statusColor: 'success' as const,
    type: 'Standard' as const,
    to: null,
  },
  {
    title: 'Quarterly E&C Compliance Report - Q3 2025',
    date: '22 September 2025',
    status: 'Stable',
    statusColor: 'success' as const,
    type: 'Standard' as const,
    to: null,
  },
];

export default function ComplianceReportsPage() {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 3 }}>
      <Stack gap={4}>
        <PageHeader
          pageTitle="Connected Compliance"
          pageSubtitle="Compliance posture across Speak Up, Policy Manager, and Training"
          breadcrumbs={
            <OverflowBreadcrumbs
              leadingElement={<span>Connected Compliance</span>}
              items={[{ id: 'compliance-reports', label: 'Reports', url: '/connected-compliance' }]}
              hideLastItem
              aria-label="Breadcrumbs"
            >
              {({ label, url }) => <NavLink to={url}>{label}</NavLink>}
            </OverflowBreadcrumbs>
          }
        />

        {/* Posture overview */}
        <Box>
          <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2 }}>
            <Typography variant="h2">Compliance posture</Typography>
            <Chip label={POSTURE.quarter} size="small" />
            <StatusIndicator label={POSTURE.status} color="warning" />
          </Stack>

          <Stack direction="row" gap={2} sx={{ mb: 2 }}>
            {POSTURE.metrics.map(({ label, value, delta, deltaColor }) => (
              <Box
                key={label}
                sx={({ palette }) => ({
                  flex: 1,
                  border: '1px solid',
                  borderColor: palette.divider,
                  borderRadius: 1,
                  p: 2,
                })}
              >
                <Typography variant="h2" component="p">
                  {value}
                </Typography>
                <Typography variant="labelSm" color="text.secondary" display="block">
                  {label}
                </Typography>
                <Typography variant="labelXs" sx={{ color: deltaColor, mt: 0.5 }} display="block">
                  {delta}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Typography variant="body1" color="text.secondary">
            {POSTURE.summary}
          </Typography>
          <Stack direction="row" gap={2} alignItems="center" sx={{ mt: 1.5 }}>
            <MuiLink component={NavLink} to="/reports/q1-2026" underline="hover" variant="body1">
              View report
            </MuiLink>
            <Typography variant="textSm" color="text.secondary">
              Generated {POSTURE.date}
            </Typography>
          </Stack>
        </Box>

        <Divider />

        {/* Product tiles */}
        <Box>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Products
          </Typography>
          <Stack direction="row" gap={2}>
            {PRODUCTS.map(({ label, description, stats, status, statusLabel }) => (
              <Box
                key={label}
                sx={({ palette }) => ({
                  flex: 1,
                  border: '1px solid',
                  borderColor: palette.divider,
                  borderRadius: 1,
                  p: 2.5,
                })}
              >
                <Stack gap={1.5}>
                  <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
                    <Box>
                      <Typography variant="h3">{label}</Typography>
                      <Typography variant="textSm" color="text.secondary">
                        {description}
                      </Typography>
                    </Box>
                    <StatusIndicator label={statusLabel} color={status} />
                  </Stack>
                  <Divider />
                  {stats.map(({ label: statLabel, value }) => (
                    <Stack key={statLabel} direction="row" justifyContent="space-between" alignItems="baseline">
                      <Typography variant="textSm" color="text.secondary">
                        {statLabel}
                      </Typography>
                      <Typography variant="labelSm">{value}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>

        <Divider />

        {/* Recent reports */}
        <Box>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Recent reports
          </Typography>
          <Box sx={{ overflowX: 'auto' }}>
            <Table size="small" sx={{ minWidth: 600, '& .MuiTableCell-root': { borderColor: 'divider', py: '10px', px: '12px' } }}>
              <TableHead>
                <TableRow sx={{ bgcolor: 'grey.100' }}>
                  {['Report', 'Generated', 'Status', 'Type', 'Actions'].map((h) => (
                    <TableCell key={h} sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}>
                      {h}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {RECENT_REPORTS.map(({ title, date, status, statusColor, type, to }) => (
                  <TableRow key={title} hover={false} sx={{ opacity: to ? 1 : 0.5 }}>
                    <TableCell>
                      <Typography variant="labelSm" sx={{ fontWeight: 600 }}>
                        {title}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>
                      <Typography variant="textSm" color="text.secondary">
                        {date}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>
                      <StatusIndicator label={status} color={statusColor} />
                    </TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>
                      <Chip
                        label={type}
                        size="small"
                        variant={type === 'Configured' ? 'filled' : 'outlined'}
                        sx={type === 'Configured' ? { bgcolor: 'primary.50', color: 'primary.main', borderColor: 'primary.200', fontWeight: 500 } : {}}
                      />
                    </TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>
                      <Stack direction="row" gap={0.5}>
                        <Button size="small" variant="text" disabled={!to} onClick={() => to && navigate(to)}>
                          Edit
                        </Button>
                        <Button size="small" variant="text" disabled={!to} onClick={() => to && navigate(`${to}/share`)}>
                          Share
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <Stack direction="row" justifyContent="flex-end" sx={{ mt: 1.5 }}>
            <MuiLink component={NavLink} to="/reports" underline="hover" variant="body1">
              View all reports
            </MuiLink>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
