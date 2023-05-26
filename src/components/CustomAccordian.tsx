import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Avatar, Box, alpha, useTheme,Stack } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import TableAction from "./TableAction";
const CustomAccordian = ({ handleRowDelete,handleTitleEdit, showBtn,subTitle, data, className, ...rest }: any) => {
  const [accordianExpanded, setAccordianExpanded] = React.useState(false);
  const [cancelDelete, setCancelDelete] = React.useState(false);
  const theme: any = useTheme();
  
  const handleDelete = () => {
    alert("deleted successfully");
    setCancelDelete(!cancelDelete);
  };
  return (
    <>
      {data?.map((item: any) => (
        <Accordion
          key={item.title}
          disableGutters
          sx={{
            marginTop: "20px",
            borderRadius: "5px",
            "&:not(:last-child)": {
              borderBottom: 0,
            },
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.grey[700]
                  : alpha(theme.palette.primary.main, 0.12),
              borderRadius: "5px",
            }}
            className="summary-Icon"
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={
              <Avatar
                sx={{
                  width: "22px",
                  height: "22px",
                  backgroundColor: theme.palette.primary.main,
                }}
              >
                {accordianExpanded ? (
                  <ArrowDropUpIcon sx={{ color: theme.palette.grey[0] }} />
                ) : (
                  <ArrowDropDownIcon sx={{ color: theme.palette.grey[0] }} />
                )}
              </Avatar>
            }
          >
            <Box
              width={'100%'} display={'flex'}
              alignItems={'center'} justifyContent={'space-between'}
              gap={2} flexWrap={'wrap'}
            >
              <Typography
                variant="subtitle1"
                className="title"
                sx={{
                  padding: "5px 10px",
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.grey[500]
                      : theme.palette.grey[700],
                }}
              >
                {item.title}
              </Typography>
              {showBtn && (

                <Stack direction="row" spacing={1}>
                  <TableAction size="small" type="edit" onClicked={(event: any) => {
                    event.stopPropagation();
                    event.nativeEvent.preventDefault();                   
                    handleTitleEdit(item);
                  }} />
                  <TableAction size="small" type="delete" onClicked={(event: any) => {
                      event.stopPropagation();
                      event.nativeEvent.preventDefault();
                      handleRowDelete(item)
                    }}
                  />
                </Stack>

              )}
            

              {subTitle && <Typography
                variant="subtitle2"
                className="title"
                sx={{ pr: '5px' }}
              >
                {item?.lectures?.length} lectuers - {item?.minutes} min
              </Typography>}
            </Box>

          </AccordionSummary>
          <AccordionDetails>{item.component}</AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default CustomAccordian;
