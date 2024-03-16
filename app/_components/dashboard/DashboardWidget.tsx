import { FC, ReactNode } from 'react';
import { Box, Card, Stack, Typography } from '@mui/material';

interface DashboardWidgetSummaryProps {
  title: string;
  total: number;
  icon?: ReactNode;
  color?: string;
  sx?: Record<string, any>;
}

const DashboardWidgetSummary: FC<DashboardWidgetSummaryProps> = ({ title, total, icon, color = 'primary', sx, ...other }) => {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>}

      <Stack spacing={0.5}>
        <Typography variant="h4">{total}</Typography>

        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {title}
        </Typography>
      </Stack>
    </Card>
  );
};

export default DashboardWidgetSummary;