import Layout from '@root/layouts';
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import SomeoneElseAdvocacyForm from '@root/sections/advocacy/child-advocacy/child-details/SomeoneElseAdvocacyForm/SomeoneElseAdvocacyForm';

const PAGE_TITLE = "Advocacy Form Filled by Someone Else";

AdvocacyPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Child Advocacy",
                    href: "/advocacy/child-advocacy/child-details",
                },
                {
                    name: "All",
                },
            ]}
            title={PAGE_TITLE}
        >
            {page}
        </Layout>
    );
};

export default function AdvocacyPage() {
    return (
        <Page title={PAGE_TITLE}>
            <SomeoneElseAdvocacyForm />
        </Page>
    );
}