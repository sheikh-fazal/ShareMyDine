import AdministrationIcon from '../../assets/svg/compliance-management/administrativeIcon.svg'
import DataProtectionIcon from '../../assets/svg/compliance-management/dataProtectionIcon.svg'
import CovidIcon from '../../assets/svg/compliance-management/covidIcon.svg'
import CareManagementIcon from '../../assets/svg/compliance-management/careManagementIcon.svg'
import CarePlanningIcon from '../../assets/svg/compliance-management/carePlainningIcon.svg'
import HealthIcon from '../../assets/svg/compliance-management/healthIcon.svg'
import HumanResourcesIcon from '../../assets/svg/compliance-management/humanResourceIcon.svg'
import MedicationMangementIcon from '../../assets/svg/compliance-management/medicationIcon.svg'
import QualityAssuranceIcon from '../../assets/svg/compliance-management/qualityAssuranceIcon.svg'
import SupportServicesIcon from '../../assets/svg/compliance-management/supportServicesIcon.svg'
import FundamentalStandardsIcon from '../../assets/svg/compliance-management/fundamentalServicesIcon.svg'
import MockInspectionIcon from '../../assets/svg/compliance-management/mockInspectionIcon.svg'
import StakeHoldersIcon from '../../assets/svg/compliance-management/stakeholderIcon.svg'
import AddIcon from '../../assets/svg/compliance-management/addIcon.svg';
import PdfIcon from '../../assets/svg/compliance-management/pdfIcon.svg';
import { Box, Typography } from '@mui/material'
import Image from 'next/image';

const PDF = ({ data }: any) => {
    return (
        <>{data?.map((obj: any, i: number) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', my: 1 }}>
                <Image src={PdfIcon} alt='icon' height={30} width={30} />
                <Typography>{obj?.title}</Typography>
            </Box>
        ))}</>
    )
}

const pdfData = [1, 2, 3, 4, 5].map((value) => {
    return { title: 'this is pdf ' + value }
})

export const ComplianceTabsData = [
    {
        index: 0,
        title: "Administration",
        icon: AdministrationIcon,
        color: '#0E918C',
        innerDataArray: [
            {
                id: 1,
                title: "Business Operations",
                component: <PDF data={pdfData} />
            },
            {
                id: 2,
                title: "Communications",
                component: <PDF data={pdfData} />
            },
            {
                id: 3,
                title: "Registration & Compliance-Administration",
                component: <PDF data={pdfData} />
            },
            {
                id: 4,
                title: "Finance ",
                component: <PDF data={pdfData} />
            },

        ],
    },
    {
        index: 1,
        title: "Data Protection",
        icon: DataProtectionIcon,
        color: '#465987',
        innerDataArray: [
            {
                id: 1,
                title: "Policies",
                component: <PDF data={pdfData} />
            },
            {
                id: 2,
                title: "Forms",
                component: <PDF data={pdfData} />
            },

        ],
    },
    {
        index: 2,
        title: "Covid-19 Hub",
        icon: CovidIcon,
        color: '#FF9900',
        innerDataArray: [
            {
                id: 1,
                title: "Health and Safety COVID-19",
                component: <PDF data={pdfData} />
            },
            {
                id: 2,
                title: "Human Resources COVID-19",
                component: <PDF data={pdfData} />
            },
            {
                id: 2,
                title: "Care Management COVID-19",
                component: <PDF data={pdfData} />
            },
            {
                id: 2,
                title: "Business Admin COVID-19",
                component: <PDF data={pdfData} />
            },
        ],
    },
    {
        index: 3,
        title: "Care Management",
        icon: CareManagementIcon,
        color: '#10B0C6',
        innerDataArray: [
            {
                id: 1,
                title: "Rights and Abuse",
                component: <PDF data={pdfData} />
            },
            {
                id: 1,
                title: "Risk Assessment and Personal Planning",
                component: <PDF data={pdfData} />
            },
            {
                id: 1,
                title: "Clinical  governance",
                component: <PDF data={pdfData} />
            },

        ],
    },
    {
        index: 4,
        title: "Care Planning",
        icon: CarePlanningIcon,
        color: '#F63D31',
        innerDataArray: [
            {
                id: 1,
                title: "Risk Assessment and Personal Planning",
                component: <PDF data={pdfData} />
            },
            {
                id: 2,
                title: "Service Commencement",
                component: <PDF data={pdfData} />
            },
            {
                id: 3,
                title: "Care Plans",
                component: <PDF data={pdfData} />
            },
            {
                id: 4,
                title: "Assessments",
                component: <PDF data={pdfData} />
            },
            {
                id: 5,
                title: "Supplementary Documents",
                component: <PDF data={pdfData} />
            },
        ],
    },
    {
        index: 5,
        title: "Health & Saftey",
        icon: HealthIcon,
        color: '#0E918C',
        innerDataArray: [
            {
                id: 1,
                title: "Risk Assessments",
                component: <PDF data={pdfData} />,
            },
            {
                id: 2,
                title: "Health and  Safety ",
                component: <PDF data={pdfData} />,
            },
            {
                id: 3,
                title: "Residential Services ",
                component: <PDF data={pdfData} />,
            },
            {
                id: 4,
                title: "Building and Equipmen ",
                component: <PDF data={pdfData} />,
            },
        ],
    },
    {
        index: 6,
        title: "Human Resources",
        icon: HumanResourcesIcon,
        color: '#10B0C6',
        innerDataArray: [
            {
                id: 1,
                title: "Absence, Holidays and Sickness ",
                component: <PDF data={pdfData} />
            },
            {
                id: 2,
                title: "Contract of  Employment",
                component: <PDF data={pdfData} />
            },
            {
                id: 3,
                title: "Equality & human Rights",
                component: <PDF data={pdfData} />
            },
            {
                id: 4,
                title: "Well Being",
                component: <PDF data={pdfData} />
            },
            {
                id: 5,
                title: "Miscellaneous",
                component: <PDF data={pdfData} />
            },
        ],
    },
    {
        index: 7,
        title: "Medications Management",
        icon: MedicationMangementIcon,
        color: '#23183D',
        innerDataArray: [
            {
                id: 1,
                title: "Medications Management",
                component: <PDF data={pdfData} />
            },

        ],
    },
    {
        index: 8,
        title: "Quality Assurance",
        icon: QualityAssuranceIcon,
        color: '#20BE60',
        innerDataArray: [
            {
                id: 1,
                title: "Administration Quality  asssurance",
                component: <PDF data={pdfData} />
            },
            {
                id: 2,
                title: "Human Resources Quality assurance",
                component: <PDF data={pdfData} />
            },
            {
                id: 3,
                title: "Management of Quality assurance ",
                component: <PDF data={pdfData} />
            },
            {
                id: 4,
                title: "Care Management  ",
                component: <PDF data={pdfData} />
            },

        ],
    },
    {
        index: 9,
        title: "Support Services",
        icon: SupportServicesIcon,
        color: '#F63D31',
        innerDataArray: [
            {
                id: 1,
                title: "Hygiene",
                component: <PDF data={pdfData} />
            },
            {
                id: 2,
                title: "Catering Services",
                component: <PDF data={pdfData} />
            },
            {
                id: 3,
                title: "Risk Assessment & Safety",
                component: <PDF data={pdfData} />
            },
        ],
    },
    {
        index: 10,
        title: "Fundamental Standards",
        icon: FundamentalStandardsIcon,
        color: '#23183D',
        innerDataArray: [
            {
                id: 1,
                title: "Policy",
                component: <PDF data={pdfData} />
            },

        ],
    },
    {
        index: 11,
        title: "Mock Inspection Toolkit",
        icon: MockInspectionIcon,
        color: '#FE7E6D',
        innerDataArray: [
            {
                id: 1,
                title: "Safe",
                component: <PDF data={pdfData} />
            },
            {
                id: 2,
                title: "Mock Inspection Toolkit",
                component: <PDF data={pdfData} />
            },
            {
                id: 3,
                title: "Caring",
                component: <PDF data={pdfData} />
            },
            {
                id: 4,
                title: "Responsive",
                component: <PDF data={pdfData} />
            },
            {
                id: 5,
                title: "Well Led",
                component: <PDF data={pdfData} />
            },
            {
                id: 6,
                title: "Effective",
                component: <PDF data={pdfData} />
            },
        ],
    },
    {
        index: 12,
        title: "Stakeholder Surveys",
        icon: StakeHoldersIcon,
        color: '#544179',
        innerDataArray: [
            {
                id: 1,
                title: "Guidance Policy",
                component: <PDF data={pdfData} />
            },
            {
                id: 2,
                title: "Service Users",
                component: <PDF data={pdfData} />
            },
            {
                id: 3,
                title: "Relatives and Representatives",
                component: <PDF data={pdfData} />
            },
            {
                id: 4,
                title: "Staff",
                component: <PDF data={pdfData} />
            },
            {
                id: 5,
                title: "External Professionals",
                component: <PDF data={pdfData} />
            },
        ],
    },
    {
        index: 13,
        title: "Add More",
        icon: AddIcon,
        color: '#F6830F',
    }
];
