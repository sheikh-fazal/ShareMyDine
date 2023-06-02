// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import FosterCarerRecruitmentHeader from "@root/sections/foster-carer-recruitment/FosterCarerRecruitmentHeader";

// ----------------------------------------------------------------------
// Constants
const PAGE_TITLE = "Foster Carer Recruitment";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    href: "/",
  },
  {
    name: PAGE_TITLE,
    href: "",
  },
];

// ----------------------------------------------------------------------

FosterCarerRecruitment.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function FosterCarerRecruitment() {
  return (
    <Page title={PAGE_TITLE}>
      <FosterCarerRecruitmentHeader />
    </Page>
  );
}
