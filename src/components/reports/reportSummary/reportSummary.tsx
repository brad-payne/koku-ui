import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Title,
} from '@patternfly/react-core';
import {
  Skeleton,
  SkeletonSize,
} from '@redhat-cloud-services/frontend-components/components/Skeleton';
import React from 'react';
import { InjectedTranslateProps, translate } from 'react-i18next';
import { FetchStatus } from 'store/common';
import { styles } from './reportSummary.styles';

interface ReportSummaryProps extends InjectedTranslateProps {
  children?: React.ReactNode;
  detailsLink?: React.ReactNode;
  status: number;
  subTitle?: string;
  title: string;
}

const ReportSummaryBase: React.SFC<ReportSummaryProps> = ({
  children,
  detailsLink,
  title,
  subTitle,
  status,
  t,
}) => (
  <Card style={styles.reportSummary}>
    <CardTitle>
      <Title headingLevel="h2" size="lg">
        {title}
      </Title>
      {Boolean(subTitle) && <p style={styles.subtitle}>{subTitle}</p>}
    </CardTitle>
    <CardBody>
      {status === FetchStatus.inProgress ? (
        <>
          <Skeleton size={SkeletonSize.xs} />
          <Skeleton style={styles.chartSkeleton} size={SkeletonSize.md} />
          <Skeleton size={SkeletonSize.sm} />
          <Skeleton style={styles.legendSkeleton} size={SkeletonSize.xs} />
        </>
      ) : (
        children
      )}
    </CardBody>
    {Boolean(detailsLink) && <CardFooter>{detailsLink}</CardFooter>}
  </Card>
);

const ReportSummary = translate()(ReportSummaryBase);

export { ReportSummary, ReportSummaryProps };
