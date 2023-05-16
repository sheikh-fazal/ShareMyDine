import { Box, Card, Icon, Skeleton, Typography } from "@mui/material";
import Link from "next/link";
import MyAvatar from "@root/components/MyAvatar";
import PhoneIcon from "@mui/icons-material/Phone";
import { useViewProfile } from "./useViewProfile";

const ViewProfile = () => {
  const { theme, data, isLoading } = useViewProfile();
  return (
    <Card sx={styles.rootCard}>
      <Box sx={styles.profileDetailsWrapper}>
        <Box sx={styles.profileData}>
          <Typography variant="subtitle1">
            {isLoading ? (
              <Skeleton variant="text" animation="wave" width={100} />
            ) : (
              `${data?.data?.firstName ?? "-"} ${data?.data?.lastName ?? "-"}`
            )}
          </Typography>
          <Typography variant="caption">
            {isLoading ? (
              <Skeleton variant="text" animation="wave" width={100} />
            ) : (
              data?.data.defaultRole ?? "-"
            )}
          </Typography>
        </Box>
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="rounded"
            width={112}
            height={112}
            sx={{ position: "absolute", bottom: "-20%" }}
          />
        ) : (
          <MyAvatar sx={styles.avatar} />
        )}
      </Box>
      <Typography variant="subtitle2" sx={styles.locationText}>
        {isLoading ? (
          <Skeleton animation="wave" variant="text" />
        ) : (
          data?.data?.location ?? "-"
        )}
      </Typography>
      <Box sx={styles.phoneWrapper}>
        {isLoading ? (
          <Skeleton variant="text" animation="wave" width={100} />
        ) : (
          <>
            <Icon>
              <PhoneIcon />
            </Icon>
            <Typography variant="caption">
              {data?.data?.phoneNumber ?? "-"}
            </Typography>
          </>
        )}
      </Box>
      <Box sx={styles.linksWrapper}>
        <Link
          href="/personal-details/update-profile"
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="subtitle2"
            sx={{ color: theme.palette.primary.main }}
          >
            {isLoading ? (
              <Skeleton variant="text" animation="wave" width={100} />
            ) : (
              `Edit Full Profile`
            )}
          </Typography>
        </Link>
        <Link
          href="/personal-details/profile"
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="subtitle2"
            sx={{ color: theme.palette.primary.main }}
          >
            {isLoading ? (
              <Skeleton variant="text" animation="wave" width={100} />
            ) : (
              `View Profile`
            )}
          </Typography>
        </Link>
      </Box>
    </Card>
  );
};

export default ViewProfile;

//Styles

const styles: any = {
  rootCard: (theme: any) => ({
    boxShadow: theme.shadows[5],
    pb: 1.5,
    borderRadius: "10px",
  }),
  profileDetailsWrapper: (theme: any) => ({
    backgroundColor: theme.palette.primary.main,
    height: "150px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
  }),
  profileData: (theme: any) => ({
    textAlign: "center",
    mt: 0.5,
    color: theme.palette.grey[0],
  }),
  locationText: (theme: any) => ({
    whiteSpace: "pre",
    mt: 5.5,
    mb: 1,
    textAlign: "center",
    color: theme.palette.grey[600],
  }),
  phoneWrapper: (theme: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 0.5,
    color: theme.palette.grey[600],
  }),
  linksWrapper: (theme: any) => ({
    display: "flex",
    mt: { xs: 2, sm: "none" },
    justifyContent: "space-between",
    padding: {
      xs: "10px 20px 0 20px",
      sm: "30px 50px 0 50px",
      xl: "30px 30px 0 30px",
    },
  }),
  avatar: {
    width: "112px",
    height: "112px",
    position: "absolute",
    borderRadius: "10px",
    textAlign: "center",
    bottom: "-20%",
    boxShadow: "0px 0.5px 3px 0px rgba(0, 0, 0, 0.5)",
  },
};
