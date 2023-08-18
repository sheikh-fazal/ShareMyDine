import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import AbsenceInfoForm from "@root/sections/foster-child/education-records/absence-info/absence-info-form/AbsenceInfoForm";
import { useRouter } from "next/router";
import { AbsenceInfoDocument } from "@root/sections/foster-child/education-records/absence-info/absence-info-document/AbsenceInfoDocument";
import { useGetAbsenceInfoByIdQuery } from "@root/services/foster-child/education-records/absence-info/AbsenceInfoAPI";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Absence Info List",
    href: `/foster-child/education-records/absence-info?fosterChildId=${query}`,
  },
  {
    name: "Absence Info",
    href: "",
  },
];

const PAGE_TITLE = "Absence Info";
AbsenceInfoFormLayout.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
export default function AbsenceInfoFormLayout() {
  const { query } = useRouter();
  const router = useRouter();
  const absenceInfoId = query["absence_info_id"];
  const { data, isLoading, isSuccess, isError } = useGetAbsenceInfoByIdQuery(
    absenceInfoId,
    {
      skip: !!!query?.absence_info_id,
    }
  );
  // (
  //   absenceInfoId ?? "",
  //   {
  //     skip: true,
  //   }
  // );

  // const { query } = useRouter();
  // const familyPersonId = query["family_person_id"];
  // const { data, isLoading, isSuccess, isError } =
  //   useGetFamilyPersonListByIdQuery(familyPersonId, {
  //     skip: !!!query?.family_person_id,
  //   });
  // function submitForm(data:any){
  //  ///
  // }

  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs tabsDataArray={["Absence Info", "Documents"]}>
        <AbsenceInfoForm
          // onSubmitted={submitForm}
          // defaultValues={data?.[0]}
          defaultValues={{
            ...data?.[0],
            dateOfAbsence: new Date(data?.[0]?.dateOfAbsence),
            label: new Date(data?.[0]?.label),
          }}
        />
        <AbsenceInfoDocument />
      </HorizaontalTabs>
    </>
  );
}
